const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")
const jokeHexCol = document.getElementById("bgHex")



// USING ASYNC/AWAIT
const generateJoke = {
  handleEvent: async function (event) {
    const config = {
      headers: {
        Accept: "application/json",
      },
    }
    const response = await fetch("https://icanhazdadjoke.com", config)
    const data = await response.json()

    jokeEl.innerHTML = data.joke
    changeBGcolor()
  }
}

function changeBGcolor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
  document.body.style.backgroundColor = randomColor
  jokeHexCol.innerHTML = randomColor
}

jokeBtn.addEventListener("click", generateJoke)