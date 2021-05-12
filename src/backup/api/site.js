import client from "./client";

const createSite = (siteInfo) => client.post("/sites", siteInfo);

const getSites = () => client.get("/sites");

const updateSite = (siteInfo) => client.put("/sites", siteInfo);

const deleteSite = (siteId) => client.delete(`/sites/${siteId}`);

export default {
  createSite,
  getSites,
  deleteSite,
  updateSite,
};
