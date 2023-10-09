import { useState } from 'react';

const useMutation = (promise) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const execute = async (payload, callback = {}) => {
    const { onSuccess, onFail, onFinally } = callback;
    try {
      setLoading(true);
      const res = await promise(payload);
      setData(res.data?.data || []);
      onSuccess?.(res.data?.data);
    } catch (error) {
      setData([]);
      setError(error);
      onFail?.(error);
    } finally {
      setLoading(false);
      onFinally?.();
    }
  };

  return {
    execute,
    data,
    loading,
    error,
  };
};

export default useMutation;
