import { getCartProductFromLocalLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLocalLS();

export const addToCart=(event,id,stock)=>{
    
    let arrLocalStorageProduct=getCartProductFromLocalLS();
    
    const currentProdElem=document.querySelector(`#card${id}`);
    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price=currentProdElem.querySelector(".productPrice").innerText;
    
    price=price.replace("₹","");
    
    
    let existingProduct=arrLocalStorageProduct.find((currProd)=>
        currProd.id === id
);

if(existingProduct){
    
    return false;
}

price=Number(price*quantity);
quantity=Number(quantity);
console.log(price,quantity);


let updatedCart={id,quantity,price};
arrLocalStorageProduct.push(updatedCart);
localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

updateCartValue(arrLocalStorageProduct);
}