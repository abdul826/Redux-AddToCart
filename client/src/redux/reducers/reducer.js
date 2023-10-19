const initialState = {
    carts:[]
}

export const cartreducer = (state=initialState,action)=>{
    if(action.type === 'ADD_CART'){
        const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id)
        if(itemIndex >= 0){
            state.carts[itemIndex].qnty += 1;
            return{
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload, qnty:1}
            return{
                ...state,
                carts:[...state.carts,temp]
            }
            // state.carts = [...state.carts, temp]
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        const itemDeleted = state.carts.filter((item)=> item.id !== action.payload)
        return{
            ...state,
            carts : itemDeleted
        }
    }

    if(action.type === 'DEC_ITEM'){
        // console.log(action.payload.id);
        const decItem = state.carts.findIndex((item)=> item.id === action.payload.id)

        if( state.carts[decItem].qnty  > 1){
            state.carts[decItem].qnty -= 1;
        }
        return{
            ...state,
            carts:[...state.carts]
        }
}

    if(action.type === 'EMPTY_CART'){
        return{
            ...state,
            carts : []
        }
    }

    return state;
}
