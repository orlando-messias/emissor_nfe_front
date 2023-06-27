import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';

// project imports
import Header from '../Components/Header';

// assets
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// styles
const Main = styled('main')(({ theme }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  marginLeft: 20,
  marginTop: 0
}));

// const navigation = {
//   items: [dashboard, pages, utilities, other]
// };

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark="false"
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>

      {/* main content */}
      <Main theme={theme}>
        {/* breadcrumb */}
        {/* <Breadcrumbs separator={ChevronRightIcon} navigation={navigation} icon title rightAlign /> */}
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
