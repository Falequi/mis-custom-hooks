import { useRef,useEffect, useState } from "react"

export const useFetch = (url) => {



    const [state, setState] = useState({ data: null, loading:true ,error:null});

    const isMounted = useRef(true);

    useEffect(() => { //este useEffect esta pendiente de cambie toda la pagina 
        return () =>{
            isMounted.current = false;
        }
    }, [])


    useEffect(()=>{ //este usedeffect esta pendiente que cambie solo el fetch o la variable url

        setState({data:null,loading:true,error:null})

        fetch(url)
        .then(resp=>resp.json())
        .then(data =>{

         setTimeout(() => {
             if(isMounted.current){
                 setState({
                     loading: false,
                     error: null,
                     data //solo con colocar el nombre sin valor el coloca la data ahi
                 })
             }
         }, 4000);   
        });
    },[url])
    return state;
}
