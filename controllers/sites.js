import Site from "../models/site.js";

export const getSites = async (req, res) => {
  try {
    const sites = await Site.find();
    res.status(200).json(sites);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSite = async (req, res) => {
  //   const { username } = req.params;
  try {
    const sites = await Site.find({ userId: req.userId });
    res.status(200).json(sites);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSite = async (req, res) => {
  try {
    const site = new Site({ ...req.body, userId: req.userId }); // Need to pass res.body
    await site.save();
    res.status(201).json(site);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
