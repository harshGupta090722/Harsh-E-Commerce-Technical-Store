import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal=()=>{
    let cartProducts=getCartProductFromLS();
    
    
    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal");
    
    const totalCartValue=cartProducts.reduce((acc,curElem)=>{
        let productPrice=parseInt(curElem.price)||0;
        return acc + productPrice;
    },0);
    
    productSubTotal.innerText=`₹${totalCartValue}`;
    if(cartProducts.length!==0)
        productFinalTotal.innerText=`₹${totalCartValue+50}`;
    else
        productFinalTotal.innerText=`₹${0.00}`
};