/**
 * Oh my type! Tiny and robust type checker.
 * Copyright (c) 2018 Anton Neporotovskiy
 *
 * Returns correct type of received argument
 * @param {any} argument Received argument with unrecognized type
 */
function OhMyType(argument) {
    var result,
        typeOfPrototype = Object.prototype.toString.call(argument),
        type = typeOfPrototype.slice(8, -1);
    switch (type) {
        case 'Number': {
            result = Number.isNaN ? Number.isNaN(argument) : window.isNaN(argument);
            break;
        }
        default:
            result = type;
            break;
    }
    return result;
}
