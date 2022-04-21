let infoBoxes = document.querySelectorAll('.pui-info-box, .info-box');

if (infoBoxes) {
  infoBoxes.forEach((infoBox) => {
    const toggle = infoBox.querySelector('.toggle-hidden');
    const content = infoBox.querySelector('.info-box__content');
    const closeButtons = infoBox.querySelectorAll('.info-box__close');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      content.parentElement.classList.toggle('active');
    });

    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        content.parentElement.classList.add('active');
      });
    });
  });
}
