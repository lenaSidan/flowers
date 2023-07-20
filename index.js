const flowersContainerElement = document.getElementById('flowers-container');

async function loadFlowers() {
  const res = await fetch(
    'https://lenasidan.github.io/book.api/flowers.json'
  );
  const flowers = await res.json();
  console.log(flowers);
  flowers.forEach((flower) => {
    const { name, color, description, image, maxHeight } = flower;
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    const nameElement = document.createElement('span');
    nameElement.classList.add('card-element', 'title');
    const infoElement = document.createElement('div'); 
    const colorElement = document.createElement('span');
    colorElement.classList.add('card-element', 'color');
    const descriptionElement = document.createElement('span');
    descriptionElement.classList.add('card-element', 'description');
    const maxHeightElement = document.createElement('span');
    maxHeightElement.classList.add('card-element', 'maxHeight');
    const imgElement = document.createElement('img');
    imgElement.classList = 'card-element';

    imgElement.src = image;
    nameElement.textContent = name;
    colorElement.textContent = `color:`;
    descriptionElement.textContent = `description:`;
    maxHeightElement.textContent = `maxHeight:`;
    
   
    infoElement.append(colorElement, ` ${color}`, document.createElement('br'), descriptionElement, ` ${description}`, document.createElement('br'), maxHeightElement, ` ${maxHeight}cm`);
    cardElement.append(nameElement, imgElement, infoElement);
    flowersContainerElement.append(cardElement);
  });
}

loadFlowers();

