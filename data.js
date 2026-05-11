let productslist;

let cartitems;
let itemsquantity;

let users;
if(localStorage.getItem("usersdata")){
    users=JSON.parse(localStorage.getItem("usersdata"));
}
else{
    users=[
    {
        name:"kiran",
        password:"1",
        access:0
    },
    {
        name:"1",
        password:"1",
        access:1
    }
];
}

if(localStorage.getItem("itemsquantity")){
    itemsquantity=JSON.parse(localStorage.getItem("itemsquantity"));
}
else{
    itemsquantity=0;
}
if(localStorage.getItem("listofitems")){
    productslist=JSON.parse(localStorage.getItem("listofitems"));
}
else{
    productslist=[
        {
            name:"Blue Pant",
            price:"50",
            image:"images-icons/pant.webp",
            added:0
        },
        {
            name:"Black Shirt",
            price:"100",
            image:"images-icons/shirt.webp",
            added:0
        },
        {
            name:"Laptop",
            price:"60000",
            image:"images-icons/laptop.jpg",
            added:0
        }

    ];
}


if(localStorage.getItem("cartitems")){
    cartitems=JSON.parse(localStorage.getItem("cartitems"));
}
else{
    cartitems=[];
}
