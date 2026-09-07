const initValue = 75;

const progress = createProgress(
    document.querySelector('#progress'),
    initValue
);

const valueInput = document.querySelector('#value-input');
valueInput.value = initValue;

const animateInput = document.querySelector('#animate-input');
const hideInput = document.querySelector('#hide-input');

valueInput.addEventListener('input', () => {
    progress.setValue(Number(valueInput.value));
});

animateInput.addEventListener('change', () => {
    progress.setAnimate(animateInput.checked);
});

hideInput.addEventListener('change', () => {
    progress.setHidden(hideInput.checked);
});