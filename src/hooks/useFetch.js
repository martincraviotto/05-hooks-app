import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError:null,
    });

    const getFecht = async ()=>{

        setState({
            ...state,
            isLoading:true,            
        });

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e464681dfdmsh8b5f68fe34ea976p1ed3afjsn955ab40e87e3',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        };

        const resp = await fetch(url, options);        
        const data = await resp.json();
        
        setState({
            data,
            isLoading:false,
            hasError:null,
        });

    };

    useEffect(() => {
      getFecht();    
      
    }, [url])
    

  return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
  };
}
