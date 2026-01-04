import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
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
        price=Number(price*quantity).toFixed(2);
        
        let updatedCart={id,quantity,price};
        
        updatedCart=arrLocalStorageProduct.map((currProd)=>{
            return currProd.id===id?updatedCart:currProd;
        });
        
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
        
        showToast("add",id);
    }
    
    if(existingProduct){
        alert("Product was already there in cart but we still added more quantities");
        return false;
    }
    
    price=Number(price*quantity).toFixed(2);
    quantity=Number(quantity);
    
    
    let updatedCart={id,quantity,price};
    arrLocalStorageProduct.push(updatedCart);
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));


    showToast("add",id);
    
    updateCartValue(arrLocalStorageProduct);
}