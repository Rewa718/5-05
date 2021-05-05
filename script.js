
document.getElementById('calculate').addEventListener('click', myFunction)

function myFunction () {
  let num = parseInt(document.getElementById('userinput').value)
  let ans = num * num; 
  document.getElementById('displayans').innerText = 'Answer =' + ans
}
