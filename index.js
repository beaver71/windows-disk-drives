'use strict';

const childProcess = require('child_process');
const csvjson = require('csvjson');

const command = 'wmic logicaldisk get volumeserialnumber,caption,volumename,description,size /format:csv';

function getDisks(raw) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (err, stdout) => {
		if (err) {
			return reject(err);
		}

		if (stdout.indexOf('\r\n') === 1) {
			// remove first line (only \r\n)
			stdout = stdout.split('\n').slice(1).join('\n');
		}

		if (raw) {
			resolve(stdout);
		} else {
			var options = {
				delimiter: ',', // optional
				quote: '' // optional
			};
			var disks = csvjson.toObject(stdout, options);
			resolve(disks);
		}
    });
  });
}

module.exports.getDisks = getDisks;

