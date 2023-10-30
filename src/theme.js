import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleColorMode } from "./redux/actions/index";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#d8d8d8",
          200: "#b1b1b1",
          300: "#8b8b8b",
          400: "#646464",
          500: "#3d3d3d",
          600: "#313131",
          700: "#252525",
          800: "#181818",
          900: "#0c0c0c",
        },
        primary: {
          100: "#d8d8d8",
          200: "#b1b1b1",
          300: "#8b8b8b",
          400: "#646464",
          500: "#3d3d3d",
          600: "#313131",
          700: "#252525",
          800: "#181818",
          900: "#0c0c0c",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        green: {
          900: "#d9edcf",
          800: "#b3db9f",
          700: "#8dc870",
          600: "#67b640",
          500: "#41a410",
          400: "#34830d",
          300: "#27620a",
          200: "#1a4206",
          100: "#0d2103",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          900: "#d8d8d8",
          800: "#b1b1b1",
          700: "#8b8b8b",
          600: "#646464",
          500: "#3d3d3d",
          400: "#313131",
          300: "#252525",
          200: "#181818",
          100: "#0c0c0c",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        green: {
          900: "#d9edcf",
          800: "#b3db9f",
          700: "#8dc870",
          600: "#67b640",
          500: "#41a410",
          400: "#34830d",
          300: "#27620a",
          200: "#1a4206",
          100: "#0d2103",
        },
      }),
});

/* nui theme settings */

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 36,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 28,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 26,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 22,
      },
    },
  };
};

/* redux for color mode */

/* 
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode]; // return theme and colorMode context values to be used in other components.
}; 
*/

export const useMode = () => {
  const mode = useSelector((state) => state.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme };
};
