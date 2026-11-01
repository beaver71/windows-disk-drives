'use strict';

const childProcess = require('child_process');

const command = 'Get-CimInstance Win32_LogicalDisk | Select-Object SystemName,Caption,Description,VolumeName,VolumeSerialNumber,Size,DriveType,FileSystem  | ConvertTo-Json';

function getDisks() {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, {'shell':'powershell.exe'}, (err, stdout) => {
		if (err) {
			return reject(err);
		}
		resolve(stdout);
    });
  });
}

module.exports.getDisks = getDisks;

