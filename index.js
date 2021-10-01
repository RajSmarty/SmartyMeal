console.log('Click-Event Testing...')

const clickevent = document.getElementById('btn-post');

clickevent.addEventListener('click', func1)

function func1() {

    console.log("You've clicked the link!");
    // clickevent.style.backgroundColor = 'rgb(66 193 117)';
    
}