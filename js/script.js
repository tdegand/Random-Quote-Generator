/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'History repeats itself, first as tragedy, second as farce.',
    source: 'Karl Marx' //can see
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    source: 'Mark Twain' // can see
  },
  {
    quote: 'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
    source: 'Buddha', //can see
    year: '563 BC - 483 BC' //cant see year!
  },
  {
    quote: 'It is our choices, that show what we truly are, far more than our abilities.',
    source: 'J. K Rowling'  //can see
  },
  {
    quote: 'Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before.',
    source: 'Edgar Allen Poe',
    citation: 'https://www.poetryfoundation.org/poems/48860/the-raven' // can see
  }
];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = (arr) => {
  let randomSelection = Math.round(Math.random() * arr.length);
  return arr[randomSelection];
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let quoteString = `<p class="quote"> ${randomQuote.quote} </p>
                       <p class="source"> ${randomQuote.source} </p>`;

  if (randomQuote === randomQuote.year) {
    quoteString = `<p class="quote"> ${randomQuote.quote} </p>
                   <p class="source">${randomQuote.source}
                   <span class="year"> ${randomQuote.year}</span>
                   </p>`
  }
  if (randomQuote === randomQuote.citation) {
    quoteString = `<p class="quote"> ${randomQuote.quote} </p>
                   <p class="source"> ${randomQuote.source}
                      <span class="citation"> ${randomQuote.citation} </span>
                   </p>`
  }
  document.getElementById('quote-box').innerHTML = quoteString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);