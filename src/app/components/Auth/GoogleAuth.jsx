import React from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../Button/Button";

import GoogleAuthButton from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../config";

export default function GoogleAuth() {
  const { authGoogle } = useAuth();

  return (
    <GoogleAuthButton
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={(googleInfo) => authGoogle(googleInfo)}
    />
  );
  // return <Button label="Google Auth" onClick={handleSubmit} />;
}
