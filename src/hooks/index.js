import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data:responseData } = await axios.get(url);
        setData(responseData);
        setIsPending(false);
      } catch (err) {
        setError("Sorry, Couldn't Fetch Data. Please Try Again Later.");
        setIsPending(false);
      }
    }
    fetchData();
  }, []);

  return {data, isPending, error};
}

export default useFetch;
