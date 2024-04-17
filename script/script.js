const quote = document.querySelector('#quote');
const author = document.querySelector("#author");
const authorPic = document.querySelector("#authorPic");
var quotes = [{
    quoteNo: 1,
    quoteText: '“Be yourself; everyone else is already taken.”',
    quoteAuthor: 'Oscar Wilde',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg'

},
{
    quoteNo: 2,
    quoteText: '“You only live once, but if you do it right, once is enough.”',
    quoteAuthor: 'Mae West',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg'

}
    ,
{
    quoteNo: 3,
    quoteText: '“So many books, so little time.”',
    quoteAuthor: 'Frank Zappa',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1696236573i/22302._UX200_CR0,0,200,200_.jpg'

}
    ,
{
    quoteNo: 4,
    quoteText: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
    quoteAuthor: 'Albert Einstein',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg'

}
    ,
{
    quoteNo: 4,
    quoteText: '“If you tell the truth, you don\'t have to remember anything.”',
    quoteAuthor: 'Mark Twain',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322103868i/1244._UX200_CR0,40,200,200_.jpg'

}
    ,
{
    quoteNo: 5,
    quoteText: '“A room without books is like a body without a soul.”',
    quoteAuthor: 'Marcus Tullius Cicero',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg'

}
    ,
{
    quoteNo: 6,
    quoteText: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    quoteAuthor: 'Bernard M. Baruch',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg'

}
    ,
{
    quoteNo: 7,
    quoteText: '“You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.”',
    quoteAuthor: 'William W. Purkey',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg'

}
    ,
{
    quoteNo: 8,
    quoteText: '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
    quoteAuthor: 'Dr. Seuss',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg'

}
    ,
{
    quoteNo: 9,
    quoteText: '“Be the change that you wish to see in the world.”',
    quoteAuthor: 'Mahatma Gandhi',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg'

}
    ,
{
    quoteNo: 10,
    quoteText: '“In three words I can sum up everything I\'ve learned about life: it goes on.”',
    quoteAuthor: 'Robert Frost',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1605640483i/7715._UX200_CR0,33,200,200_.jpg'

}
    ,
{
    quoteNo: 11,
    quoteText: '“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”',
    quoteAuthor: 'J.K. Rowling, Harry Potter and the Goblet of Fire',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg'

}
    ,
{
    quoteNo: 12,
    quoteText: '“A friend is someone who knows all about you and still loves you.”',
    quoteAuthor: 'Elbert Hubbard',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg'

}
    ,
{
    quoteNo: 13,
    quoteText: '“Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.”',
    quoteAuthor: 'Marilyn Monroe',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1436929110i/82952._UX200_CR0,57,200,200_.jpg'

}
    ,
{
    quoteNo: 14,
    quoteText: '“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”',
    quoteAuthor: 'John Green, The Fault in Our Stars',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1353452301i/1406384._UX200_CR0,49,200,200_.jpg'

}
    ,
{
    quoteNo: 15,
    quoteText: '“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”',
    quoteAuthor: 'Maurice Switzer, Mrs. Goose, Her Book',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1534627057i/2868190._UX200_CR0,37,200,200_.jpg'

}
    ,
{
    quoteNo: 16,
    quoteText: '“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”',
    quoteAuthor: 'Friedrich Nietzsche',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474065i/1938._UX200_CR0,35,200,200_.jpg'

}
    ,
{
    quoteNo: 17,
    quoteText: '“Life is what happens to us while we are making other plans.”',
    quoteAuthor: 'Allen Saunders',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1368887014i/276029.jpg'

}
    ,
{
    quoteNo: 18,
    quoteText: '“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”',
    quoteAuthor: 'douglas adams, The Long Dark Tea-Time of the Soul',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1616277702i/4._UX200_CR0,15,200,200_.jpg'

}
    ,
{
    quoteNo: 19,
    quoteText: '“A day without sunshine is like, you know, night.”',
    quoteAuthor: 'Steve Martin',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1585425013i/7103._UX200_CR0,41,200,200_.jpg'

}
    ,
{
    quoteNo: 20,
    quoteText: '“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”',
    quoteAuthor: 'Lao Tzu',
    authorPicSource: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1435903703i/2622245._UX200_CR0,13,200,200_.jpg'

}
]
var randomNum;
var x = 0;
function generateQuote() {
    randomNum = Math.floor(Math.random() * 19);
    if (randomNum != x) {
        x = randomNum;
        quote.innerHTML = quotes[x].quoteText;
        author.innerHTML = "- " + quotes[x].quoteAuthor;
        authorPic.src = quotes[x].authorPicSource;
    }
    else{
        generateQuote();
    }
}