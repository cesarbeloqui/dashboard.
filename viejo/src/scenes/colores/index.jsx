import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Colores = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  Object.keys(colors).map((paleta, index) =>
    console.log(`esta es la paleta:${paleta}`, colors[paleta])
  );
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Colores"
          subtitle="Aca podras ver la paleta de colores de el theme"
        />
      </Box>
      {Object.keys(colors).map((paleta, index) => (
        <>
        <Box>
<Typography variant="h5">{paleta}</Typography>
        </Box>
        <Box key={index} display="flex">
          
          {Object.keys(colors[paleta]).map((color, index) => (
            <Box
              key={index}
              width="50px"
              height="50px"
              bgcolor={colors[paleta][color]}
              textAlign="center"
              justifyContent="center"
              alignItems="center"
            >{color}</Box>
          ))}
        </Box>
        </>
      ))}
    </Box>
  );
};

export default Colores;
