import {useState, useEffect} from 'react';

const useFetch = (URL) => {

    const [data,setData] = useState(null);
    const [isPending, setIsPending] = useState(true);// Loading animation
    const [error, setError] = useState(null);

    useEffect(() =>{//Only the first rendering of webpage,
            fetch(URL)//Fetch data from this artificial database
                .then(res => {

                if(!res.ok){
                    throw Error('Could not fetch data for that resources')
                }
                    return res.json();//return data in json format
                })
                .then(data =>{
                    setData(data);//Set the blog data to the data we just pulled
                    setIsPending(false);
                    setIsPending(null);
                })
                .catch((err)=>{
                    setError(err.message);
                    setIsPending(false);
                })
    }, [URL]);
    return {data, isPending, error}
}

export default useFetch;