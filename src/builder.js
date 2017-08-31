var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './builds', // use the glob format
    platforms: ['osx64'],
    version: '0.14.6',
    name: 'nw-build-test'
});

//Log stuff you want

nw.on('log',  console.log);

console.log(nw);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});