const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

/**
 * USING ASYNC/AWAIT
 * using async requires await before the funtion
 * async cause a asyncronouse API fetch
 */
 async function generateJoke() {
    const config ={
        headers: {
            'Accept':'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
         
}


/**
 * Function generateJoke creates a new joke
 * config is the json header configuration
 * fetch is an API to collect data fromt he site
 */
/* function generateJoke() {
    const config ={
        headers: {
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config)
        .then(res =>res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })    
} */