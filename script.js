/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things.',
    owner: 'Rene Descartes',
    year: 1644,
    citation: 'Principles of Philosophy".'
  },
  {
    quote:'Music is the only religion that delivers the goods.',
    owner:'Frank Zappa',
    citation:'10 Awesome Music Documentaries'
  },
  {
    quote:`I think I was identified as a failed president because I wasn't re-elected.`,
    owner:'Jimmy Carter',
    year:2010,
    citation:'Interview with Lesley Stahl.'
  },
  {
    quote:'We do not describe the world we see, we see the world we can describe.',
    owner:'Rene Descartes',
  },
  {
    quote:"Be scared. You can't help that. But don't be afraid.",
    owner:'William Faulkner',
    year:2011
  }

]


/***
 * `getRandomQuote` function
***/
 function getRandomQuote(){
 let randume =Math.floor(Math.random()*quotes.length);
 //console.log(randume)
  let quote = quotes[randume]
  return quote
}




/***
 * `printQuote` function
***/

function printQuote(){

  let quote = getRandomQuote();
 let html= document.getElementById('quote-box');
 html.innerHTML = `<p class="quote">"${quote.quote}"</p>
 <p class="source">${quote.owner}
 ${quote.citation?.length > 0 ? `<span class="citation">${quote.citation}</span>` : ''}
 ${quote.year?.length > 0 ? `<span class="year">${quote.year}</span>` : ''}
 </p>`

}
 document.getElementById('load-quote').addEventListener("click", printQuote, false);