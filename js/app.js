const initValue = 75;

const progress = ProgressComponent.create(
    document.querySelector('#progress'),
    initValue
);

const valueInput = document.querySelector('#value-input');
valueInput.value = initValue;

const animateInput = document.querySelector('#animate-input');
const hideInput = document.querySelector('#hide-input');

function clampToRange(value) {
    return Math.min(100, Math.max(0, value));
}

valueInput.addEventListener('input', () => {
    valueInput.value = valueInput.value.replace(/\D/g, '');

    const rawValue = valueInput.value;

    const numericValue = rawValue === '' ? 0 : Number(rawValue);

    progress.setValue(clampToRange(numericValue));
});

valueInput.addEventListener('blur', () => {
    const rawValue = valueInput.value;
    const numericValue = rawValue === '' ? 0 : Number(rawValue);
    const finalValue = clampToRange(numericValue);

    valueInput.value = finalValue;
    progress.setValue(finalValue);
});

valueInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        valueInput.blur();
    }
});

animateInput.addEventListener('change', () => {
    progress.setAnimate(animateInput.checked);
});

hideInput.addEventListener('change', () => {
    progress.setHidden(hideInput.checked);
});