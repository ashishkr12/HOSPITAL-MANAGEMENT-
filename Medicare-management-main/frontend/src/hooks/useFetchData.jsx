import {useEffect, useState, useContext} from 'react';
// import { authContext } from '../context/authContext';

import {TOKEN} from '../config'

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const { token } = useContext(authContext);

    useEffect( ()=> {
        
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url, {
                    headers:{Authorization :`Bearer ${TOKEN}`}
                });
    
                const result = await res.json();
                
                if(!res.ok){
                   throw new Error(result.message)
                }
                setData(result.data);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }

        fetchData();
    }, [url]);

  return {
    data,
    loading, 
    error,
  }
};

export default useFetchData;