const button1El = document.querySelector<HTMLButtonElement>('.js-button__1');
const button2El = document.querySelector<HTMLButtonElement>('.js-button__2');
const button3El = document.querySelector<HTMLButtonElement>('.js-button__3');
const button4El = document.querySelector<HTMLButtonElement>('.js-button__4');
const button5El = document.querySelector<HTMLButtonElement>('.js-button__5');
const button6El = document.querySelector<HTMLButtonElement>('.js-button__6');
const button7El = document.querySelector<HTMLButtonElement>('.js-button__7');

const box1El = document.querySelector<HTMLDivElement>('.js-box__1');
const box2El = document.querySelector<HTMLDivElement>('.js-box__2');
const box3El = document.querySelector<HTMLDivElement>('.js-box__3');
const box4El = document.querySelector<HTMLDivElement>('.js-box__4');
const box5El = document.querySelector<HTMLDivElement>('.js-box__5');
const box6El = document.querySelector<HTMLDivElement>('.js-box__6');
const boxAllEl = document.querySelectorAll<HTMLDivElement>('.js-box');

const bodyEl = document.querySelector<HTMLBodyElement>('body');

button1El.addEventListener('click', () => {
    box1El.style.backgroundColor = 'yellow';
})

button2El.addEventListener('click', () => {
    box2El.innerText = 'SUCCESS';
})

button3El.addEventListener('click', () => {
    box3El.classList.add('hidden');
})

button4El.addEventListener('click', () => {
    box4El.classList.toggle('hidden');
})

button5El.addEventListener('click', () => {
    const color = ['green', 'grey', 'orange', 'pink', 'purple'];
    box5El.style.backgroundColor = color[color.length * Math.random() | 0];
})



button6El.addEventListener('click', () => {
    let seconds = 1;
    const timer = setInterval(() => {
        box6El.innerText = (seconds++).toString();
        if (box6El.innerText === '10') {
            clearInterval(timer), seconds = 0;
        }
    }, 3000)
});

button7El.addEventListener('click', () => {
    boxAllEl.forEach((box: HTMLDivElement) => {
        box.style.backgroundColor = '#18D5E1';
        bodyEl.style.backgroundColor = '#000000';
    })
});


box1El.addEventListener('mouseenter', () => {
    box1El.style.backgroundColor = 'red';
})

box5El.addEventListener('mouseover', () => {
    let seconds = 1;
    const timer = setInterval(() => {
        box5El.innerText = (seconds++).toString();
        if (seconds === 11) {
            clearInterval(timer);
        }  
        box5El.onmouseout = () => {
            clearInterval(timer);
            box5El.innerText = '0';
        }
    }, 1000)
});

