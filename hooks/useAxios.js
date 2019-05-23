import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (options) => {
  const [ state, setState ] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [ trigger, setTrigger ] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    const axiosRequest = async () => {
      const data = await axios(options);
      setState({ ...state, loading: false, data });
    };
  }, [trigger]);

  return { ...state, refetch };
};