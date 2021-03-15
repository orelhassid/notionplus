import { useState, useEffect } from "react";
import siteApi from "../api/site";

const useSites = () => {
  const [sites, setSites] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const getSites = async () => {
    try {
      const { data } = await siteApi.getSites();
      setSites(data);
      setIsReady(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSites();
  }, []);

  const deleteSite = async (siteId) => {
    let originalSites = [...sites];
    let updatedSites = sites.filter((site) => site._id !== siteId);
    try {
      setSites(updatedSites);
      await siteApi.deleteSite(siteId);
    } catch (error) {
      setSites(originalSites);
      console.error(error);
    }
  };

  return { sites, deleteSite, isReady };
};
export default useSites;
