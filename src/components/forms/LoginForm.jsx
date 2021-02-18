import React, { useContext, useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";
import GoogleAuth from "./GoogleLogin";
import { loginUser } from "../../actions/user";
import { UserContext } from "../../contexts/UserContext";

export default function LoginForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { dispatchUser } = useContext(UserContext);
  const onSubmit = async () => {
    console.log("LoginForm: onSubmit", formState);
    try {
      await dispatchUser(loginUser(formState));
    } catch (error) {}
  };
  const onError = () => {};

  const fields = [
    {
      type: "email",
      name: "email",
      label: "email",
      placeholder: "email",
      help: "email",
    },
    {
      type: "password",
      name: "password",
      label: "password",
      placeholder: "password",
      help: "password",
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
        title: "Login Form",
      }}
      submitLabel="LOGIN"
    >
      <GoogleAuth />
    </Form>
  );
}
