import { ALGO } from "./types.js";
import axios from "axios";

console.log(ALGO);


export const getMenu = () => {
	return async (dispatch) => {
		const apiUrl = 'https://algo.com'
		const queryParams = {
			params: {
				deleted: false,
			},
		}

		try {
			const response = await axios(apiUrl, queryParams)
			const menu = response.data

			return dispatch({ type: ALGO, payload: menu })
		} catch (error) {
			console.error('Error al realizar la solicitud:', error)
		}
	}
}