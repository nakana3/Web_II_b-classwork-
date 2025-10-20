const loginBtn = document.getElementById("loginBtn");
const loginDialog = document.getElementById("loginDialog");
const closeBtn = document.getElementById("closeBtn");

loginBtn.onclick = function() {
    loginDialog.showModal();
}

closeBtn.onclick = function() {
    loginDialog.close();
}

loginDialog.onclick = function(event) {
    if (event.target === loginDialog) {
        loginDialog.close();
    }
}
