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
    circle.style.strokeDashoffset = length;
    circle.style.transform = 'rotate(-90deg)';
    circle.style.transformOrigin = '50% 50%';

    let currentValue = 0;
    let isAnimated = false;
    let isHidden = false;

    function setValue(value) {
        if (!Number.isFinite(value) || value < 0 || value > 100) {
            return;
        }

        currentValue = value;

        circle.style.strokeDashoffset =
            length - (length * value) / 100;
    }

    function getValue() {
        return currentValue;
    }

    function setAnimate(value) {
        isAnimated = value;
        element.classList.toggle('progress--animated', value);
    }

    function getAnimate() {
        return isAnimated;
    }

    function setHidden(value) {
        isHidden = value;
        element.classList.toggle('progress--hidden', value);
    }

    function getHidden() {
        return isHidden;
    }

    setValue(value);

    return {
        setValue,
        getValue,
        setAnimate,
        getAnimate,
        setHidden,
        getHidden
    };
}