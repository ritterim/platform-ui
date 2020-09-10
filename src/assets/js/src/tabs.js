const tabList = document.querySelector('.pui-tabs');

if (tabList) {
  let width = window.innerWidth;
  const tabs = document.querySelectorAll('.pui-tab');
  const tabPanel = document.querySelectorAll('.pui-tab-panel');
  const activeTab = document.querySelectorAll('.pui-tabs input:checked + label')

  if (width < 990.9) {

    var radioState = true;
    function test(element){
      if (radioState == false) {
        check();
        radioState = true;
      } else {
        uncheck();
        radioState = false;
      }

      function check() {
        element.previousElementSibling.setAttribute('checked', true);
        element.previousElementSibling.classList.remove('un-checked');
      }
      function uncheck() {
        element.previousElementSibling.setAttribute('checked', false);
        if (element.classList.contains('un-checked')) {
          element.classList.remove('un-checked');
        }
        element.previousElementSibling.classList.add('un-checked');
      }
    }

    tabs.forEach(function(el) {
      el.addEventListener('click', function() {
        test(el);
      })
    })
  }
}
