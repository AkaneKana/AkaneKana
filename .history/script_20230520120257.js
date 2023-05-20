const trigger = document.querySelectorAll('nav a');
const content = document.querySelectorAll('section > div');
const card = document.querySelector('.card');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const tooltipIcons = document.querySelectorAll('.tooltip-icon');

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

tooltipIcons.forEach((tooltipIcon) => {
    tooltipIcon.addEventListener('mouseenter', showTooltip);
    tooltipIcon.addEventListener('mouseleave', hideTooltip);
  });

  // Hiển thị tooltip khi hover
  function showTooltip() {
    const tooltip = this.getAttribute('data-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    tooltipElement.innerText = tooltip;
    this.appendChild(tooltipElement);
  }

  // Ẩn tooltip khi không hover
  function hideTooltip() {
    const tooltipElement = this.querySelector('.tooltip');
    tooltipElement.remove();
  }

