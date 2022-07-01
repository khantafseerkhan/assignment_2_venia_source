export const getservice=(path)=>{

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(path, requestOptions)
        .then(res => res.json())
    

}