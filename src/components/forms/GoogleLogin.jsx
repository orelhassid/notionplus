import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../actions/user";
import { GOOGLE_CLIENT_ID, RT_PROFILE } from "../../config";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../UI";
const GoogleAuth = () => {
  const { dispatchUser } = useContext(UserContext);
  const history = useHistory();
  const handleSuccess = async (res) => {
    const result = res?.profileObj;
    console.log("Google Auth: Success", result);
    try {
      await dispatchUser(loginUser(result));
      history.push(RT_PROFILE);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFailure = (error) => {
    console.log("Google Auth: Failure", error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
      render={({ onClick, disabled }) => (
        <Button onClick={onClick} disabled={disabled} color="secondary">
          Login with google
        </Button>
      )}
    />
  );
};

export default GoogleAuth;
