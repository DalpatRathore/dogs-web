import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAPI = url => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log("response :>> ", response.data);
      })
      .catch(error => {
        console.log(error);
      });

    return () => {
      console.log("clean up :>> ");
    };
  }, [url]);
  return [data, loading];
};
