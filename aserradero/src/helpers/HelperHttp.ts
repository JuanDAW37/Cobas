/* eslint-disable @typescript-eslint/no-explicit-any */

export const HelperHttp = () => {
    
    async function customFetch(endpoint:any, options:any){
        const defaultHeader = {accept: 'application/json'};

        const controller = new AbortController(); 
        options.signal = controller.signal;        
        options.method = options.method || 'GET';        
        options.headers = options.headers ? {...defaultHeader, ...options.headers } : defaultHeader;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        setTimeout(()=>{controller.abort()}, 3000)
        try{            
            const response = await fetch(endpoint, options);
            if(!response.ok) throw {error:true, status: response.status || '00', statusText:response.statusText || 'Ocurrió un error'}            
            return await response.json();                        
        }catch(err){
            console.log(err);
        }
    };

    /**
     * GET
     * @param url 
     * @param options 
     * @returns data
     */
    const get = (url:any, options:any = {}) => customFetch(url, options)
    
    /**
     * POST
     * @param url 
     * @param options 
     * @returns data
     */
    const post = (url:any, options:any = {}) => {
        options.method = 'POST';
        return customFetch(url, options);
    }

    /**
     * PUT
     * @param url 
     * @param options 
     * @returns data
     */
    const put = (url:any, options:any = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);
    }

    /**
     * DELETE
     * @param url 
     * @param options 
     * @returns data
     */
    const del = (url:any, options:any = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options);
    }

    /*
    * Devolución de los métodos
    */
    return {
        get,
        post,
        put,
        del
    }
}