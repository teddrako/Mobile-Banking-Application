import { useState, useEffect } from 'react';

const useStock = (ticker) => {
    const [data, setData] = useState([]);
    const [logo, setLogo] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(
                    `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=h7g0ci5p5ImjPu7xQILGGpvq3Q93EYmX`
                );
                const data = await response.json();
                setData(data);
                console.log(`Mere --> ${data}`);
                setIsLoading(false);
            }
            catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [ticker]);

    useEffect(() => {
        const fetchLogo = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(
                    `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=h7g0ci5p5ImjPu7xQILGGpvq3Q93EYmX`
                );
                const data = await response.json();
                setLogo(data);
                console.log(`Here --> ${data}`);
                setIsLoading(false);
            }
            catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchLogo();
    }, [ticker]);

    useEffect(() => {
        const refetch = () => {
            setIsLoading(true);
            fetchData();
            fetchLogo();
        }

        refetch();
    }, [ticker]);

    return { data, logo, isLoading, error, refetch };
}

export default useStock;