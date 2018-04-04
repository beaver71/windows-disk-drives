'use strict';

const childProcess = require('child_process');
const tableParser = require('table-parser');

const command = 'wmic logicaldisk get volumeserialnumber,caption,volumename,description,size';

function getDisks(raw) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (err, stdout) => {
		if (err) {
			return reject(err);
		}

		if (raw) {
			resolve(stdout);
		} else {
			var disks = tableParser.parse(stdout);
			try {
				for (var i in disks) {
					for (var k in disks[i]) {
						disks[i][k] = disks[i][k].join(' ');
					}
				}				
			} catch(e) {
				
			}
			resolve(disks);
		}
    });
  });
}

module.exports.getDisks = getDisks;

