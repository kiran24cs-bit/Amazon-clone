function addnewproduct(){
    document.getElementById("addnew-product-div-id").style.display="flex";
    document.getElementById("main-container-id").style.display="none";
    document.getElementById("newproductname").focus();
}
function nextfield(event,buttonid){
    if(event.key=="Enter"){
        if(buttonid=="newproductname"){
            document.getElementById("newproductprice").focus();
        }
        else if(buttonid=="newproductprice"){
            document.getElementById("newproductimage").focus();
        }
        else{
            document.getElementById("newproductaddbuttonid").click();
        }
    }
}



function addnew(){

    let newproductname=document.getElementById("newproductname").value.trim();
    let newproductprice=document.getElementById("newproductprice").value;
    let newproductimage=document.getElementById("newproductimage").value.trim();
    if(!newproductname || !newproductprice || !newproductimage){
        document.getElementById("addingstatus").style.display="inline-block";
        document.getElementById("addingstatus").innerHTML="FILL ALL DETAILS";
        return;
    }

    let name=document.createElement("p");
    name.innerHTML=newproductname;
    name.className="details-name";

    let price=document.createElement("p");
    price.innerHTML="$"+newproductprice;
    price.className="details-price";
    price.id=newproductimage+"-price";

    let main_container=document.getElementById("main-container-id");
    
    newproductname=newproductname.replaceAll(" ","");


    let product_div=document.createElement("div");
    product_div.className="product-div";
    product_div.id=newproductname;


    let image_div=document.createElement("div");
    image_div.className="details-div";
 

    let image=document.createElement("img");
    image.className="product=image";
    image.src=newproductimage;

    image_div.appendChild(image);
    
    let details_div=document.createElement("div");
    details_div.className="details-div";

    let details_name_price=document.createElement("div");
    details_name_price.className="details-name-price";


    details_name_price.appendChild(name);
    details_name_price.appendChild(price);

    details_div.appendChild(details_name_price);

    let add_remove_cart_div=document.createElement("div");
    add_remove_cart_div.className="add-remove-cart-div";

    let but=document.createElement("button");
    but.innerHTML="ADD TO CART";
    but.className="add-to-cart-button";    
    but.id=newproductname+"addtocart";
    but.setAttribute(
        "onclick",
        "addtocart(this.id)"
    );

    let h4=document.createElement("h4");
    h4.innerHTML="Removed";
    h4.className="signal-removed";
    h4.style.display="none";
    h4.id=newproductname+"addtocartsignal";

    add_remove_cart_div.appendChild(but);
    add_remove_cart_div.appendChild(h4);

    product_div.appendChild(image_div);
    product_div.appendChild(details_div);
    product_div.appendChild(add_remove_cart_div);
    
    main_container.appendChild(product_div);

    document.getElementById("addingstatus").innerHTML="Adding...";
    document.getElementById("addingstatus").style.display="inline-block";
    setTimeout(()=>{
        document.getElementById("addingstatus").innerHTML="ADDED SUCCESSFULLY";
    },600);
    setTimeout(()=>{
        document.getElementById("addnew-product-div-id").style.display="none";
        document.getElementById("main-container-id").style.display="grid";
        document.getElementById("addingstatus").style.display="none";

    },1500);
}

function addtocart(productid){
    let cart=document.getElementById(productid);
    if(cart.innerHTML=="ADD TO CART"){
        cart.innerHTML="ADDED";
        return;
    }
    else{
        cart.innerHTML="ADD TO CART";
        document.getElementById(productid+"signal").style.display="inline-block";
        setTimeout(()=>{
            document.getElementById(productid+"signal").style.display="none";
        },2000);
    }
}