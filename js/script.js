/*** 
 * Array that stores all the objects of quotes
 * Such as Quote, Source, Year and Citation
***/
const quotes = [
  {
    quote: 'History repeats itself, first as tragedy, second as farce.',
    source: 'Karl Marx'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    source: 'Mark Twain'
  },
  {
    quote: 'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
    source: 'Buddha',
    year: '563 BC - 483 BC'
  },
  {
    quote: 'It is our choices, that show what we truly are, far more than our abilities.',
    source: 'J. K Rowling'
  },
  {
    quote: 'Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before.',
    source: 'Edgar Allen Poe',
    citation: 'The Raven',
    subject: 'Literature'
  }
];

/***
 * Get a Random quote from the above array using index values
 * Return the Random Quote as output
***/
const getRandomQuote = (arr) => {
  let randomSelection = Math.ceil(Math.random() * arr.length) - 1;
  return arr[randomSelection];
}

/***
 * Define the random quote in a re-usable variable
 * then store the string that will display the Quote object
 * If it has a year or citation display those with the quote and source
***/
const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let quoteString = `<p class="quote"> ${randomQuote.quote} </p>
                       <p class="source"> ${randomQuote.source}`;

  if (randomQuote.year) {
    const year = `<span class="citation"> ${randomQuote.year} </span>`;
    quoteString = `${quoteString}  ${year} </p>`;
  }

  if (randomQuote.citation) {
    const citation = `<span class="citation"> ${randomQuote.citation} </span>`;
    quoteString = `${quoteString}  ${citation} </p>`;
  }
  if (randomQuote.subject) {
    const subject = `<span class="subject"> ${randomQuote.subject} </span>`
    quoteString = `${quoteString} ${subject} </p>`;

  }
  document.getElementById('quote-box').innerHTML = quoteString;
  /***
 *  Function that Changes the Background color when the quote changes
 ***/
  const backgroundColor = () => {

    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${red}, ${blue}, ${green})`;
  }
  backgroundColor();

}

//setting refresh and loading new quote

setInterval(printQuote, 5000);

/***
 * Display the random quote on the page when button is clicked
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);