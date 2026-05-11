document.getElementById("usernameinput").focus();
document.getElementById("cartquantity").innerHTML=itemsquantity;
for (let product of productslist){
    mainaddingproduct(product.name,product.price,product.image,product.added);
}


let loggeduser;
document.getElementById("Main-body-id").style.display="none";
document.getElementById("siginup-entry-id").style.display="none";

function loadsignuppage(){
    document.getElementById("login-entry-id").style.display="none";
    document.getElementById("siginup-entry-id").style.display="flex";
    document.getElementById("singupusernameinput").focus();
}
function loadloginpage(value){
    document.getElementById("usernameinput").focus();
    if (value==0){
        
        document.getElementById("login-entry-id").style.display="flex";
        document.getElementById("siginup-entry-id").style.display="none";
        document.querySelector("input").focus();
        return ;
    }
    let newname=document.getElementById("singupusernameinput").value;
    let newpassword=document.getElementById("singuppasswordinput").value;
    if(!newname || !newpassword){
        document.getElementById("yesaccount").innerHTML="Enter all details";
        return;
    }
    users.push(
        {
            name:newname,
            password:newpassword,
            access:0
        }
    );
    localStorage.setItem("usersdata",JSON.stringify(users));
    document.getElementById("yesaccount").innerHTML="Please wait...!";
    document.getElementById("noaccount").innerHTML="Registered Successfully...";
    document.getElementById("noaccount").style.color="green";
    document.getElementById("noaccount").style.fontSize="larger";
    document.getElementById("loadsignuppage").style.display="none";
    setTimeout(()=>{
        document.getElementById("yesaccount").innerHTML="Already have an account ?";
        document.getElementById("login-entry-id").style.display="flex";
        document.getElementById("siginup-entry-id").style.display="none";
    },3000)
}
function loadpage(){
    let username=document.getElementById("usernameinput").value;
    let password=document.getElementById("passwordinput").value;
    for(let details of users){
        if(details.name==username && details.password==password){
            loggeduser=username[0];
            let addtocartbutton=document.querySelectorAll(".add-to-cart-button");
            document.getElementById("accounticon").innerHTML=loggeduser;
            if(details.access==1){
                
                addtocartbutton.forEach((addcartbuttons)=>{
                    addcartbuttons.style.display="none";
                });
                document.getElementById("addbuttonheader").style.display="inline-block";
                document.getElementById("Main-body-id").style.display="block";
                document.getElementById("login-entry-id").style.display="none";
                return ;
            }
            else{
                document.getElementById("addbuttonheader").style.display="none";
                document.getElementById("Main-body-id").style.display="block";
                document.getElementById("login-entry-id").style.display="none";
                addtocartbutton.forEach((addcartbuttons)=>{
                    addcartbuttons.style.display="inline-block";
                })
                return ;
            }
        }
    }
    document.getElementById("noaccount").innerHTML="Account not found !";
}
function mainaddingproduct(newproductname,newproductprice,newproductimage,cartstatus){
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
    image_div.className="image-div";
 

    let image=document.createElement("img");
    image.className="product-image";
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
    if (cartstatus==0){
        but.innerHTML="ADD TO CART";
    }
    else{
        but.innerHTML="ADDED";
    }
    
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

function addnewproduct(){
    document.getElementById("addnew-product-div-id").style.display="flex";
    document.getElementById("main-container-id").style.display="none";
    document.getElementById("newproductname").focus();
}
/*
let fields=["newproductname","newproductprice","usernameinput","singupusernameinput"];
let buttons=["newproductimage","newproductaddbuttonid","passwordinput","loginbutton","singuppasswordinput","signupbutton"];

function nextfield(event,buttonid){
    if(event.key=="Enter"){
        fields.forEach((field)=>{

        });
    }
}
*/
function nextfield(event,buttonid){
    if(event.key=="Enter"){
        if(buttonid=="newproductname"){
            document.getElementById("newproductprice").focus();
        }
        else if(buttonid=="newproductprice"){
            document.getElementById("newproductimage").focus();
        }
        else if (buttonid=="newproductimage"){
            document.getElementById("newproductaddbuttonid").click();
        }
        else if(buttonid=="usernameinput"){
            document.getElementById("passwordinput").focus();
        }
        else if (buttonid=="passwordinput"){
            document.getElementById("loginbutton").click();
        }
        else if(buttonid=="singupusernameinput"){
            document.getElementById("singuppasswordinput").focus();
        }
        else if (buttonid=="singuppasswordinput"){
            document.getElementById("signupbutton").click();
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
    mainaddingproduct(newproductname,newproductprice,newproductimage,0);
    productslist.push({
        name:newproductname,
        price:newproductprice,
        image:newproductimage,
        added:0
    });
    localStorage.setItem("listofitems",JSON.stringify(productslist));
    document.getElementById("newproductname").value="";
    document.getElementById("newproductprice").value="";
    document.getElementById("newproductimage").value="";
    
    //localStorage.setItem("listofobjects",JSON.stringify(productslist));
}

function opencart(){

}





function addtocart(productid){
    let cart=document.getElementById(productid);
    let realname=productid.replace("addtocart","");
    let tempid;
    for(let product in productslist ){
        let name=productslist[product].name;
        name=name.replaceAll(" ","");
        if(name==realname){
            tempid=product;
            break;
        }
    }
    if(tempid===undefined){
        return;
    }
    if(cart.innerHTML=="ADD TO CART"){
        cart.innerHTML="ADDED";
        itemsquantity++;
        document.getElementById("cartquantity").innerHTML=itemsquantity;
        productslist[tempid].added=1;
    }
    else{
        itemsquantity--;
        document.getElementById("cartquantity").innerHTML=itemsquantity;
        cart.innerHTML="ADD TO CART";
        productslist[tempid].added=0;
        document.getElementById(productid+"signal").style.display="inline-block";
        setTimeout(()=>{
            document.getElementById(productid+"signal").style.display="none";
        },2000);
    }
    localStorage.setItem("itemsquantity",JSON.stringify(itemsquantity));
    localStorage.setItem("listofitems",JSON.stringify(productslist));
}

function logoutclose(){
    document.getElementById("Main-body-id").style.display="none";
    document.getElementById("login-entry-id").style.display="flex";
    document.getElementById("siginup-entry-id").style.display="none";
   document.getElementById("noaccount").innerHTML="Dont have an account ?";

}

window.addtocart = addtocart;
window.addnewproduct = addnewproduct;
window.addnew = addnew;
window.nextfield = nextfield;