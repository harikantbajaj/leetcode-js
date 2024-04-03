function debounce(fn, t) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, t);
    };
}

// Example usage:
const calls1 = [
    { "t": 50, inputs: [1] },
    { "t": 75, inputs: [2] }
];

const calls2 = [
    { "t": 50, inputs: [1] },
    { "t": 100, inputs: [2] }
];

const calls3 = [
    { "t": 50, inputs: [1, 2] },
    { "t": 300, inputs: [3, 4] },
    { "t": 300, inputs: [5, 6] }
];

const debounced1 = debounce(log, 50);
const debounced2 = debounce(log, 20);
const debounced3 = debounce(log, 150);

function log(...inputs) {
    console.log([Date.now(), inputs]);
}

calls1.forEach(call => {
    setTimeout(() => debounced1(...call.inputs), call.t);
});

calls2.forEach(call => {
    setTimeout(() => debounced2(...call.inputs), call.t);
});

calls3.forEach(call => {
    setTimeout(() => debounced3(...call.inputs), call.t);
});
