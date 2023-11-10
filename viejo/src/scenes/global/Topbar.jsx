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
  MenuOutlined,
} from "@mui/icons-material";
import { toggleColorMode } from "../../redux/actions/index";
import { useProSidebar } from "react-pro-sidebar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const colorMode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const toggleModeColor = () => {
    dispatch(toggleColorMode());
  };
  const { toggleSidebar, broken, rtl } = useProSidebar();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {broken && !rtl && (
        <IconButton sx={{ margin: "0 6 0 2" }} onClick={() => toggleSidebar()}>
          <MenuOutlined />
        </IconButton>
      )}
      {/* Search bar */}
      <Box
        display="flex"
        backgroundColor={colors.green[800]}
        borderRadius="3px"
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: colors.primary[100] }}
          placeholder="Search"
        />
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
