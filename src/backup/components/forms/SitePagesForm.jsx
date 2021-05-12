import React, { useMemo, useState } from "react";
import Joi from "joi";

import Form from "./Form";
import siteApi from "../../api/site";
import { useHistory } from "react-router";
import { SITES_RT } from "../../config/routes";
import Button from "../Button";

const makeFields = (id, placeholder, help) => [
  {
    label: "Slug / Name",
    placeholder,
    type: "text",
    name: `slug_${id}`,
    help,
    xs: 6,
  },
  {
    label: "Page Block ID",
    placeholder: "d6844d45ac9b........",
    type: "text",
    name: `block_${id}`,
    help: "",
    xs: 6,
  },
];
export default function SitePagesForm() {
  const [fields, setFields] = useState(
    makeFields(1, "portfolio", "The main page should be empty")
  );

  let schema = {};
  schema = useMemo(() => {
    return Joi.object(
      fields.forEach((field) => (schema[field.name] = Joi.string().required()))
    );
  }, [fields]);

  const onSubmit = (data) => {
    console.log("Page Form OnSubmit", data);
  };

  const handleAddField = () => {
    const newFields = makeFields(2, "new page");
    setFields((prev) => [...prev, ...newFields]);
  };

  return (
    <>
      <Button label="Add Page" onClick={handleAddField} />
      <Form fields={fields} onSubmit={onSubmit} schema={schema} />
    </>
  );
}
