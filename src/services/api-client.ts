import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "814e703c430b41aea91b5bc022b70761",
  },
});
