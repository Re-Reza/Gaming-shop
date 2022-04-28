// import { ADD_TO_CART, } from "../redux/actions";

export function cartReducer(state, action) {

    console.log(state ,action)

    switch (action.type) {
        
        case "addToCart":
            return addToCart(state, action.payload);
        
        case "getCartItems":
            return getCartItems(state);

        case "deleteItem":
            return deleteItem(state, action.payload);

        default:
            return state;
    }
}

function addToCart(state, productItem)
{
    let foundItem = state.cartItems.find(item => item.itemKey === productItem.itemKey)
    let cartItems=[];
    if(foundItem == undefined)
    {   
        cartItems = [...state.cartItems, {...productItem,count:1}];
    }
    else{
        foundItem.count++;
        cartItems = [...state.cartItems]
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return{
        ...state,
        cartItems: cartItems,
    };
}

function getCartItems(state)
{   
    let items=[];
    try{
        const data = localStorage.getItem("cartItems");
        if(data == undefined) throw("no Item was fond")
        items = JSON.parse(data);
        console.log(items);
    }
    catch(err){
        console.log(err);
    }
    finally{   
        return{
            ...state,
            cartItems:[...items],
        }
    }
}

function deleteItem(state, {itemKey}){
    console.log(itemKey)
    let newCartItems = [];
    const foundItem = state.cartItems.find(item => item.itemKey === itemKey);
    console.log(foundItem);
    if(foundItem.count==1){
        newCartItems = state.cartItems.filter(item=>item.itemKey != itemKey);
    }
    else{
        foundItem.count--;
        newCartItems = [...state.cartItems];
    }

    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    return {
        cartItems: newCartItems,
    }
}
