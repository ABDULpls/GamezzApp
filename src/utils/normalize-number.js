export default function(number) {
    let sing = '';

    while(number > 1000) {
        number = number / 1000;
        sing += 'k';
    }

    return Math.round(number * 10) / 10 + sing;
}