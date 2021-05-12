import React from "react";
import { GoogleLogin } from "react-google-login";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import { GOOGLE_CLIENT_ID } from "../../config/settings";
import Button from "../Button";

export default function GoogleAuth({ onSuccess, onFailure, ...rest }) {
  const handleSuccess = async (res) => {
    // const result = res?.profileObj;
    onSuccess(res);
  };
  const handleFailure = (error) => {
    console.log("Google Auth: Failure", error);
    onFailure();
  };
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
      render={({ onClick, disabled }) => (
        <Button
          onClick={onClick}
          disabled={disabled}
          Icon={<GoogleIcon />}
          {...rest}
        />
      )}
    />
  );
}
