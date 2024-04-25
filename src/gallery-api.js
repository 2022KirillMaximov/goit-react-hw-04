import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "5WITQC3WaA8TPUhfAxFjAia_vKNaZOVMqN1jj5FPTOM";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });

  return response.data.results;
};