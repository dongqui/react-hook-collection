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
    const fetchData = async () => {
      try {
        const data = await axios(options);
        setState({ ...state, loading: false, data });
      } catch (error) {
        setState({ ...state, loading: false, error });
      }
    };
    fetchData();
  }, [trigger]);

  return { ...state, refetch };
};