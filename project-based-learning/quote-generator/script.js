// let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}
// On load
newQuote();

// Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://api.kanye.rest';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         alert(error)
//         // catch error here
//     }
// }

// // On load
// getQuotes();