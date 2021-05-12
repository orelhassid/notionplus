import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { SECRET, expiresIn, CLIENT_ID } from "../config/index.js";

const googleCLient = new OAuth2Client(CLIENT_ID);

const makeUsername = (name) => name.toLocaleLowerCase().replace(/\s+/g, "");

const googleVerify = async (tokenId) => {
  const ticket = await googleCLient.verifyIdToken({
    idToken: tokenId,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userId = payload["sub"];
  return { payload, userId };
};
export const googleAuth = async (req, res) => {
  try {
    const { tokenId } = req.body;

    // Token Verification

    const { payload, userId } = await googleVerify(tokenId);

    const user = await createUser({
      email: payload.email,
      name: payload.name,
      image: payload.picture,
      firstName: payload.given_name,
      lastName: payload.family_name,
      username: makeUsername(payload.name),
    });

    // const isNew = false;
    const isNew = !user?.lastErrorObject?.updatedExisting;
    const userData = user?.value;

    const tokenSign = jwt.sign(userData.toJSON(), SECRET, {
      expiresIn,
    });

    res.status(200).json({ token: tokenSign, isNew });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const createUser = async (user) => {
  return await User.findOneAndUpdate({ email: user.email }, user, {
    new: true,
    upsert: true,
    rawResult: true,
  }).exec();
};

export default {
  googleAuth,
};
