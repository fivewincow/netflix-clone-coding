import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b26d8484d0843f86d35cf04f0260ec1d",
    language: "ko-KR",
  },
});

export default instance;
