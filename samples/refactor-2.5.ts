export function refactoringFunctions() {
    for (let i = 0; i < 10; i++) {
        // select the inner code and use CMD + . to refactor
        const message = `this is line ${ i }`;
        console.log(message);
    }
}

export default class Class {
    example() {
        for (let i = 0; i < 10; i++) {
            // select the inner code and use CMD + . to refactor
            const message = `this is line ${ i }`;
            console.log(message);
        }
    }
}