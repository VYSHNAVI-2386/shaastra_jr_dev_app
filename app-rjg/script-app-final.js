const jokeButton = document.getElementById('joke-button');
const categorySelect = document.getElementById('category');
const waitingMessage = document.getElementById('waiting-message');
const jokeOutput = document.getElementById('joke-output');

jokeButton.addEventListener('click', () => {
    const category = categorySelect.value;
    
    waitingMessage.style.display = 'block';
    jokeOutput.textContent = '';

    fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
        .then(response => response.json())
        .then(data => {
            waitingMessage.style.display = 'none';
            
            if (data.type === 'single') {
                jokeOutput.textContent = data.joke; 
            } 
            
            else {
                jokeOutput.textContent = 'Sorry, no joke found.';
            }
        })
        .catch(error => {
            waitingMessage.style.display = 'none';
            jokeOutput.textContent = 'Oops! Something went wrong. Try again later.';
        });
});
