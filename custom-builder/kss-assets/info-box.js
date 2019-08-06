// Info box stuff

var infoBox = document.querySelector('.rim-info-box');

if(infoBox) {
  document.querySelector('.toggle-hidden').addEventListener('click', function(){
    this.nextSibling.nextSibling.classList.toggle('hidden');
  });
}
