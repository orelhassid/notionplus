import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { SECRET, expiresIn, CLIENT_ID } from "../config/index.js";

const googleCLient = new OAuth2Client(CLIENT_ID);

const makeUsername = (name) => name.toLocaleLowerCase().replace(/\s+/g, "");

const googleVerify = async (token) => {
  try {
    const ticket = await googleCLient.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userId = payload["sub"];
    return { payload, userId };
  } catch (error) {
    console.error("googleVerify", error);
    res.status(500).json(error);
  }
};
export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    // Token Verification
    const { payload, userId } = await googleVerify(token);

    const user = await createUser({
      email: payload.email,
      name: payload.name,
      image: payload.picture,
      firstName: payload.given_name,
      lastName: payload.family_name,
      username: makeUsername(payload.name),
    });

    console.log("Google Authentication ticket", user.toObject());

    // res.send(user).status(200);
    const tokenSign = jwt.sign({ ...user.toObject(), id: user._id }, SECRET, {
      expiresIn,
    });

    res.status(200).json({ user, token: tokenSign });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const createUser = async (user) => {
  try {
    const newUser = await User.findOneAndUpdate({ email: user.email }, user, {
      new: true,
      upsert: true,
    }).exec();
    return newUser;
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default {
  googleAuth,
};
