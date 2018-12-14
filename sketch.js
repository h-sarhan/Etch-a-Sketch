let container = document.querySelector('.container');
function newGrid(g){
    
for(let i = 0; i <= g;i++ ){
    for(let j = 0; j <= g; j++){
        let temp = document.createElement('div');
        temp.setAttribute('class','grid');
        temp.textContent="1";
        container.appendChild(temp);
    }

}}
newGrid(16);
updateGrid();
function updateGrid(){
let grids = document.querySelectorAll('.grid');

for(let n = 0; n<grids.length;n++){
    grids[n].addEventListener('mouseover',() => {grids[n].style.backgroundColor= "blue"} );
}
}
let btn = document.querySelector("button");
function eraseNprompt(){
    removeGrid();

    let gridNum = prompt('How many pixels do you want on each side?');
    newGrid(gridNum);
    updateGrid();
    document.querySelector('.container').style.gridTemplateColumns = 'repeat(' + gridNum +', 20px)';
}
btn.addEventListener('click',eraseNprompt);

function removeGrid(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
}	}