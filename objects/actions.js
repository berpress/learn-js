const filename = '/path';
const extension = 'zip';
// eslint-disable-next-line object-shorthand
const info = { filename: filename, extension: extension };

// or you can use
const infoTwo = { filename, extension };

// eslint-disable-next-line no-console
console.log(info);
// eslint-disable-next-line no-console
console.log(infoTwo);
