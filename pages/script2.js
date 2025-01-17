document.getElementById('normalButton').addEventListener('click', function() {
    let inputText = document.getElementById('myInput').value;
    document.getElementById('output').textContent = inputText;
});


document.getElementById('reverseButton').addEventListener('click', function() {
    let inputText = document.getElementById('myInput').value;
    let reversedText = inputText.split('').reverse().join('');
    document.getElementById('output').textContent = reversedText;
});