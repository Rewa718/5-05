document.getElementById('calculate').addEventListener('click', square)

function square () {
  let num = parseInt(document.getElementById('input').value);
  const = num * num
  document.querySelector('.answer').innerText = 'The Answer = ' + ans
}
