import React, { useEffect } from "react";
import Joi from "joi";

import Form from "./Form";
import siteApi from "../../api/site";
import { useHistory } from "react-router";
import { SITES_RT } from "../../config/routes";
import useAlert from "../../hooks/useAlert";
import useSites from "../../hooks/useSites";

const fields = [
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
      { value: "palenight", label: "Palenight" },
      { value: "solarized_light", label: "Solarized Light" },
      { value: "night_owl", label: "Night Owl" },
    ],
    defaultValue: "light",
  },
];

let schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  rtl: Joi.boolean().optional().allow(""),
  theme: Joi.string().required(),
});

export default function SiteManageForm({ site }) {
  const history = useHistory();
  const alert = useAlert();
  const siteHook = useSites();

  const newData = {
    title: site.title,
    description: site.description,
    rtl: site.rtl,
    theme: site.theme,
  };

  const onSubmit = async (siteSettings) => {
    // Create Sites
    try {
      await siteHook.updateSite({ ...site, ...siteSettings });
      alert.setAlert({
        message: "Site Updated",
      });
      // history.push(SITES_RT);
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
      newData={newData}
    />
  );
}
