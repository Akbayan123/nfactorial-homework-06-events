// #1
document.getElementByClass('button').onclick = function() {
    document.getElementByClass('text').hidden = true;
}

// #2
// Первый и третий

// #3
let animals = document.querySelectorAll('.animals');

    for(let i of animals) {
      i.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      i.firstChild.onclick = () => i.remove();
    }