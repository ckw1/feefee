import * as React from 'react';
import { HashRouter , Route, Link, Routes  } from 'react-router-dom'
import About from './About'
import Welcome from './Welcome'
import Type from './Type'


import TextField from '@mui/material/TextField'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';



function App(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = React.useState(!darkThemeMq.matches)
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon /> // Icons imported from `@material-ui/icons`
  const appliedTheme = createTheme(theme ? light : dark)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  function appbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="error" position="fixed">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <BasicMenu />
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}>
              {icon}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }

  const listitem = [
    { name: 'Type', path: '/', icon: null },
    { name: 'About', path: '/about', icon: null },
  ]
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}>
      <List>
        {listitem.map((item, index) => (
          <nav key={item}>
          <Link to={item.path} style={{ all: 'unset' }}>
            <ListItem button key={item.name}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
          </nav>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      <ThemeProvider theme={appliedTheme}>
        <React.Fragment>
        <HashRouter>
          {appbar()}
          <Container style={{ 'padding-top': '55px'}}>
          
            <Routes>
            <Route exact path="/" element={<Type />} />
            <Route  path="/about/" element={<Welcome />} />
            {/* <Route exact path="/Profile">
              <Profile />
            </Route> */}
            </Routes>
          
          <CssBaseline />
          </Container>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {list()}
          </SwipeableDrawer>
          </HashRouter>
        </React.Fragment>
      </ThemeProvider>
    </div>
  )
}

export const light = {
  palette: {
    mode: 'light',
  },
}
export const dark = {
  palette: {
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
    },
  }, 
  components: {
    // Name of the component
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: '#FFFFFF',
        },
      },
    }, 
  },
}


export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      Feefee
    </div>
  );
}


export default (App)
