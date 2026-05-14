import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 248;

const dashboardNavItems = [
  {
    label: 'Dashboard',
    title: 'Dashboard',
    to: '/dashboard',
    icon: DashboardIcon,
  },
  {
    label: 'Reports',
    title: 'Reports',
    to: '/dashboard/reports',
    icon: AssessmentIcon,
  },
  {
    label: 'Users',
    title: 'Users',
    to: '/dashboard/users',
    icon: PeopleIcon,
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#236192',
  color: '#ffffff',
  borderBottom: '2px solid #111827',
  boxShadow: '4px 4px 0px #111827',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      backgroundColor: '#ffffff',
      borderRight: '2px solid #111827',
    },
  }),

  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      backgroundColor: '#ffffff',
      borderRight: '2px solid #111827',
    },
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '999px',
  backgroundColor: 'rgba(255, 255, 255, 0.18)',
  border: '1px solid rgba(255, 255, 255, 0.35)',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: 320,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffffff',
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: 14,
  },
}));

const DashLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const pageTitle =
    dashboardNavItems.find((item) => item.to === location.pathname)?.title ||
    'Dashboard';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f4f5' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {pageTitle}
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Button
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{
              borderColor: '#ffffff',
              color: '#ffffff',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: '0.12em',
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant="subtitle1"
            sx={{
              mr: 'auto',
              ml: 2,
              fontWeight: 900,
              color: '#111827',
              display: open ? 'block' : 'none',
            }}
          >
            Admin Panel
          </Typography>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {dashboardNavItems.map((item) => {
            const Icon = item.icon;
            const selected = location.pathname === item.to;

            return (
              <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  selected={selected}
                  sx={{
                    minHeight: 52,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    mx: 1,
                    my: 0.75,
                    borderRadius: '16px',
                    color: selected ? '#ffffff' : '#111827',
                    backgroundColor: selected ? '#236192 !important' : 'transparent',
                    boxShadow: selected ? '3px 3px 0px #111827' : 'none',
                    '&:hover': {
                      backgroundColor: selected ? '#236192' : '#e4e4e7',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: selected ? '#ffffff' : '#236192',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.label}
                    sx={{
                      opacity: open ? 1 : 0,
                      '& .MuiListItemText-primary': {
                        fontWeight: 800,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider />

        <Box sx={{ p: open ? 2 : 1 }}>
          <Typography
            variant="caption"
            sx={{
              display: open ? 'block' : 'none',
              color: '#71717a',
              fontWeight: 700,
            }}
          >
            National-U Bulldog Exshop
          </Typography>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;