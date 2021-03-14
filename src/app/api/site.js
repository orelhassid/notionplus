import client from "./client";

const createSite = (siteInfo) => client.post("/sites", siteInfo);

const getSites = () => client.get("/sites");

export default {
  createSite,
  getSites,
};
