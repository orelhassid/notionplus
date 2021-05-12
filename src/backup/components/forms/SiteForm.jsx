import React from "react";
import Joi from "joi";

import Form from "./Form";
import siteApi from "../../api/site";
import { useHistory } from "react-router";
import { SITES_RT } from "../../config/routes";

const fields = [
  {
    label: "Domain",
    placeholder: "orelhassid.com",
    type: "text",
    name: "domain",
    help: "you domain name will be use to query you site settings",
  },
  {
    label: "Title",
    placeholder: "Notion Plus",
    type: "text",
    name: "title",
    help: "Site Title",
  },

  {
    label: "Description",
    name: "description",
    placeholder:
      "Notion Plus Help you design beautiful website build with Notion",
    type: "text",
    help: "Site Description",
  },
  {
    label: "RTL",
    name: "rtl",
    type: "switch",
    help: "If selected your website will support Right-To-Left",
    defaultValue: false,
    options: [
      { value: true, label: "On" },
      { value: false, label: "Off" },
    ],
  },
  {
    label: "Theme",
    name: "theme",
    labelId: "theme",
    type: "select",
    help: "Your favorite Theme",
    options: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" },
    ],
    defaultValue: "light",
  },
];
/**
 * Title, Slug, description,
 * rtl, theme,
 * domain, pretty name
 */

let schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  rtl: Joi.boolean().optional().allow(""),
  theme: Joi.string().required(),
});

export default function SiteForm() {
  const history = useHistory();
  const onSubmit = async (siteSettings) => {
    // console.log("SiteForm Form", siteSettings);
    // Create Sites
    try {
      const result = await siteApi.createSite(siteSettings);
      // console.log("SiteForm createSite", result);
      history.push(SITES_RT);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      fields={fields}
      onSubmit={onSubmit}
      schema={schema}
      formTitle="Site Settings"
    />
  );
}
