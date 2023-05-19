const trigger = document.querySelectorAll('nav a');
const content = document.querySelectorAll('section > div');
const card = document.querySelector('.card');
var chatBubble = document.getElementById("chat-bubble");

const onShow = (e) => {
    const dataTarget = e.target.getAttribute('data');
    const body = document.querySelector(dataTarget);
    dataTarget !== '#me'
    ? card.classList.add('active') : card.classList.remove('active');
    card.setAttribute('data-show', dataTarget);
    content.forEach((s) => s.classList.remove('active'));
    trigger.forEach((b) => b.classList.remove('active'));
    e.target.classList.add('active');
    body.classList.add('active');
}

trigger.forEach((button) => {
    button.addEventListener('click', onShow)
})

card.addEventListener('mousedown', function (event) {
    isDragging = true;
    offset = {
      x: card.offsetLeft - event.clientX,
      y: card.offsetTop - event.clientY
    };
  });
  
  document.addEventListener('mousemove', function (event) {
    if (isDragging) {
      card.style.left = event.clientX + offset.x + 'px';
      card.style.top = event.clientY + offset.y + 'px';
    }
  });
  
  document.addEventListener('mouseup', function () {
    isDragging = false;
  });