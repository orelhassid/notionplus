import { useState, useEffect } from "react";
import { useParams } from "react-router";
import siteApi from "../api/site";
import { isEmpty } from "../utils";
const useSites = () => {
  const [sites, setSites] = useState([]);
  const [currentSite, setCurrentSite] = useState({});
  const [isReady, setIsReady] = useState(false);
  const { slug } = useParams();

  const fetchSites = async () => {
    try {
      const { data } = await siteApi.getSites();
      setSites(data);
      setIsReady(true);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentSite = () => {
    const site = sites.find((s) => s.slug === slug);
    setCurrentSite(site);
  };

  useEffect(() => {
    if (slug && !isEmpty(sites)) {
      getCurrentSite();
    }
    return () => {
      setCurrentSite({});
    };
  }, [sites]);

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

    try {
      setSites(updatedSites);
      setCurrentSite(siteInfo);
      await siteApi.updateSite(siteInfo);
    } catch (error) {
      setSites(originalSites);
      console.error(error);
    }
  };

  return { sites, fetchSites, deleteSite, updateSite, currentSite, isReady };
};
export default useSites;
