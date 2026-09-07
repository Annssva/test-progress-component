function createProgress(element, value = 0) {
    element.innerHTML = `
        <svg class="progress__svg" viewBox="0 0 100 100">
            <circle
                class="progress__circle progress__circle--background"
                cx="50"
                cy="50"
                r="45"
            />

            <circle
                class="progress__circle progress__circle--value"
                cx="50"
                cy="50"
                r="45"
            />
        </svg>
    `;

    const circle = element.querySelector('.progress__circle--value');
    const length = 2 * Math.PI * 45;

    circle.style.strokeDasharray = length;
    circle.style.transform = 'rotate(-90deg)';
    circle.style.transformOrigin = '50% 50%';

    function setValue(value) {
        if (!Number.isFinite(value) || value < 0 || value > 100) {
            return;
        }

        circle.style.strokeDashoffset =
            length - (length * value) / 100;
    }

    function setAnimate(isAnimated) {
        element.classList.toggle('progress--animated', isAnimated);
    }

    function setHidden(isHidden) {
        element.classList.toggle('progress--hidden', isHidden);
    }

    setValue(value);

    return {
        setValue,
        setAnimate,
        setHidden
    };
}