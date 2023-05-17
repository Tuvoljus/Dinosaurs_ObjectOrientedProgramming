/**
 * @description Represents a dino constructor function
 * @constructor
 * @param {Object} dinoData - Dinosaur object containing Dinosaurs facts
 */
function Dinosaur(dinoData) {
  this.species = dinoData.species;
  this.weight = dinoData.weight;
  this.height = dinoData.height;
  this.diet = dinoData.diet;
  this.where = dinoData.where;
  this.when = dinoData.when;
  this.fact = dinoData.fact;
}

/**
 * @description The dinosaur data in object format
 * @returns An array of dinosaur objects (plus a pigeon)
 */
const dinos = [
  {
    species: 'Triceratops',
    weight: 13000,
    height: 114,
    diet: 'Herbavor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'First discovered in 1889 by Othniel Charles Marsh',
  },
  {
    species: 'Tyrannosaurus Rex',
    weight: 11905,
    height: 144,
    diet: 'Carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'The largest known skull measures in at 5 feet long.',
  },
  {
    species: 'Anklyosaurus',
    weight: 10500,
    height: 55,
    diet: 'Herbavor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Anklyosaurus survived for approximately 135 million years.',
  },
  {
    species: 'Brachiosaurus',
    weight: 70000,
    height: 372,
    diet: 'Herbavor',
    where: 'North America',
    when: 'Late Jurasic',
    fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
  },
  {
    species: 'Stegosaurus',
    weight: 11600,
    height: 79,
    diet: 'Herbavor',
    where: 'North America, Europe, Asia',
    when: 'Late Jurasic to Early Cretaceous',
    fact: 'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
  },
  {
    species: 'Elasmosaurus',
    weight: 16000,
    height: 59,
    diet: 'Carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
  },
  {
    species: 'Pteranodon',
    weight: 44,
    height: 20,
    diet: 'Carnivor',
    where: 'North America',
    when: 'Late Cretaceous',
    fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
  },
  {
    species: 'Pigeon',
    weight: 0.5,
    height: 9,
    diet: 'Herbavor',
    where: 'World Wide',
    when: 'Holocene',
    fact: 'All birds are living dinosaurs.',
  },
];

/**
 * @description Human data object
 */
let human = {
  userName: '',
  height: {
    feet: 0.0,
    inches: 0.0,
  },
  weight: 0.0,
  diet: 'Herbavor',
};

/**
 * @description The dinosaur data in object format
 * @param {Object} dino A single dinosaur object containing facts
 * @returns An array with heightRatio, weightRatio and diet comparing dinosaurs with human input data
 */
let userInputValidated = Boolean(false);
function compareHumanWithDinosaur() {
  if (userInputValidated == true) {
    /**
     * @description comparison property for Dinosaur object constructor
     */
    (comparison = {
      heightRatio: dinos.map((dino) => {
        const heightRatio = dino.height / human.height.inches;
        if (heightRatio === 1) {
          return `You have the same height!`;
        } else if (heightRatio < 1) {
          return `The ${dino.species} is ${heightRatio.toFixed(
            1
          )} times taller then you!`;
        } else {
          return `The ${dino.species} is ${heightRatio.toFixed(
            1
          )} times bigger then you!`;
        }
      }),

      weightRatio: dinos.map((dino) => {
        const weightRatio = dino.weight / human.weight;
        if (weightRatio === 1) {
          return `You have the same weight!`;
        } else if (weightRatio < 1) {
          return `The ${dino.species} is ${weightRatio.toFixed(
            1
          )} times lighter then you!`;
        } else {
          return `The ${dino.species} is ${weightRatio.toFixed(
            1
          )} times heavier then you!`;
        }
      }),

      dietCompare: dinos.map((dino) => {
        if (dino.diet === human.diet) {
          return `You are both ${human.diet}`;
        } else {
          return `The Dino ist ${dino.diet}, and you are ${human.diet}`;
        }
      }),
    }),
      (Dinosaur.prototype = comparison);

    dinos.forEach(function (dino) {
      comparison = new Dinosaur({
        species: dino.species,
        weight: dino.weight,
        height: dino.height,
        diet: dino.diet,
        where: dino.where,
        when: dino.when,
        fact: '',
      });
    });
    generateTitle();
  }
}
/**
 * @description On button click form data will be checked in the function formValidator()
 *  @returns data from html input fields
 */
const button = document.getElementById('btn');
button.addEventListener(
  'click',
  (function humanInputData() {
    return function () {
      human.userName = document.getElementById('name').value;
      human.height.feet = document.getElementById('feet').value;
      human.height.inches = document.getElementById('inches').value;
      human.weight = document.getElementById('weight').value;
      human.diet = document.getElementById('diet').value;
      formValidator();
    };
  })()
);

/**
 * @description Function formValidator checks, if input fields are not empty and if not it's forward to next function compareHumanWithDinosaur()
 * @returns Validation message to user
 */
let validationMessage = document.getElementById('validation-message');
function formValidator() {
  switch (human != null) {
    case human.userName === '':
      validationMessage.innerHTML =
        'Please enter your name in the name input field';
      break;
    case human.height.feet <= 0:
      validationMessage.innerHTML =
        'Please enter your height in feet in the feet input field';
      break;
    case human.height.inch <= 0:
      validationMessage.innerHTML =
        'Please enter your height in inch in the inch input field';
      break;
    case human.weight <= 0:
      validationMessage.innerHTML =
        'Please enter your weight more than 0 lbs in the weight input field';
      break;
    default:
      validationMessage.innerHTML = '';
      userInputValidated = Boolean(true);
      compareHumanWithDinosaur();
  }
  return validationMessage;
}

/**
 * @description Generate tiles with randomly mixed facts for each tile in Array (except human and pigeon tile), human is in the center and pigeon at the end
 * @param {number} max - number is dinos array length
 * @returns validation message to user
 */

let mixedTiles = [];
function generateTitle() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const dinoTiles = dinos
    .filter((dino) => dino.species !== 'Pigeon')
    .map((dino, index) => {
      let dinoTile = new Dinosaur({
        species: dino.species,
        weight: dino.weight,
        height: dino.height,
        diet: dino.diet,
        where: dino.where,
        when: dino.when,
        fact: '',
      });

      switch (getRandomInt(7)) {
        case 0:
          dinoTile.fact = comparison.heightRatio[index];
          break;
        case 1:
          dinoTile.fact = comparison.weightRatio[index];
          break;
        case 2:
          dinoTile.fact = comparison.dietCompare[index];
          break;
        case 3:
          dinoTile.fact = dino.fact;
          break;
        case 4:
          dinoTile.fact = `The Dinosaur lived in ${dino.where}.`;
          break;
        case 5:
          dinoTile.fact = `The Dinosaur lived in the time of ${dino.when}.`;
          break;
        case 6:
          dinoTile.fact = `The Dinosaur is ${dino.diet}.`;
          break;
        default:
          break;
      }
      return dinoTile;
    });

  const [firstKey, firstValue] = Object.entries(human)[0];
  const user = {};
  user[firstKey] = firstValue;
  const dinoTilesArray = Object.values(dinoTiles);
  const mixedArray = [
    ...dinoTilesArray.slice(0, 4),
    user,
    ...dinoTilesArray.slice(4, 7),
    dinos[7],
    ...dinoTilesArray.slice(7),
  ];
  mixedTiles = Object.fromEntries(mixedArray.entries());

  addTilesToDOM();
}

/**
 * @description get id name from DOM and add tiles with facts and pictures in div/img/p containers/ html elements to th DOM
 */
function addTilesToDOM() {
  const grid = document.getElementById('grid');

  if (!Array.isArray(mixedTiles)) {
    mixedTiles = Object.values(mixedTiles);
  }

  mixedTiles.forEach((tile) => {
    const div = document.createElement('div');
    div.className = 'grid-item';

    const h3 = document.createElement('h3');
    {
      tile.species
        ? (h3.textContent = tile.species)
        : (h3.textContent = tile.userName);
    }

    div.appendChild(h3);

    const img = document.createElement('img');
    {
      tile.species
        ? ((img.src = `images/${tile.species.toLowerCase()}.png`),
          (img.alt = `image with ${tile.species}`))
        : ((img.src = `images/human.png`), (img.alt = `image with human`));
    }

    div.appendChild(img);

    const p = document.createElement('p');
    p.textContent = tile.fact;
    div.appendChild(p);

    grid.appendChild(div);
    disAppearForm('none');
  });
}
/**
 * @description get id name from DOM and on button click, html form disappear
 * @param displayStatus - its the .style.display status 'none' or 'block'
 */
function disAppearForm(displayStatus) {
  const formContainer = document.getElementById('dino-compare');
  formContainer.style.display = displayStatus;
  appearButton();
}

/**
 * @description display the "Go back to form" button in der main container. On button click dinosaurs grid (get empty) and button disappears
 */
function appearButton() {
  const buttonAppearForm = document.getElementById('go-to-form');
  buttonAppearForm.style.display = 'block';
  buttonAppearForm.addEventListener('click', () => {
    disAppearForm('block') &
      (document.getElementById('grid').innerHTML = '') &
      (buttonAppearForm.style.display = 'none');
  });
}
