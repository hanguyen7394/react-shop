import { useEffect, useState } from 'react';

const useQuery = (promise, dependencies = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();


  useEffect(() => {
    fetchData();
  }, dependencies);

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const res = await promise(query);
      setData(res.data?.data || []);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useQuery;
