var modal = document.querySelector(".modal-section")

//Open modal window
function openWindow(){
    modal.style.display = "block";
}
//Close modal window
function closeWindow(){
    modal.style.display = "none";
};

//Close modal window when you click anywhere outside the modal window
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}