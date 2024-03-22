let apiQuotes = [];

//Show new quote
function newQuote() {
  //pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

//Get Quote from API 
async function getQuote() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log('whoops, no quote', error);
  }
}

//onLoad
getQuote();