const form = document.getElementById('feedbackForm');
const resultDiv = document.getElementById('result');
const name = document.getValue('userName');
const comment = document.getValue('userComment');

form.addEventListener('submit', function(event) {
    feedbackForm.preventDefault();
    console.log(name);
    console.log(comment);
});
