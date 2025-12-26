import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement=(event,id,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    const productQuantity=currentCardElement.querySelector('.productQuantity');
    const productPrice=currentCardElement.querySelector(".productPrice");
    
    let quantity=1;
    let localStoragePrice=0;
    
    
    let localCartProducts=getCartProductFromLS();
    let exisitngProd=localCartProducts.find((curProd)=>curProd.id===id);
    
    if(exisitngProd){
        quantity=exisitngProd.quantity;
        localStoragePrice=exisitngProd.price;
    }else{
        localStoragePrice=price;
        price=price;
    }
    
    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity===stock){
            quantity=stock;
            localStoragePrice=price*stock;
        }
    }
    
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }
    
    localStoragePrice=price*quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    
    let updatedCart={id,quantity,price:localStoragePrice};
    
    updatedCart=localCartProducts.map((currProd)=>{
        return currProd.id===id ? updatedCart : currProd;
    });
    
    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
    
    productQuantity.innerText=quantity;
    productPrice.innerText=localStoragePrice; 
};