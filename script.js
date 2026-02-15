"use strict";

const url = "http://127.0.0.1:8000";

let customerPopup = document.getElementById("customersPopup");
let addCustomerBtn = document.getElementById("addCustomerBtn");
let cancelCustomerBtn = document.getElementById("cancelCustomerBtn");
let saveCustomerBtn = document.getElementById("saveCustomerBtn");
let customerName=document.getElementById("customerName");
let customerEmail=document.getElementById("customerEmail");

addCustomerBtn.onclick = function(){
    customerPopup.style.display = "block";
}

saveCustomerBtn.onclick = async function(){
    const response = await fetch(`${url}/customers/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name : customerName.value , email: customerEmail.value })
    });
}
cancelCustomerBtn.onclick = function(){
    customerPopup.style.display = "none";
}

