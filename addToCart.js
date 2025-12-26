import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();

export const addToCart=(event,id,stock)=>{
    let arrLocalStorageProduct=getCartProductFromLS();
    
    const currentProdElem=document.querySelector(`#card${id}`);
    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price=currentProdElem.querySelector(".productPrice").innerText;
    
    price=price.replace("₹","");
    
    
    let existingProduct=arrLocalStorageProduct.find((currProd)=>currProd.id === id);
    
    if(existingProduct){
        quantity=Number(existingProduct.quantity) + Number(quantity);
        price=Number(price*quantity);
        
        let updatedCart={id,quantity,price};
        
        updatedCart=arrLocalStorageProduct.map((currProd)=>{
            return currProd.id===id?updatedCart:currProd;
        });
        
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
    }
    
    if(existingProduct){
        return false;
    }
    
    price=Number(price*quantity);
    quantity=Number(quantity);
    
    
    let updatedCart={id,quantity,price};
    arrLocalStorageProduct.push(updatedCart);
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
    
    updateCartValue(arrLocalStorageProduct);
}