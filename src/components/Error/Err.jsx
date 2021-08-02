import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img_404 from "../../assets/images/404.jpg";
import { useStyles } from "./style";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Yassine Zakhama {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Err() {
  const classes = useStyles();
  let history = useHistory();
  const redirect = () => {
    history.push('/')
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <ErrorIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
            404 Not Found
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <center>
            <img src={img_404} height="350" alt="404 logo"/>
          </center>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            404 Not Found
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Sorry,The requested URL was not found on this server
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Go back, on head over to the website to choose a new direction
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={redirect}>
                    Back Home
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
      </main>
      <footer className={classes.footer}>
      <Copyright />
      </footer>
    </React.Fragment>
  );
}
export default Err;