const generateCode = (siteSettings = {}) => {
  const { title, description, rtl, slug, theme } = siteSettings;

  console.log("Generate Code Run");
  return `
  cosole.log(${title}) 
    `;
};

export default {
  generateCode,
};

// {
//   _id: "604eeebf4373cb53709b8912",
// title: "Notion Plus50",…}
// description: "Build your own website with Notion"
// rtl: true
// slug: "notion-plus"
// theme: "night_owl"
// title: "Notion Plus50"
// userId:
