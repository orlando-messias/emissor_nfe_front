import { useTheme } from "@mui/material/styles"
import { Box, Avatar, ButtonBase } from "@mui/material"

import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: 228,
        display: 'flex',
        [theme.breakpoints.down('md')]: {
          width: 'auto'
        }
      }}
    >
      <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
        <img src={Logo} alt="" style={{width: '100px'}} />
      </Box>
      <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: 'all .2s ease-in-out',
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            '&:hover': {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light
            }
          }}
          color="inherit"
        >
          <MenuIcon size="1.3rem" />
        </Avatar>
      </ButtonBase>
    </Box>
  )
}

export default Header;