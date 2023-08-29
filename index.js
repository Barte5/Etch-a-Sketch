let size;



size = 4;
function makeSquares () {
    for (let i = 0; i < size; i++) {
        const squares = document.createElement('div')
        container.appendChild(squares);
        squares.style.cssText = 'border: red solid 3px; aspect-ratio: 1 / 1; flex: 1;';
    }
    
}











const btn = document.querySelector('#btn');
btn.onclick = () => makeSquares();



const container = document.querySelector('#container');
/*
const squares = document.createElement('div');
squares.classList.add('squares');
squares.textContent = 'This is the glorious text-content!';

container.appendChild(squares);
*/