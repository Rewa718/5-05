document.getElementById('calculate').addEventListener('click', myFunction)

function myFunction () {
  let number = parseInt(document.getElementById('input').value)
  let square = num * num
  document.querySelector('.answer').innerText = 'The Answer = ' + ans
}
