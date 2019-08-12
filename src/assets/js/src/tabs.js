// Rim Tabs
if (document.querySelectorAll('.rim-tabs').length) {
  let childList = document.querySelector('.rim-tabs').children;
  let tabs = document.querySelectorAll('.rim-tabs li a');
  let contentList = document.querySelectorAll('.rim-tabs > div');
  if (window.location.hash) {
    tabs.forEach(el => {
      if (window.location.hash === el.hash) {
        el.classList.add('active');
      }
    });
    contentList.forEach(el => {
      if (window.location.hash.replace('#', '') === el.id) {
        el.classList.add('active');
      }
    });
  } else {
    childList[0].firstElementChild.classList.add('active');
    contentList[0].classList.add('active');
  }
  tabs.forEach(el => el.addEventListener('click', function(event) {
    const active = document.querySelectorAll('.rim-tabs .active');
    if (active) active.forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
    let thisContent = document.querySelector(event.currentTarget.hash);
    history.replaceState(null, '', event.currentTarget.hash);
    thisContent.classList.add('active');
    event.preventDefault();
  }, false));
}