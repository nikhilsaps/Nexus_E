// This is a simplified example; replace with your actual JSON data
const paraData = {
  "para1": "This is paragraph 1",
  "para2": "This is paragraph 2",
  "para3": "This is paragraph 3",
  "para4": "This is paragraph 4",
  "para5": "This is paragraph 5",
};

document.getElementById('textInput').addEventListener('input', function () {
  const inputValue = this.value.toLowerCase();
  const optionsContainer = document.getElementById('optionsContainer');

  // Check if inputValue is a key in paraData
  if (paraData.hasOwnProperty(inputValue)) {
  const option = document.createElement('div');
  option.classList.add('option');
  option.textContent = inputValue; 
  option.addEventListener('click', function () {
    copyToClipboard(paraData[inputValue]);
  });
  optionsContainer.appendChild(option);
}
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
