import { Box, IconButton, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColorMode, changeIsCollapsed } from '../../redux/actions/index';
import LanguageIcon from '@mui/icons-material/Language';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const toggleModeColor = () => {
    dispatch(toggleColorMode());
  };
  const { width, height } = useSelector((state) => state.sizeWindows);
  const { isCollapsed } = useSelector((state) => state.isCollapsed);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box>
        <IconButton>
          <LanguageIcon />
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        {width < 480 && (
          <IconButton
            onClick={() => {
              dispatch(changeIsCollapsed());
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        {/* SEARCH BAR */}
        <Box
          display="flex"
          marginRight="10px"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* ICONOS */}
        {/* icono para cambiar el tema, lo desactivo para la primera presentacion */}
        <IconButton onClick={toggleModeColor}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
