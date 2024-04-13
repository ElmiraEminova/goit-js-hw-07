  function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    const input = document.querySelector('input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function onCreateButtonClick() {
      const amount = Number(input.value);
      if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100');
        return;
      }
      createBoxes(amount);
      input.value = '';
    }

    function onDestroyButtonClick() {
      destroyBoxes();
    }

    function createBoxes(amount) {
      destroyBoxes(); 
      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', onCreateButtonClick);
    destroyButton.addEventListener('click', onDestroyButtonClick);