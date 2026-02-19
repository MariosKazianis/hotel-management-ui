"use strict";

const addBookingBtn =document.getElementById("addBookingBtn");
const viewBookingBtn =document.getElementById("viewBookingBtn");
const saveBookingBtn =document.getElementById("saveBookingBtn");
const cancelBookingBtn =document.getElementById("cancelBookingBtn");
const addBookingPopup=document.getElementById("addBookingPopup");
const customerId=document.getElementById("customerId");
const room=document.getElementById("room");
const checkIn=document.getElementById("checkIn");
const checkOut=document.getElementById("checkOut");
const price=document.getElementById("price");
const viewBookingListBtn=document.getElementById("viewBookingListBtn");
const viewBookingListPopup=document.getElementById("viewBookingListPopup");
const cancelBookingListBtn=document.getElementById("cancelBookingListBtn");


addBookingBtn.onclick = function(){
    addBookingPopup.style.display = "block";
}

saveBookingBtn.onclick = async function(){
    const response = await fetch(`${url}/bookings`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            customerId: customerId.value,
            roomNumber: room.value,
            checkIn: checkIn.value,
            checkOut: checkOut.value,
            pricePerNight: price.value,})
    });
    if (!response.ok) {
        const error = await response.json();
        console.log(error);
    }
    addBookingPopup.style.display = "none";
}

viewBookingListBtn.onclick = async function(){
    const response = await fetch(`${url}/bookings`, {
        method: "GET",
    })
    if (!response.ok) {
        const error = await response.json();
        console.log(error);
    }
    const result = await response.json();
    const parentNode = document.getElementById("bookingList");
    parentNode.innerHTML = "";
    result.forEach(booking => {
        const newNode = document.createElement("li");
        const bookingContents= "ID: " + booking.id + ", "
            + "customerId: " + booking.customerId + ", "
            + "roomNumber: " + booking.roomNumber + ", "
            + "checkIn: " + booking.checkIn + ", "
            + "checkOut: " + booking.checkOut + ", "
            + "pricePerNight: " + booking.pricePerNight;
        newNode.textContent= bookingContents;
        parentNode.appendChild(newNode);
        viewBookingListPopup.style.display = "block";
        cancelBookingListBtn.focus();
    })
}

cancelBookingListBtn.onclick =function(){
    viewBookingListPopup.style.display = "none";
}





