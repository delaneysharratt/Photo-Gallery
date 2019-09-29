import React from 'react';

//material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import CameraIcon from '@material-ui/icons/PhotoCamera';

//toolbar will become hidden on page scroll
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    alignItems: 'center'
  },
  icon: {
    margin: '0 1em'
  }
}));

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6">These Little Moments</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
