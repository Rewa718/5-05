


document.getElementById('calculate').addEventListener('click', input);

function input() {
  let number = parseInt(document.getElementById('input').value);
  let ans = number * number;
  document.querySelector('.answer').innerText = 'The Answer = ' + ans;
}