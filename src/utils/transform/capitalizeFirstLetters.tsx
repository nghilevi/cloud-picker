// inspired from https://flexiple.com/javascript-capitalize-first-letter/
const capitalizeFirstLetters = (str: string): string => {
    if (typeof str === 'string') {
        return str.split(' ').map((currentVal) => { //loop through each element of the array and capitalize the first letter.
            return currentVal.charAt(0).toUpperCase() + currentVal.slice(1);
        }).join(' ')
    } else {
        return ''
    }

}

export { capitalizeFirstLetters }