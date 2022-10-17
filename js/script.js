// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Prendo il bottone play
const btnPlay = document.getElementById('play');

// Funzione play
function play() {
    console.log('Inizio gioco...')
    const NUM_BOMB = 16;
    const bombsPosition = [];
    const displayNoneH2 = document.querySelector('h2');
    displayNoneH2.className = 'd-none';

    let numCell;
    const fieldGame = document.getElementById('field-game');
    fieldGame.innerHTML = '';
    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;
    switch (level) {
        case 'amator':
        default: numCell = 100;
            break;
        case 'hardcore': numCell = 81;
            break;
        case 'pro': numCell = 49;
            break;
    };

    // Generatore bombe
    while (bombsPosition.length < NUM_BOMB) {
        const bomb = randomNumber(1, numCell);
        if (!bombsPosition.includes(bomb)) {
            bombsPosition.push(bomb);
        }
    };
    console.log(bombsPosition)
    // bombsPosition.style.backgroundColor = "red";
    // bombsPosition.appendChild(cell);

    // Funzione che genera la cella singola
    function drawCell(num) {
        const cellPerSide = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100% / ${cellPerSide})`;
        cell.style.heigth = `calc(100% / ${cellPerSide})`;
        cell.innerHTML = `<span>${num}</span>`;

        // Al click diventano verdi
        cell.addEventListener('click', function () {
            this.classList.add('green');
        })
        return cell;
    };

    // funzione che genera il campo di gioco
    function drawGrid() {
        const grid = document.createElement('div');
        grid.className = 'grid';
        for (let i = 1; i <= numCell; i++) {
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        fieldGame.appendChild(grid);
    }
    // chiamare la funzione
    drawGrid();
};
// Attacco EventListener al bottone play
btnPlay.addEventListener('click', play);