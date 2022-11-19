import { AppBar, Toolbar, Button, Grid, Menu, MenuItem } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";

const NavigationMenu = () => {
  const onLoginHandler = () => {};

  const CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            {/*NavigationItems should be here*/}
          </Grid>

          <Grid item xs={4}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
              auto_select
            />
            <Button variant="outlined" color="inherit" onClick={onLoginHandler}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationMenu;
