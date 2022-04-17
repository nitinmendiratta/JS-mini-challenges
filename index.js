const challenges = [
  //Random Projects
  // sadanandpai/frontend-mini-challenges
  { title: "Toast Popup", link: "#" },
  { title: "Toast Popup", link: "#" },
  { title: "Guess the number", link: "#" },
  { title: "Telephone formatter", link: "#" },
  { title: "Light & Dark mode", link: "#" },
  { title: "Password Strength", link: "#" },
  { title: "Loaders...", link: "#" },
  { title: "Star Rating", link: "#" },
  { title: "Pixel Art", link: "#" },
  { title: "Color Spotter", link: "#" },
  { title: "Todo List", link: "#" },
  { title: "Tic-Tac-Toe", link: "#" },
  { title: "Chess board", link: "#" },
  { title: "Skeleton Loader", link: "#" },
  { title: "Countdown Timer", link: "#" },
  { title: "Area Selector", link: "#" },
  { title: "Carousel", link: "#" },
  { title: "Paginator", link: "#" },
  { title: "Comment box", link: "#" },
  { title: "Array methods", link: "#" },
  { title: "Stepper", link: "#" },
  { title: "Accordion", link: "#" },
  { title: "Transfer List", link: "#" },
  { title: "Autocomplete", link: "#" },
  { title: "Progress Bar", link: "#" },
  { title: "Dialog Popup", link: "#" },
  { title: "Sort Table", link: "#" },
  { title: "Calendar", link: "#" },
  { title: "Emoji Editor", link: "#" },
  
  //Brad Traversy: 20+ Web Projects With Vanilla JavaScript
  
  // ZTM: JavaScript Web Projects: 20 Projects to Build Your Portfolio
  
  // Brad Traversy: 50 Projects In 50 Days - HTML, CSS & JavaScript
  { 
    title: "Expanding Cards", 
    link: "expanding-cards", 
    githublink: "expanding-cards", 
    codesandboxlink:"https://codesandbox.io/s/1-expanding-cards-in-js-qisf2v?file=/index.js"
  },
  { 
    title: "Progress Steps", 
    link: "progress-steps", 
    githublink: "progress-steps", 
    codesandboxlink:"https://codesandbox.io/s/1-expanding-cards-in-js-qisf2v?file=/index.js"
  }
  // JavaScript30
  
];
const path = "./challenges/";
const githubUrl = "https://github.com/nitinmendiratta/JS-mini-challenges/tree/main/challenges/";
const challengeGridEl = document.getElementById("challengeGrid");
const comingsoonGridEl = document.getElementById("comingsoonGrid");

const cardHTML = `
<div class="card">
<a href=""></a>
<div class="externallinks">
<a href=""><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" title="github" alt="github"></a>
<a href=""><img src="./codesandboxicon.png" title="codesandbox" alt="codesandbox"></a>
</div>
</div>`;

const createAnchorElement = (obj) => {
  var temp = document.createElement('div');
  temp.innerHTML = cardHTML;
  var card = temp.firstElementChild;
  const allLinks = card.getElementsByTagName('a');
  const github = allLinks[1], codesandbox = allLinks[2];
  
  allLinks[0].textContent = obj.title;
  allLinks[0].href = path+obj.link;
  
  if(obj.link === '#'){
    card.classList.add('disabled');
    allLinks[0].title = 'To be developed';
    comingsoonGridEl.appendChild(card);
  }else{
    github.href = githubUrl+obj.githublink;
    codesandbox.href = obj.codesandboxlink;
    challengeGridEl.appendChild(card);
  }
};



challenges.forEach((obj) => createAnchorElement(obj));