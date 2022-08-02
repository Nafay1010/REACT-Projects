import { useState, useEffect } from "react";

const FetchData = (url) => {

    const [data, setData] = useState(null);
    // const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // const abortCont = new AbortController();
            fetch(url)
            .then(res => {
                if(!res.ok)
                throw Error("Couldn't Fetch Data");
                else
                return res.json();  
            })
            .then(data => {
                // setPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                // if(err.name === 'AbortError')
                // {
                //     console.log('fetch aborted');
                // }
                // else
                // {
                    // setPending(false);
                    setError(err.message);
                // }
            })
        // return () => abortCont.abort();
    }, [url]);

    return { data, error };
}
export default FetchData;