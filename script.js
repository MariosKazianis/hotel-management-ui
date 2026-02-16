"use strict";

const url = "http://127.0.0.1:8000";

const addCustomerPopup = document.getElementById("addCustomersPopup");
const addCustomerBtn = document.getElementById("addCustomerBtn");
const cancelCustomerBtn = document.getElementById("cancelCustomerBtn");
const saveCustomerBtn = document.getElementById("saveCustomerBtn");
const customerName=document.getElementById("customerName");
const customerEmail=document.getElementById("customerEmail");
const viewCustomerListBtn=document.getElementById("viewCustomerListBtn");
const viewCustomerListPopup=document.getElementById("viewCustomerListPopup");
const cancelCustomerListBtn=document.getElementById("cancelCustomerListBtn");

addCustomerBtn.onclick = function(){
    addCustomerPopup.style.display = "block";
}

saveCustomerBtn.onclick = async function(){
    const response = await fetch(`${url}/customers`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name : customerName.value , email: customerEmail.value })
    });
    addCustomerPopup.style.display = "none";
}

cancelCustomerBtn.onclick = function(){
    addCustomerPopup.style.display = "none";
}

viewCustomerListBtn.onclick = async function(){
    const response = await fetch(`${url}/customers`, {
        method: "GET",
    })
    const result = await response.json();
    const parentNode = document.getElementById("customerList");
    parentNode.innerHTML = "";
    result.forEach(customer => {
        const newNode = document.createElement("li");
        const customerContents= "ID: " + customer.id + ", "
            + "Name: " + customer.name + ", "
            + "Email: " + customer.email;
        newNode.textContent= customerContents;
        parentNode.appendChild(newNode);
        viewCustomerListPopup.style.display = "block";
        cancelCustomerListBtn.focus();
    })
}

cancelCustomerListBtn.onclick =function(){
    viewCustomerListPopup.style.display = "none";
}


