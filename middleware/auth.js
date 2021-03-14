import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];

    console.log("Token", token);
    let decodedData;

    decodedData = jwt.verify(token, secret);
    req.userId = decodedData?.id;

    // if (token) {
    //   decodedData = jwt.verify(token, secret);

    // } else {
    //   decodedData = jwt.decode(token);

    //   req.userId = decodedData?.sub;
    // }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ details: "No Authorization Header" });
  }
};

export default auth;
