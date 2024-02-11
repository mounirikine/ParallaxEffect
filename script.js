let text = document.getElementById('text');
let left = document.getElementById('left');
let right = document.getElementById('right');
let trr = document.getElementById('trr');
let trl = document.getElementById('trl');


// Use window.scrollY to get the vertical scroll position




// Use marginTop without parentheses to assign the function reference
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px'
    text.style.scale = value * 1.5 + 'px'
    left.style.left = value * 0.4 + 'px'
    right.style.left = value * -0.4 + 'px'
    trr.style.marginLeft = value * 1.2 + 'px'
    trl.style.marginLeft = value * -1.2 + 'px'

    if(value > 400){
        text.style.display = 'none'
    }
    if(value < 400){
        text.style.display = 'flex'
    }
    
});
