import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";

const SocialLoginButton = () => {
  const handleGoogleSuccess = (response) => {
    console.log(response);
    // Handle login success, such as saving user info to state or making API requests
  };

  const handleGoogleFailure = (error) => {
    console.error(error);
    // Handle login failure
  };

  const responseFacebook = (response) => {
    console.log(response);
    // Handle login success, such as saving user info to state or making API requests
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#db4437",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            <GoogleIcon style={{ marginRight: "10px" }} />
            Sign in with Google
          </Button>
        )}
      />

      {/* <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#3b5998", color: "#fff" }}
          >
            <FacebookIcon style={{ marginRight: "10px" }} />
            Sign in with Facebook
          </Button>
        )}
      /> */}
    </div>
  );
};

export default SocialLoginButton;
