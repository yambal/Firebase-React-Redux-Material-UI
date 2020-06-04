import React from 'react'
import { Config } from './containers/Config'
import { SampleHome } from './containers/SampleHome'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BodyLayout }  from './components/BodyLayout'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { LeftDrawerContent } from './components/LeftDrawerContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

function App() {
  const classes = useStyles();

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(true)

  const drawerToggle = React.useCallback(
    () => {
      setDrawerIsOpen(!drawerIsOpen)
    },
    [drawerIsOpen]
  )

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{zIndex:1500}}
      >
        <Toolbar>
          <IconButton
            onClick={drawerToggle}
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <BodyLayout
        leftDrawerOpen={drawerIsOpen}
        leftDrawerContent={<LeftDrawerContent/>}
        rightDrawerContent={<LeftDrawerContent/>}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SampleHome}/>
            <Route exact path="/config" component={Config}/>
          </Switch>
        </BrowserRouter>
      </BodyLayout>
    </React.Fragment>
  );
}

export default App;