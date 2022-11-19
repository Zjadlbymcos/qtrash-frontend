import { AppBar, Toolbar, Button, Grid, Menu, MenuItem } from '@mui/material';

const NavigationMenu = () => {
  const onLoginHandler = () => {};

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            {/*NavigationItems should be here*/}
          </Grid>

          <Grid item xs={4}>
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
