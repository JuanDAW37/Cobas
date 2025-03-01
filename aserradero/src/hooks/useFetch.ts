//Este va a ser un customHook que va a ser el encargado de hacer las peticiones a la API

import { useEffect, useState } from "react"

type Data<T> = T | null;
type ErrorType = Error | null;
//Se crea una interfaz con tres parámetros, la data que puede ser de tipo T, loading de tipo boolean y error de tipo Error
interface Params<T> {
    data: Data<T>
    loading: boolean
    error: ErrorType
}

//Ahora se crea nuestro hook personalizado
export function useFetch<T>(url: string):Params<T>{
    const [data, setData] = useState <Data<T>>(null); //El useState puede tomar el tipo genérico T o null   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect( () => {
        //Crear un interrupción sincrónica para manejar la petición, en caso de que se destruya el componente
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(url, controller);
                if(!response.ok){
                    throw new Error('Se produjo un error al obtener los datos');
                }
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            }catch(error){
                setError(error as Error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort(); //Ya que el controller está asociado al fetch de arriba, la petición se cancela
        }
    }, [url]);
    return {data, loading, error};
}