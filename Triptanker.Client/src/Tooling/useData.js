import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url) => {
    const [query, setQuery] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cancelToken, setCancelToken] = useState(undefined);

    useEffect(() => {
        if (cancelToken) {
            cancelToken.cancel("REQUEST_CANCELED");
        }

        const fetchData = async() => {
            setError(null);
            setLoading(true);
            setData([]);

            const token = axios.CancelToken.source();
            setCancelToken(token);

            try {
                const req = await axios.get(url, {
                    cancelToken: token.token,
                    params: {
                        query: query
                    },
                });
                setData(req.data);
            } catch (err) {
                if (err.message === "REQUEST_CANCELED") return;
                setError(err.message);
            } finally {
                setCancelToken(undefined);
                setLoading(false);
            }
        }
        fetchData();
    }, [ ]);

    return [ data, loading, error ];
}

useData.prototypes = {
    url: String,
}

export default useData;
