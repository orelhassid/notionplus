import { useContext, useEffect, useState } from "react";
import useAlert from "./useAlert";
import sitesApi from "../api/sites";

const useSites = () => {
  const [sites, setSites] = useState([]);
  const [isReady, setIsReady] = useState(true);

  const { setAlert } = useAlert();

  const getSites = async () => {
    try {
      const response = await sitesApi.getSites();
    } catch (error) {
      console.error(error);
    }
  };

  // const isReady = posts.status === "ready";

  useEffect(() => {
    // if (!isReady) return;
    // setCurrentPost(posts.posts.find((post) => post.id === postId));
  }, []);

  const getSiteById = (id) => {
    return sites.find((site) => site.id === id);
  };

  const updatePost = async (postInfo) => {
    try {
      setAlert({
        message: "Submit!",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createSite = async (siteInfo) => {};

  const deleteSite = async (siteInfo) => {
    try {
      setAlert({
        message: `Delete ${siteInfo.title} Successfuly`,
      });
    } catch (error) {
      setAlert({
        message: `Delete failed.`,
      });
    }
  };

  return {
    sites,
    isReady,
    getSites,
    // currentPost,
    createSite,
    updatePost,
    getSiteById,
    deleteSite,
    // restore,
  };
};
export default useSites;
