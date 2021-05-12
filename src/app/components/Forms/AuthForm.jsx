import React from "react";
import GoogleAuth from "../Auth/GoogleAuth";

// import Joi from "joi";
// import Form from "../FormsParts/Form";
// import useAlert from "../../hooks/useAlert";
// import useAuth from "../../hooks/useAuth";
// import SelectField from "../FormsParts/fields/SelectField";
// import { TextField } from "@material-ui/core";

export default function AuthForm() {
  return <GoogleAuth />;
}

// const authHook = useAuth();

// const onSubmit = async (userInfo) => {
//   console.log("Form Submit", userInfo);
//   await authHook.login(userInfo);
// };
// <Form onSubmit={onSubmit} options={options} fields={fields} schema={schema}>
//   {/* Controlled Element */}
// </Form>

// const fields = [
//   {
//     label: "Email",
//     placeholder: "example@domain.com",
//     name: "email",
//     type: "email",
//   },
//   {
//     label: "Password",
//     placeholder: "i.e 1234 just kidding, choose a strong password",
//     name: "password",
//     type: "password",
//   },
// ];

// const schema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

// const options = {
//   formTitle: "Authenticate",
//   submitLabel: "Authenticate",
// };
