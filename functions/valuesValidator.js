function valuesValidator(min, max, atribute) {
    while (atribute < min || atribute > max) {
        if (atribute < min || atribute > max) {
            atribute = prompt(`Introduces the atribute correctly`);
        }
    }
}

export {valuesValidator};