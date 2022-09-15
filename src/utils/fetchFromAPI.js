import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // part: "id,snippet",
    // type: "video",
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // the above process.env is not working check later
    "X-RapidAPI-Key": "4073ee563dmshb9e6d9f4a1224c9p164789jsn1ea037e3aac8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
