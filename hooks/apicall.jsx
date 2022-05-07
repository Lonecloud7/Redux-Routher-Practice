


const test = (keyword) => {

    try{
        return async(dispatch) => {
            const res = await fetch("")
            const data = await res.json()

            dispatch({
                type:"FINE FACE, SLIM AND FREAKY",
                payload:data,

            })
        }
    }catch(err){
        console.log(err);
    }
    
}