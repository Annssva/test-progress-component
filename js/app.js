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
    const value = Number(valueInput.value);

    if (!Number.isFinite(value)) {
        return;
    }

    const normalizedValue = Math.min(100, Math.max(0, value));

    valueInput.value = normalizedValue;
    progress.setValue(normalizedValue);
});


animateInput.addEventListener('change', () => {
    progress.setAnimate(animateInput.checked);
});

hideInput.addEventListener('change', () => {
    progress.setHidden(hideInput.checked);
});