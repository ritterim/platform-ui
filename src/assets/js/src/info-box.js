// Info box stuff

var infoBox = document.querySelector('.pui-info-box, .info-box');

if(infoBox) {
  document.querySelector('.toggle-hidden').addEventListener('click', function(){
    this.nextSibling.nextSibling.classList.toggle('hidden');
  });
}

var infoBox2 = document.querySelector('.pui-info-box--left, .info-box--left');

if(infoBox2) {
  document.querySelector('.toggle-hidden--left').addEventListener('click', function(e){
    e.preventDefault();
    this.nextSibling.nextSibling.classList.toggle('hidden');
  });
}
