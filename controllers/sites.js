import Site from "../models/site.js";
import mongoose from "mongoose";

const makeSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

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
    const site = new Site({
      ...req.body,
      userId: req.userId,
      slug: makeSlug(req.body.title),
    }); // Need to pass res.body
    await site.save();
    res.status(201).json(site);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteSite = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const removedSite = await Site.findByIdAndRemove(_id);
    res.status(200).json(removedSite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ details: error.message });
  }
};

export const updateSite = async (req, res) => {
  try {
    const site = req.body;
    const { _id } = site;
    console.log("Site", site);

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("The site id is inValid.");

    const updatedSite = await Site.findByIdAndUpdate(_id, site, { new: true });
    res.status(200).json(updatedSite);
  } catch (error) {
    res.status(500).send("Something wrong", { details: error.message });
    console.error(error);
  }
};

export const getSiteById = async (req, res) => {
  const { siteId } = req.params;
  try {
    const site = await Site.findById(siteId);
    res.status(200).json(site);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
