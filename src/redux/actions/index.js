import { ALGO, TOGGLE_COLOR_MODE } from "./types.js";
import axios from "axios";

export const getMenu = () => {
  return async (dispatch) => {
    const apiUrl = "https://algo.com";
    const queryParams = {
      params: {
        deleted: false,
      },
    };

    try {
      const response = await axios(apiUrl, queryParams);
      const menu = response.data;

      return dispatch({ type: ALGO, payload: menu });
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
};

export const toggleColorMode = () => ({ type: TOGGLE_COLOR_MODE });
