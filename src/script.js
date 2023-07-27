const consoleOutput = document.querySelector('.output');
const input = document.querySelector('.input');

function displayOutput(text) {
  consoleOutput.innerHTML += `<div>${text}</div>`;
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function executeCommand(command) {
  if (command.toLowerCase() === 'calculatrice') {
    displayOutput('Bravo ! Vous avez trouvé l\'indice 2 :');
    displayOutput('Indice 2 : Allez à l\'endroit où les livres prennent leur envol.');
    displayOutput('Entrez votre réponse :');
  } else if (command.toLowerCase() === 'bibliotheque') {
    displayOutput('Félicitations ! Vous avez trouvé l\'indice 3 :');
    displayOutput('Indice 3 : Le trésor est caché sous un objet qui éclaire votre chemin la nuit.');
    displayOutput('Entrez votre réponse :');
  } else if (command.toLowerCase() === 'lampe') {
    displayOutput('Retiens que, tout se trouve aux pieds, ça te sera utile.');
    displayOutput('Aller a la deuxieme etape 1 oui ou 2 non :');
    displayOutput('1. Oui');
    displayOutput('2. Non');
  } else if (command === '1') {
    displayOutput('Trouvez ce qui se trouve cach\é dans l\'ombre.');
    window.open('https://codepen.io/h-lautre/full/QWZNxoO', '_blank');
  } else if (command === '2') {
    displayOutput('Vous passez à côté du trésor.');
  } else {
    displayOutput('Choix invalide. Veuillez choisir une option valide.');
  }
}

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';
    displayOutput(`> ${command}`);
    executeCommand(command);
  }
});

displayOutput('Bienvenue dans la Chasse Au Tresor !');
displayOutput('Vous devez suivre les indices pour gagner des Satoshi en jouant');
displayOutput('Vous êtes a la premiere etape. Voici votre premier indice :');
displayOutput('Qu\'est-ce qui a des racines sans jamais pousser de feuilles ?');
displayOutput('Entrez votre réponse :');
