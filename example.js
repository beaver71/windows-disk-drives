'use strict';

const dsk = require('./index');

dsk.getDisks(true).then((disks) => {
	console.log('result: ', disks);
}).catch((err) => {
	console.error(err);
});

