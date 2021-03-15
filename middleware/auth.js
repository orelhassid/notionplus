import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];

    let decodedData;

    decodedData = jwt.verify(token, secret);
    console.log("Decoede DAta", decodedData);
    req.userId = decodedData?.id;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError")
      return res.status(401).json({ details: error.message });

    res.status(500).json({ details: "No Token Provided" });
  }
};

export default auth;
