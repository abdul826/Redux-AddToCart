export const ADD = (item)=>{
    return{
        type: "ADD_CART",
        payload:item
    }
}

export const REMOVESINGLEITEM = (id)=>{
    return{
        type: "REMOVE_ITEM",
        payload:id
    }
}

export const DECREMENTITEM = (itme)=>{
    return{
        type: "DEC_ITEM",
        payload:itme
    }
}

export const emptyCartData = ()=>{
    return{
        type: "EMPTY_CART"
    }
}