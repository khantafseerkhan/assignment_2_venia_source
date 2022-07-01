
export const increament = () => {
    return {
        type: "Increament"
    }
}

export const decrement = () => {
    return {
        type: "Decrement"
    }
}

export const updateproductslist = (inputdata) => {
    return {
        type: "updateproductslist",
        data: inputdata
    }
}



//===============================

export const addToCart = (inputdata) => {
    console.log("obj   "+inputdata)
    return {
        type: "add",
        data: inputdata
    }
}


export const removeProduct=(id)=>{
    return {
        type:"remove",
        data:id
    }
}



export const incQuantity=(id)=>{
    return {
        type:"incQuantity",
       data:id,
    }

}
export const decQuantity=(id)=>{
        return {
            type:"decQuantity",
            data:id
        }
    }
    








