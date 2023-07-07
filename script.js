//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person'); 

const quotes  = [{
    quote: "Technology is best when it brings people together",
    person: 'Matt Mullenweg'
},{
    quote: "It has become appaling that our technology has exceeded our humanity",
    person: 'Albert Einstein'
},{
    quote: "It is only when they go wrong machine you how powerful they are",
    person: 'Clive james'
},{
    quote: "the web as i envisaged it, we have not seen it yet. the future is still much bigger than the past",
    person: 'Tin berners'
},{
    quote: "Once a technology rolls over you, if you are not part of the stream roller then you are part of the road",
    person: 'Steward brand'
},{
    quote: "Its' not a faith in technology, It's faith in people ",
    person: 'Steve jobs'
},{
    quote: "Any sufficient advanced technology is equivalent to magic",
    person: 'Arthur C'
},{
    quote: "All the biggest technological invention created by man, the airplane, the automobile, the computers- says little about his intelligence but speaks volumes aout his laziness",
    person: 'mark kennedy'

},{
    quote: "The journey of a thousand miles egins with one step",
    perosn: 'Lao Tzu'
},
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText =  quotes[random].person;
})