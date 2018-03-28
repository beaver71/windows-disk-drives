# windows-disk-drives

> Get a list of available disk drives on Windows OS.

[![AppVeyor](https://ci.appveyor.com/api/projects/status/b707ardgrdf0lwa3?svg=true)](https://ci.appveyor.com/project/mrmlnc/windows-drive-letters)
[![NPM version](https://img.shields.io/npm/v/windows-drive-letters.svg?style=flat-square)](https://www.npmjs.com/package/windows-drive-letters)
[![devDependency Status](https://img.shields.io/david/mrmlnc/windows-drive-letters.svg?style=flat-square)](https://david-dm.org/mrmlnc/windows-drive-letters#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mrmlnc/windows-drive-letters.svg?style=flat-square)](https://david-dm.org/mrmlnc/windows-drive-letters#info=devDependencies)

## Install

```
$ npm i -S windows-disk-drives
```

## Usage

### letters & lettersSync

Get a list of all available disk drives:

**JSON array**

```js
dsk.getDisks(false).then((disks) => {
	console.log(disks);
}).catch((err) => {
	console.error(err);
});
```

```JSON
[ { Node: 'SMARTPC',
    Caption: 'C:',
    Description: 'Local Fixed Disk',
    Size: '207086415872',
    VolumeName: '',
    VolumeSerialNumber: '745CF3C0' },
    ...
]
```

**RAW standard output (text)**

```js
dsk.getDisks(true).then((stdout) => {
	console.log(stdout);
}).catch((err) => {
	console.error(err);
});
```

```output
Node,Caption,Description,Size,VolumeName,VolumeSerialNumber
SMARTPC,C:,Local Fixed Disk,207086415872,,745CF3C0
SMARTPC,D:,Local Fixed Disk,48497684480,Local Disk,884B41B5
SMARTPC,E:,CD-ROM Disc,,,
SMARTPC,F:,Removable Disk,31406964736,KINGSTON,D509194D
```


## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/windows-drive-letters/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
