import axios from "axios";

/**
 * Call the api to get all available logos from the custom post type
 * @func getLogos
 * */
export const getLogos = async () => {
  const result = await axios
    .get(`${process.env.API_URL}`) 
    .then(response => {
      if (response.status === 200) { //To be extra safe
        return response;
      }
    })
    .catch(error => {
      return { error: error };
    });
  return result;
};