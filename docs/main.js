const $newQuote = document.querySelector("#new-quote")
const $body = document.querySelector("body")
const $text = document.querySelector("#text")
const $author = document.querySelector("#author")
const $tweetQuote = document.querySelector("#tweet-quote")

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];
let randomColor = "";
let quote = "";
let author = "";

const changeQuote = async () => {
    const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.quotes.length)
    quote = data.quotes[randomIndex].quote
    author = data.quotes[randomIndex].author

    $text.textContent = `"${quote}"`
    $author.textContent = "- " + author

    randomColor = colors[Math.floor(Math.random() * colors.length)]

    $body.style.backgroundColor = randomColor;
    $text.style.color = randomColor;
    $author.style.color = randomColor;
    $newQuote.style.backgroundColor = randomColor;
    $tweetQuote.style.backgroundColor = randomColor;
}

$newQuote.addEventListener("click", () => {
    changeQuote()
})

$tweetQuote.addEventListener("click", () => {
    $tweetQuote.href = `https://twitter.com/intent/tweet?text="${quote}."%0A%0A-%20${author}&hashtags=quotes`
})

changeQuote()