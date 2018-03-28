'use strict';

const dsk = require('./index');

// raw
dsk.getDisks(true).then((disks) => {
	console.log('result RAW: ', disks);
}).catch((err) => {
	console.error(err);
});

// json
dsk.getDisks(false).then((disks) => {
	console.log('result JSON: ', disks);
}).catch((err) => {
	console.error(err);
});

