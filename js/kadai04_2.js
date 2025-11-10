const loginBtn = document.getElementById("loginBtn");
const loginDialog = document.getElementById("loginDialog");
const closeBtn = document.getElementById("closeBtn");

function openLoginDialog() {
    loginDialog.showModal();
}

function closeLoginDialog() {
    loginDialog.close();
}

function handleOutsideClick(event) {
    if (event.target === loginDialog) {
        closeLoginDialog();
    }
}

loginBtn.addEventListener("click", openLoginDialog);
closeBtn.addEventListener("click", closeLoginDialog);
loginDialog.addEventListener("click", handleOutsideClick);
