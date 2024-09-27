


document.getElementById('wordform').addEventListener('submit', function(event){
    event.preventDefault();
    const word = document.getElementById('word').value.trim();
    if(word){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if(!response.ok)
                    throw new Error("word not found!")
            return response.json();
        })
        .then(arr => {
            const meaning = arr[0].meanings[0].definitions[0].definition;
            const meaningTag = document.getElementById('meaningTag');
            meaningTag.innerHTML = meaning;
        })
        .catch(error => {
            document.getElementById('meaningTag').innerHTML = error.message;
        });
    }
})