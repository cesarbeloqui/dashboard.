import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { /* useSelector, */ useDispatch } from "react-redux";
import { tokens } from "../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationAddOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";
import { toggleColorMode } from "../../redux/actions/index";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const colorMode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const toggleModeColor = () => {
    dispatch(toggleColorMode());
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      {/* Search bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* Icons  */}
      <Box display="flex">
        <IconButton onClick={toggleModeColor}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationAddOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
