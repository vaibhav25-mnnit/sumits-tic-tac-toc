
// let music = new Audio("Music.mp3")
// let turn = new Audio("Music.mp3")
// let gameover = new Audio("Music.mp3")

//_-------------------------------------------------------------


const sound = new Audio('sound.wav')
const fail = new Audio('fail.mp3')
const success = new Audio('success.mp3')

let player = "X", count = 0;


const change_player = () => {
    return player == 'X' ? 'O' : 'X';
}


const b0 = document.getElementById('b0')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')

const cleb = document.getElementById('image')
const sad = document.getElementById('sad')
const info = document.getElementById('info')
const reset = document.getElementById('reset')



//main check function to check the winner 
function check_win() {

    const v = [b0.innerHTML, b1.innerHTML, b2.innerHTML, b3.innerHTML, b4.innerHTML, b5.innerHTML, b6.innerHTML, b7.innerHTML, b8.innerHTML];

    //checking 0-1-2
    if (v[0] === v[1] && v[1] !== '') {
        if (v[1] === v[2]) {
            return true;
        }
    }

    //checking 0 3 6
    if (v[0] === v[3] && v[3] !== '') {
        if (v[3] === v[6]) {
            return true;
        }
    }

    //checking 0 4 8
    if (v[0] === v[4] && v[4] !== '') {
        if (v[4] === v[8]) {
            return true;
        }
    }

    //checking 1 4 7
    if (v[1] === v[4] && v[4] !== '') {
        if (v[4] === v[7]) {
            return true;
        }
    }

    //checking 2 4 6
    if (v[2] === v[4] && v[4] !== '') {
        if (v[4] === v[6]) {
            return true;
        }
    }

    //checking 2 5 8
    if (v[2] === v[5] && v[5] !== '') {
        if (v[5] === v[8]) {
            return true;
        }
    }

    //checking 3 4 5
    if (v[3] === v[4] && v[4] !== '') {
        if (v[4] === v[5]) {
            return true;
        }
    }

    //checking 6 7 8
    if (v[6] === v[7] && v[7] !== '') {
        if (v[7] === v[8]) {
            return true;
        }
    }

    return false;
}


const boxes_array = [b0, b1, b2, b3, b4, b5, b6, b7, b8];

//adding event listener's  to all input button'ss
boxes_array.forEach(box => {
    box.addEventListener('click', () => {
        handle_click_button(box);
    })
})

//function to handle the click event for each input button 
const handle_click_button = (b) => {

    b.innerHTML = player;

    sound.play();
    b.disabled = 'true';
    b.style.cursor = 'not-allowed'

    if (check_win()) {
        console.log(player + ' is a winner')
        info.innerHTML = player + ' is a winner';
        cleb.style.visibility = 'visible'
        cleb.style.display = 'inline-block'
        freaze()
        success.play();
        return;
    }

    player = change_player();
    count++;
    if (count >= 9) {
        info.innerHTML = "Game tied";
        sad.style.visibility = 'visible'
        sad.style.display = 'inline-block'
        fail.play();
        return;
    }

    info.innerHTML = player + "'s turn"

}


//function is used to freaze the other inputs, if someone wins 
const freaze = () => {
    boxes_array.forEach(box => {
        if (box.innerHTML === '') {
            box.disabled = 'true';
            box.style.cursor = 'not-allowed'
        }
    })
}

reset.addEventListener('click', () => {
    location.reload();
})


