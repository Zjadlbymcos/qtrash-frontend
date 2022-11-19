import { AppBar, Toolbar, Button, Grid, Menu, MenuItem } from "@mui/material";
import {
  CodeResponse,
  CredentialResponse,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useContext, useEffect } from "react";
import { redeemCode } from "../../api/user";
import { StoreContext } from "../../store/StoreProvider";

const NavigationMenu = () => {
  const {
    auth: [auth, setAuth],
  } = useContext(StoreContext);

  const handleLoginSuccess = async (
    code: Omit<CodeResponse, "error" | "error_description" | "error_uri">
  ) => {
    const apiAuth = await redeemCode(code);

    setAuth(apiAuth);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    flow: "auth-code",
  });

  useEffect(() => {
    console.log("store update", auth);
  }, [auth]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            {/*NavigationItems should be here*/}
          </Grid>

          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => googleLogin()}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationMenu;
