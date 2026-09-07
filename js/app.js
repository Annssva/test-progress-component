const progress = createProgress(
    document.querySelector('#progress'),
    75
);

const valueInput = document.querySelector('#value-input');
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