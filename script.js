const binaryInputContainer = document.getElementById('binary-input-container');
const binaryInput = document.getElementById('binary-input');
const sendButton = document.getElementById('send-button');
const result = document.getElementById('result');
const warningMessage = document.getElementById('warning-message');

const checkBinary = (event) => {
  const newChar = event.key;
  if (newChar !== '1' && newChar !== '0' ) {
    event.preventDefault();
    warningMessage.innerHTML = 'Somente 0 e 1';
    warningMessage.style.color = 'red'
    binaryInput.classList.add('invalid-input')
    return
  }
  binaryInput.classList.remove('invalid-input')
  warningMessage.innerHTML = ''
}

const convert = () => {
  let convertResult = 0;
  const binary = binaryInput.value;
  if (!binary || binary === '') {
    result.innerHTML = 'Adicione um número binário para converter';
    result.classList.add('invalid-input');
    return
  }

  let reverseBinary = binary.split("").reverse().join("");
  for (let index = 0; index < reverseBinary.length ; index+=1 ) {
    if (reverseBinary[index] === '1') {
      convertResult += Math.pow(2, index);
    }
  }
  result.classList.remove('invalid-input')
  result.innerHTML = convertResult;
}

sendButton.addEventListener('click', convert)
binaryInput.addEventListener('keypress', checkBinary)

