import React, { useContext, useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";
// import { UserContext } from "../../contexts/UserContext";

export default function FormTemplate() {
  const [formState, setFormState] = useState({
    name: "",
  });
  //   const { dispatchUser } = useContext(UserContext);

  const onSubmit = async () => {
    try {
      //   await dispatchUser(loginUser(formState));
    } catch (error) {}
  };
  const onError = () => {};

  const fields = [
    {
      type: "text",
      name: "name",
      label: "name",
      placeholder: "name",
      help: "name",
    },
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({
        email: Joi.string(),
        password: Joi.string(),
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
