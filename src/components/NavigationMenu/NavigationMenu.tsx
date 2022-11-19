import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect } from "react";
import { redeemCode } from "../../api/user";
import { StoreContext } from "../../store/StoreProvider";

const Logo = () => {
  return (
    <Box
      sx={{
        height: 50,
        overflow: "hidden",
      }}
    >
      <img src="/public/logo.png" className="" style={{ height: 50 }} />
    </Box>
  );
};
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
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={6}>
            {/*NavigationItems should be here*/}
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => googleLogin()}
            >
              Sign in with Google Auth
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationMenu;
