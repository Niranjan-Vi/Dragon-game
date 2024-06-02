// variable declaration
pikachu_audio = new Audio('charSound.mpeg');
pi_sound = true;

gameOverSound = new Audio('gameOverSound.mpeg');
g_o_s = true;

gtaSound = new Audio('gtaSound.mpeg');
gtaS=true;

state=true;
score=0;
cross=true;
//functionss
function overSound() {
    if (g_o_s) {
        gameOverSound.play();
    }
}



document.onkeydown = function key(e) {
  //  console.log("pressed ", e.keyCode);

    if (e.keyCode == 38 || e.keyCode == 32) {
        if (pi_sound) {
            pikachu_audio.play();

        }

      //  console.log("jump pikachu")
        pikachu = document.querySelector('.pikachu');
        pikachu.classList.add('jump','jump1');
        setTimeout(() => {
            pikachu.classList.remove('jump','jump1');
        }, 600);
    }
    if (e.keyCode == 39) {
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = pikachuX + 112 + "px";
    }
    if (e.keyCode == 37) {
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = (pikachuX - 112) + "px";
    }
    if (e.keyCode == 113) {
        sound_btn = document.querySelector('.sound_btn');
        sound_btn.classList.remove('fa-volume-high');
        sound_btn.classList.add('fa-volume-xmark');
        pi_sound = false;
        g_o_s = false;

    }
    if (e.keyCode == 114) {
        pi_sound = true;
        sound_btn = document.querySelector('.sound_btn');
        sound_btn.classList.add('fa-volume-high');
        sound_btn.classList.remove('fa-volume-xmark');
        g_o_s = true;
    }
        setInterval(() => {
            if(gtaS){
            gtaSound.play();
            }
            else{
                gtaSound.pause();
            }
        }, 10);
            
        
}



setInterval(() => {
    pikachu = document.querySelector('.pikachu');
    gameOver = document.querySelector('game-over');
    dino = document.querySelector('.dino');

    pi_x = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
    pi_y = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('top'));

    di_x = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    di_y = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    offSetX = Math.abs(pi_x - di_x);
    offSetY = Math.abs(pi_y - di_y);

    //console.log(offSetX,offSetY);

    if (offSetX < 110 && offSetY < 52) {
        dino.classList.remove('dino1');
        gtaS=false;
        overSound();
        gtaS=false;
        document.querySelector('.g_o').textContent="Game Over...!!🫤 press F5 to restart the game";

    }
    else if (offSetX < 135 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            dino1 = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            newDur = dino1 - 0.1;
            dino.style.animationDuration = newDur + 's';
          //  console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);
function updateScore(score) {
    document.querySelector('.score').textContent= "Your Score is: " + score;
}


    

function sound() {
    document.querySelector('.sound_btn' ).addEventListener('click',function(){
        if(state){
            gtaS=true;
            pi_sound = true;
            sound_btn = document.querySelector('.sound_btn');
            sound_btn.classList.add('fa-volume-high');
            sound_btn.classList.remove('fa-volume-xmark');
            g_o_s = true;
            state=false;
        }
        else{
        sound_btn = document.querySelector('.sound_btn');
        sound_btn.classList.remove('fa-volume-high');
        sound_btn.classList.add('fa-volume-xmark');
        pi_sound = false;
        gtaS=false;
        g_o_s = false;
        state=true;
        }
    }); 

}


    
function up() {
    document.querySelector('#up-arrow' ).addEventListener('click',function(){
        if (pi_sound) {
            pikachu_audio.play();
        gtaSound.play();


        }
       // console.log("jump pikachu")
        pikachu = document.querySelector('.pikachu');
        pikachu.classList.add('jump','jump1');
        setTimeout(() => {
            pikachu.classList.remove('jump','jump1');
        }, 600);
        
    }); 

}
function left() {
    document.querySelector('#left-arrow').addEventListener('click',function(){
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = pikachuX - 112 + "px";
    });
    
}
function right() {
    document.querySelector('#right-arrow').addEventListener('click',function(){
        pikachu = document.querySelector('.pikachu');
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'));
        pikachu.style.left = pikachuX + 112 + "px";
    });
    
}