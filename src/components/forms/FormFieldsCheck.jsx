import React, { useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";

export default function FormFieldsCheck() {
  const [formState, setFormState] = useState({
    name: "",
    select: "",
  });

  const onSubmit = async () => {
    console.log("formState", formState);
    try {
    } catch (error) {}
  };
  const onError = () => {};

  const fields = [
    {
      type: "text",
      name: "name",
      label: "Text Field",
      placeholder: "name",
      help: "name",
    },
    {
      type: "select",
      name: "select",
      label: "Select Field",
      placeholder: "Placeholder",
      help: "Help text",
      options: [
        {
          label: "Item 1",
          value: "item_1",
        },
        {
          label: "Item 2",
          value: "item_2",
        },
      ],
    },
    {
      type: "file",
      name: "image",
      label: "Upload Image",
      placeholder: "placeholder",
      help: "help",
    },
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({
        name: Joi.string(),
        select: Joi.string(),
        image: Joi.string(),
      }),
    []
  );

  return (
    <Form
      formState={formState}
      setFormState={setFormState}
      fields={fields}
      schema={schema}
      onSubmit={onSubmit}
      onError={onError}
      header={{
        title: "Form Title",
      }}
      submitLabel="Submit"
    ></Form>
  );
}
