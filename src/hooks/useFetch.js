import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const post = async (url, body, headers = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body,
      });

      const data = await response.json();
      setLoading(false);
      return { data, error: null };
    } catch (error) {
      setLoading(false);
      return { data: null, error };
    }
  };

  return { post, loading };
};

export default useFetch;
