const Progress = (() => {
    function createProgress(element, value = 0) {
        element.innerHTML = `
            <svg
                class="progress-component__svg"
                viewBox="0 0 100 100"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0"
                aria-label="Progress"
            >
                <circle
                    class="progress-component__circle progress-component__circle--background"
                    cx="50"
                    cy="50"
                    r="45"
                />

                <circle
                    class="progress-component__circle progress-component__circle--value"
                    cx="50"
                    cy="50"
                    r="45"
                />
            </svg>
        `;

        const circle = element.querySelector('.progress-component__circle--value');
        const length = 2 * Math.PI * 45;

        circle.style.strokeDasharray = length;
        circle.style.strokeDashoffset = length;
        circle.style.transform = 'rotate(-90deg)';
        circle.style.transformOrigin = '50% 50%';

        let currentValue = 0;
        let isAnimated = false;
        let isHidden = false;
        const svg = element.querySelector('.progress-component__svg');

        function setValue(value) {
            if (!Number.isFinite(value) || value < 0 || value > 100) {
                return;
            }

            currentValue = value;

            circle.style.strokeDashoffset =
                length - (length * value) / 100;

            svg.setAttribute('aria-valuenow', value);
        }

        function getValue() {
            return currentValue;
        }

        function setAnimate(value) {
            isAnimated = value;
            element.classList.toggle('progress-component--animated', value);
        }

        function getAnimate() {
            return isAnimated;
        }

        function setHidden(value) {
            isHidden = value;
            element.classList.toggle('progress-component--hidden', value);
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

    return {
        create: createProgress
    };
})();