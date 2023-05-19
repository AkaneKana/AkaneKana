const trigger = document.querySelectorAll('nav a');
const content = document.querySelectorAll('section > div');
const card = document.querySelector('.card');

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

var chatBubble = document.getElementById("chat-bubble");

    chatBubble.addEventListener("mousedown", function (event) {
      var startX = event.clientX;
      var startY = event.clientY;
      var offsetX = startX - chatBubble.getBoundingClientRect().left;
      var offsetY = startY - chatBubble.getBoundingClientRect().top;

      function moveBubble(event) {
        var newX = event.clientX - offsetX;
        var newY = event.clientY - offsetY;

        chatBubble.style.left = newX + "px";
        chatBubble.style.top = newY + "px";
      }

      function stopMoving() {
        window.removeEventListener("mousemove", moveBubble);
        window.removeEventListener("mouseup", stopMoving);
      }

      window.addEventListener("mousemove", moveBubble);
      window.addEventListener("mouseup", stopMoving);
