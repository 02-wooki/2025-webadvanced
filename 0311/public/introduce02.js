let cards;
let targetCard;
    
const setup = () => {
  cards = document.getElementsByTagName('section');
  for (const card of cards) {
    card.addEventListener('mousemove', (e) => rotateCard(e));
    card.addEventListener('mouseenter', (e) => {
      targetCard = e.target;
    })
    card.addEventListener('mouseleave', (e) => {
      targetCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      targetCard = undefined;
    })
  }
}

const rotateCard = (e) => {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  
  let centerCardX = e.target.offsetWidth / 2 - mouseX;
  let centerCardY = e.target.offsetHeight / 2 - mouseY;

  if (targetCard)
    targetCard.style.transform = `perspective(4000px) rotateX(${-(centerCardY/24)}deg) rotateY(${(centerCardX/34)}deg) scale(1.03)`;
}