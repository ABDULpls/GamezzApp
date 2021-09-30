export const normalizeNumber = number => {
    let sing = '';

    while(number > 1000) {
        number = number / 1000;
        sing += 'k';
    }

    return Math.round(number * 10) / 10 + sing;
}

export const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function toHumanTime(timeInSeconds) {
    let minutes = '00';
    let seconds = timeInSeconds;

    if (timeInSeconds >= 60) {
        minutes = Math.floor(timeInSeconds / 60);
        seconds = timeInSeconds % 60;

        minutes = (minutes < 10) ? '0' + minutes : minutes;
    }

    seconds = (seconds < 10) ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
}