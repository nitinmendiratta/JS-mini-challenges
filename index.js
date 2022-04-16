const challenges = [
	//MUST DO
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
  { title: "Expanding Cards", link: "expanding-cards"},
  { title: "Progress Steps", link: "progress-steps"},
  // JavaScript30

];

const challengeGridEl = document.getElementById("challengeGrid");
const comingsoonGridEl = document.getElementById("comingsoonGrid");

const createAnchorElement = (obj) => {
  const a = document.createElement("a");
  

  if(obj.link === '#'){
    a.textContent = obj.title;
    a.classList.add('disabled');
    a.title = 'To be developed';
    a.href = '#';
	comingsoonGridEl.appendChild(a);
  }else{
	  a.textContent = obj.title;
	  a.href = `./challenges/${obj.link}/`;
	  challengeGridEl.appendChild(a);
  }
  return a;
};



challenges.forEach((obj) => createAnchorElement(obj));
