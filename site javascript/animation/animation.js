const changeColorButton = document.getElementById('color-button');
const text = document.getElementById('text');

function changeColor() {
    if (text.style.color === 'red') {
      text.style.color = 'black';
    } else {
      text.style.color = 'red';
    }
  }
  
  changeColorButton.addEventListener('click', changeColor);

const NY = document.querySelector('#NY');
NY.style.color = 'white';

function bold() {
    var titres = document.querySelectorAll("h2");
    titres.forEach(function(titre) {
      if (titre.classList.contains("bold")) {
        titre.classList.remove("bold");
      } else {
        titre.classList.add("bold");
      }
    });
  }
  

const p = document.getElementById('paragraphe');
p.insertAdjacentHTML('beforebegin', '<p>Quelques mots de sagesse:</p>');
p.innerHTML = '"Pas de bras... Pas de chocoalt." Jules César';
p.innerHTML += '<br>"La vie c\'est comme une bicyclette, il faut avancer pour ne pas perdre l\'équilibre."Albert Einstein';

const lorem = document.getElementById('lorem');
lorem.classList.add('lorem');

window.addEventListener('scroll', function() {
    console.log('La page est en train de défiler');
  });
  





