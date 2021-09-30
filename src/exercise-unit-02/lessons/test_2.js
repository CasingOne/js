/*
const stringReverter = (string) => {

    let stringText = `${string}`;
    let length = stringText.length - 1;
    result = '';

    while (length >= 0) {

        if (stringText[length] === '-') {
            result = stringText[length] + result;
        }
        else if (stringText[length] === '0' ) {
            result = result + '';
        } else {
            result = result + stringText[length];
        }
        length = length - 1;


    }

    return result;
}
*/




const stringReverter = (string) => {

    let length = string.length - 1;
    let result = '';

    while (length >= 0) {

        if (string[length] === '-') {
            result = string[length] + result;
        }
        else if (string[length] === '0' ) {
            result = result + '';
        } else {
            result = result + string[length];
        }
        length = length - 1;

    }

    return result;
}

console.log (stringReverter('-ABC-000-'));