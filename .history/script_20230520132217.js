const trigger = document.querySelectorAll('nav a');
const content = document.querySelectorAll('section > div');
const card = document.querySelector('.card');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
//const tooltipIcons = document.querySelectorAll('.tooltip-icon');

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

// tooltipIcons.forEach(icon => {
//   icon.addEventListener('mouseover', () => {
//     icon.classList.add('show-tooltip');
//   });
//   icon.addEventListener('mouseout', () => {
//     icon.classList.remove('show-tooltip');
//   });
// });

