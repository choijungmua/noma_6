const quotes = [
  {
    quote: "The way to get started is to quit talking and begin going.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happends when you're busy making other plans.",
    authors: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only",
    author: "Saint Augustine",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote:
      "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote: " 행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote:
      " 흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다.",
    author: "안창호",
  },
  {
    quote:
      "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
    author: "베토벤",
  },
  {
    quote: "내 비장의 무기는 아직 손안에 있다 .그것은 희망이다 ",
    author: "나폴레옹",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
