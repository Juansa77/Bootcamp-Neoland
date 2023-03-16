import React from "react";
import useAxios from "./useAxios";
import { useEffect, useState } from "react";

const urlNewsApi = import.meta.env.VITE_APP_NEWS


const useRequest = (URL) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await useAxios(URL);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default useRequest;
