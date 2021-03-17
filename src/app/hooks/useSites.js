import { useState, useEffect } from "react";
import siteApi from "../api/site";

const useSites = (slug) => {
  const [sites, setSites] = useState([]);
  const [currentSite, setCurrentSite] = useState({});
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

  useEffect(() => {
    const site = getSite(slug);
    setCurrentSite(site);
  }, [sites, slug]);

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

  const updateSite = async (siteInfo) => {
    let originalSites = [...sites];

    let updatedSites = sites.map((site) =>
      site._id === siteInfo._id ? { ...site, ...siteInfo } : site
    );
    console.log("updatedSites", {
      updatedSites,
      originalSites,
    });
    try {
      setSites(updatedSites);
      await siteApi.updateSite(siteInfo);
    } catch (error) {
      setSites(originalSites);
      console.error(error);
    }
  };

  const getSite = (slug) => {
    return sites.find((s) => s.slug === slug);
  };

  return { sites, deleteSite, updateSite, currentSite, isReady };
};
export default useSites;
