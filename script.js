
document.getElementById('calculate').addEventListener('click', myFunction)

function myFunction () {
  const num = parseInt(document.getElementById('userinput').value)
  const ans = num * num
  document.getElementById('displayans').innerText = 'Answer =' + ans
}
