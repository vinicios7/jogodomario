const mario = document.querySelector(".mario");
const pipe = document.querySelector('.pipe');
const restartButton = document.getElementById('restart-btn');

function checkCollision() {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
   
if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 102) {
        restartButton.style.display = 'block';
    }
}

const collisionCheckInterval = setInterval(checkCollision, 10);

restartButton.
restart
addEventListener('click', function() {
    location.reload();
});

const jump = () => {
	mario.classList.add("jump");
	setTimeout(() => {
		mario.classList.remove("jump");
	}, 500);
};

const loop = setInterval(() => {
	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window
		.getComputedStyle(mario)
		.bottom.replace("px", "");

	if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 102) {
		pipe.style.animation = "none";
		pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
		mario.style.bottom = `${marioPosition}px`;

        mario.src = '/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
	}
}, 10);

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        location.reload();
    }
});

document.addEventListener("keydown", jump);

