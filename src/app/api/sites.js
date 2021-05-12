import client from "./client";

const getSites = () => client.get("/sites");

const createSite = (postInfo) => client.post("/posts");

const upadtedSite = (siteId, siteInfo) =>
  client.post(`/sites/${siteId}`, siteInfo);

const deleteSite = (siteId) => client.delete(`/sites/${siteId}`);

export default {
  getSites,
  createSite,
  upadtedSite,
  deleteSite,
};
