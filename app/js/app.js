document.addEventListener('DOMContentLoaded', () => {

    // Custom JS

    const directionsList = document.getElementsByClassName('direction__item');

    for (const direction of directionsList) {

        const previewTriangle = document.querySelector('.preview__triangle');

        direction.addEventListener('click', (e) => {
            for (const direction of directionsList) {
                direction.classList.remove('direction__item_active')
            }
            e.target.classList.add('direction__item_active');
            switch (e.target.classList[1]) {
                case 'direction__item_top':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_top');
                    previewTriangle.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_top');
                    break;
                case 'direction__item_top-right':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_top-right');
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_top-right');
                    break;
                case 'direction__item_right':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_right');
                    previewTriangle.style.clipPath = `polygon(0 0, 100% 50%, 0 100%)`;
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_right');
                    break;
                case 'direction__item_bottom-right':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_bottom-right');
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_bottom-right');
                    break;
                case 'direction__item_bottom':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_bottom');
                    previewTriangle.style.clipPath = `polygon(0 0, 100% 0, 50% 100%)`;
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_bottom');
                    break;
                case 'direction__item_bottom-left':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_bottom-left');
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_bottom-left');
                    break;
                case 'direction__item_left':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_left');
                    previewTriangle.style.clipPath = `polygon(100% 0, 100% 100%, 0 50%)`;
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_left');
                    break;
                case 'direction__item_left-top':
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_bottom-left-top');
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_bottom-left-top');
                    break;
                default:
                    previewTriangle.classList.remove(document.querySelector('.preview__triangle').classList[1]);
                    previewTriangle.classList.add('preview__triangle_direction_top');
                    previewTriangle.style.clipPath = "";
                    previewTriangle.style.transform = "";
                    document.querySelector('#rotate-range').value = 0;
                    document.querySelector('#rotate-field').value = 0;

                    if (document.querySelector('#equilateral').checked) {
                        setHeightForEquilateral(document.querySelector('#width-field').value);
                    }
                    calculateDimensions('preview__triangle_direction_top');
            }
        })
    }

    function calculateDimensions(direction) {
        const heightTriangle = document.querySelector('#height-filed').value;
        const widthTriangle = document.querySelector('#width-field').value;
        const sideLine = Math.sqrt(Math.pow(widthTriangle / 2, 2) + Math.pow(heightTriangle, 2));
        const alpha = 180 / Math.PI * Math.atan2(heightTriangle, widthTriangle / 2);
        const newWidth = (sideLine * Math.sin((180 - alpha - 45) * Math.PI / 180)).toFixed(1);

        const heightPosition = ((widthTriangle / 2 - heightTriangle) / Math.sqrt(2)).toFixed(1);

        switch (direction) {
            case 'preview__triangle_direction_top':
                applyDimensions(widthTriangle, heightTriangle);
                break;
            case 'preview__triangle_direction_top-right':
                if (document.querySelector('#isosceles').checked && widthTriangle > Math.round(Math.sqrt(2) * newWidth)) {
                    const position1 = (100 - (50 * heightPosition / newWidth)).toFixed(1);
                    const position2 = (50 * heightPosition / newWidth).toFixed(1);

                    applyDimensions((widthTriangle / Math.sqrt(2)).toFixed(1), (widthTriangle / Math.sqrt(2)).toFixed(1), `0 0, ${position1}% ${position2}%, 100% 100%`)

                } else {
                    const position1 = (100 - (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth)).toFixed(1);
                    const position2 = (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth).toFixed(1);

                    applyDimensions(newWidth, newWidth, `0 ${position1}%, 100% 0, ${position2}% 100%`)
                }
                break;
            case 'preview__triangle_direction_right':
                applyDimensions(widthTriangle, heightTriangle);
                break;
            case 'preview__triangle_direction_bottom-right':
                if (document.querySelector('#isosceles').checked && widthTriangle > Math.round(Math.sqrt(2) * newWidth)) {
                    const position1 = (100 - (50 * heightPosition / newWidth)).toFixed(1);
                    const position2 = (100 - (50 * heightPosition / newWidth)).toFixed(1);

                    applyDimensions((widthTriangle / Math.sqrt(2)).toFixed(1), (widthTriangle / Math.sqrt(2)).toFixed(1), `100% 0, ${position1}% ${position2}%, 0 100%`);
                } else {
                    const position1 = (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth).toFixed(1);
                    const position2 = (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth).toFixed(1);

                    applyDimensions(newWidth, newWidth, `${position1}% 0, 100% 100%, 0 ${position2}%`);
                }
                break;
            case 'preview__triangle_direction_bottom':
                applyDimensions(widthTriangle, heightTriangle);
                break;
            case 'preview__triangle_direction_bottom-left':
                if (document.querySelector('#isosceles').checked && widthTriangle > Math.round(Math.sqrt(2) * newWidth)) {
                    const position1 = ((50 * heightPosition / newWidth)).toFixed(1);
                    const position2 = (100 - (50 * heightPosition / newWidth)).toFixed(1);

                    applyDimensions((widthTriangle / Math.sqrt(2)).toFixed(1), (widthTriangle / Math.sqrt(2)).toFixed(1), `0 0, 100% 100%, ${position1}% ${position2}%`);
                } else {
                    const position1 = (100 - (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth)).toFixed(1);
                    const position2 = ((100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth)).toFixed(1);

                    applyDimensions(newWidth, newWidth, `${position1}% 0, 100% ${position2}%, 0 100%`);
                }
                break;
            case 'preview__triangle_direction_left':
                applyDimensions(widthTriangle, heightTriangle);
                break;
            case 'preview__triangle_direction_bottom-left-top':
                if (document.querySelector('#isosceles').checked && widthTriangle > Math.round(Math.sqrt(2) * newWidth)) {
                    const position1 = (50 * heightPosition / newWidth).toFixed(1);
                    const position2 = (50 * heightPosition / newWidth).toFixed(1);

                    applyDimensions((widthTriangle / Math.sqrt(2)).toFixed(1), (widthTriangle / Math.sqrt(2)).toFixed(1), `${position1}% ${position2}%, 100% 0, 0 100%`);
                } else {
                    const position1 = (100 - (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth)).toFixed(1);
                    const position2 = (100 - (100 * (widthTriangle * Math.sin(45 * Math.PI / 180)) / newWidth)).toFixed(1);

                    applyDimensions(newWidth, newWidth, `0 0, 100% ${position1}%, ${position2}% 100%`);
                }
                break;
            default:
                applyDimensions(widthTriangle, heightTriangle);
        }
        updateCode()
    }

    function applyDimensions(width, height, polygon) {
        const previewTriangle = document.querySelector(".preview__triangle");

        previewTriangle.style.width = `${width}px`;
        previewTriangle.style.height = `${height}px`;

        if (polygon !== undefined) previewTriangle.style.clipPath = `polygon(${polygon})`;
    }


    //<<Triangle type switch>>
    document.querySelector('#equilateral').addEventListener('change', (e) => {
        setHeightForEquilateral(document.querySelector('#width-field').value);
        calculateDimensions(document.querySelector('.preview__triangle').classList[1]);
    });


    //<<Set dimensions value on fields>>
    const rangeForDimension = document.getElementsByClassName('dimension-range');
    const fieldForDimension = document.getElementsByClassName('dimension-field');

    for (const range of rangeForDimension) {
        range.addEventListener('input', (e) => {
            e.target.nextElementSibling.value = e.target.value;
            if (document.querySelector('#equilateral').checked) {
                (e.target.id === 'width-range')
                    ? setHeightForEquilateral(e.target.value)
                    : setWidthForEquilateral(e.target.value)
            }
            calculateDimensions(document.querySelector('.preview__triangle').classList[1]);
        })
    }
    for (const field of fieldForDimension) {
        field.addEventListener('input', (e) => {
            e.target.previousElementSibling.value = e.target.value === "" ? 0 : e.target.value
            if (document.querySelector('#equilateral').checked) {
                (e.target.id === 'width-field')
                    ? setHeightForEquilateral(e.target.value)
                    : setWidthForEquilateral(e.target.value)
            }
            calculateDimensions(document.querySelector('.preview__triangle').classList[1]);

        });
        field.addEventListener('blur', (e) => {
            if (e.target.value === "") e.target.value = "0"
        });
    }


    function setHeightForEquilateral(value) // value = width = side line,
    {
        const direction = document.querySelector('.preview__triangle').classList[1];
        if (direction === 'preview__triangle_direction_right' || direction === 'preview__triangle_direction_left') {
            const height = value * 2 / Math.sqrt(3);
            document.querySelector('#height-range').value = height === 0 ? 0 : height.toFixed(1);
            document.querySelector('#height-filed').value = height === 0 ? 0 : height.toFixed(1);
        } else {
            const height = Math.sqrt(3) / 2 * value;
            document.querySelector('#height-range').value = height === 0 ? 0 : height.toFixed(1);
            document.querySelector('#height-filed').value = height === 0 ? 0 : height.toFixed(1);
        }
    }

    function setWidthForEquilateral(value)//value = height
    {
        const direction = document.querySelector('.preview__triangle').classList[1];
        if (direction === 'preview__triangle_direction_right' || direction === 'preview__triangle_direction_left') {
            const width = Math.sqrt(3) / 2 * value;
            document.querySelector('#width-range').value = width === 0 ? 0 : width.toFixed(1);
            document.querySelector('#width-field').value = width === 0 ? 0 : width.toFixed(1);
        } else {
            const width = value * 2 / Math.sqrt(3);
            document.querySelector('#width-range').value = width === 0 ? 0 : width.toFixed(1);
            document.querySelector('#width-field').value = width === 0 ? 0 : width.toFixed(1);
        }
    }

    //<<-/->>\\


    //<<Set color>>
    document.querySelector('#color').addEventListener('input', (e) => {
        document.querySelector('.setting__color-code').textContent = e.target.value;
        document.querySelector('.preview__triangle').style.backgroundColor = `${e.target.value}`;
        document.querySelector('.setting__color-code').textContent = document.querySelector('.preview__triangle').style.backgroundColor;
        updateCode()
    });
    //<<-/->>\\


    //<<Rotate>>
    document.querySelector('#rotate-range').addEventListener('input', (e) => {
        document.querySelector('#rotate-field').value = e.target.value;
        document.querySelector('.preview__triangle').style.transform = `rotate(${e.target.value}deg)`;
        updateCode()
    });
    document.querySelector('#rotate-field').addEventListener('input', (e) => {
        e.target.value <= 360
            ? document.querySelector('#rotate-range').value = e.target.value
            : e.target.value = 360;
        document.querySelector('.preview__triangle').style.transform = `rotate(${e.target.value}deg)`;
        updateCode()
    });
    //<<-/->>\\


    //<<Code output>>
    function updateCode() {
        const code = {
            'width': document.querySelector('.preview__triangle').style.width,
            'height': document.querySelector('.preview__triangle').style.height,
            'background-color': document.querySelector('.setting__color-code').innerHTML,
            'clip-path': document.querySelector('.preview__triangle').style.clipPath.replace(/px/g, ''),
            'transform': document.querySelector('#rotate-field').value === '0' ? null : `rotate(${document.querySelector('#rotate-field').value}deg)`
        };
        let string = "";
        for (let key in code) {
            if (code[key] !== null) string = string + key + ': ' + code[key] + ';<br/>'
        }
        document.querySelector('.preview__css-code').innerHTML = string;
    }

    document.querySelector('.button-copy-css').addEventListener('click', () => {
        const target = document.querySelector(".preview__css-code");
        const range = document.createRange();
        const select = window.getSelection();
        range.selectNode(target);
        select.removeAllRanges();
        select.addRange(range);
        document.execCommand('copy');
        select.removeAllRanges();
        document.querySelector('.tooltip-text').innerHTML = 'Copy completed'
    });
    document.querySelector('.button-copy-css').addEventListener('mouseout', () => {
        document.querySelector('.tooltip-text').innerHTML = 'Copy to clipboard'
    })
    //<<-/->>\\


});
