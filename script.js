const binaryInputContainer = document.getElementById('binary-input-container');
const binaryInput = document.getElementById('binary-input');
const sendButton = document.getElementById('send-button');
const result = document.getElementById('result');
const warningMessage = document.getElementById('warning');

const checkBinary = (event) => {
  const newChar = event.key;
  if (newChar !== '1' && newChar !== '0' ) {
    event.preventDefault();
    warningMessage.innerHTML = 'Somente 0 e 1';
    warningMessage.style.color = 'red'
    return
  }
  warningMessage.innerHTML = ''
}

const convert = () => {
  const binary = binaryInput.value;
  if (!binary || binary === '') {
    result.innerHTML = 'Adicione um número para converter';
    result.style.color = 'red';
    return
  }
  result.innerHTML = parseInt(binary,2);
}

sendButton.addEventListener('click', convert)
binaryInput.addEventListener('keypress', checkBinary)

