import React from "react";
import Joi from "joi";

import Form from "./Form";
import GoogleAuth from "./GoogleAuth";
import useAuth from "../../hooks/useAuth";
import authApi from "../../api/auth";
import useAlert from "../../hooks/useAlert";

const fields = [
  {
    label: "Email",
    placeholder: "example@gmail.com",
    type: "text",
    name: "email",
    help: "Type your email address",
  },

  {
    label: "Password",
    placeholder: "password",
    type: "password",
    help: "Type your password",
    name: "password",
  },
];

let schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(5).required(),
});

export default function LoginForm() {
  const auth = useAuth();
  const alert = useAlert();

  const onSubmit = async (values) => {};

  const handleGoogleAuth = async (res) => {
    const { tokenId } = res;
    try {
      const response = await authApi.googleAuth(tokenId);

      auth.login(response.data.token);
      alert.setAlert({
        message: "Login Success!",
      });
    } catch (error) {
      console.error(error);
    }
    // auth.login(profile);
  };

  const handleFailure = (error) => {
    console.log("Google Authentication Failed.", error);
  };

  const buttons = [
    {
      label: "SIGN IN WITH GOOGLE",
      button: (
        <GoogleAuth
          label="SIGN IN WITH GOOGLE"
          variant="text"
          onSuccess={handleGoogleAuth}
          onFailure={handleFailure}
        />
      ),
    },
  ];
  return (
    <Form
      fields={fields}
      onSubmit={onSubmit}
      schema={schema}
      formTitle="Login Form"
      buttons={buttons}
      submitDisabled
    />
  );
}
