const quotes = [
  {
    quote: "지식에 대한 투자는 최고의 수익률로 보답한다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "나는 자리에 앉아 무슨 일이 벌어지기를 기다리는 걸 좋아하지 않는다. 어떤 일이 일어나도록 만드는 것이 훨씬 더 재미있다",
    author: "조이스 홀",
  },
  {
    quote: "월가에서 부자가 되는 비결을 알려줄게. 다른 사람들이 모두 두려워할 때 당신은 욕심을 부리면 된다. 그리고 다른 사람들이 탐욕에 빠져있을 때 공포감을 느끼면 된다.",
    author: "워렌 버핏",
  },
  {
    quote: " 누군가를 설득하기 전에 자신부터 설득해라. 그리고 만약 내 자신부터 설득시키지 못하는 일이라면 그만 포기하라.",
    author: "존 헨리 페터슨",
  },
  {
    quote: "창의적인 생각에 대한 가장 중요한 자극은 질문에 초점을 맞추는 것이다.",
    author: "브라이언 트레이시",
  },
  {
    quote: "행운의 여신은 집착한다고 오지 않는다. 그렇지만 열심히 일하는 사람에게는 항상 미소를 짓는다.",
    author: "비버브룩 경",
  },
  {
    quote: "실제 능력은 필요한 능력보다 항상 부족하다",
    author: "말콤 포브스",
  },
  {
    quote: "인간이 이 세상에서 갖게 될 진정한 안전은 지식, 경험, 능력의 축적뿐이다.",
    author: "헨리 포드 ",
  },
  {
    quote: "대부분의 사람들은 문제를 해결하려고 노력하기보다는 문제의 주변만 기웃거리는 데 더 많은 에어지와 시간을 낭비한다.",
    author: "헨리 포드",
  },
  {
    quote: "너는 돈을 통제하는 법을 배워야 나다. 그렇지 않으면 영원히 돈이 널 영원토록 지배할 것이다.",
    author: "데이브 램지",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;