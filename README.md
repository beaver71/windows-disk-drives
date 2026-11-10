# windows-disk-drives

Get a list of available disk drives on Windows OS.

[![AppVeyor](https://ci.appveyor.com/api/projects/status/b707ardgrdf0lwa3?svg=true)](https://ci.appveyor.com/project/beaver71/windows-disk-drives)

## Install

```
$ npm i -S windows-disk-drives
```

## Usage

Get a list of all available disk drives:

**JSON array**

```js
dsk.getDisks().then((disks) => {
	console.log(disks);
}).catch((err) => {
	console.error(err);
});
```

Output:

```js
[
    {
        "SystemName":  "SMART",
        "Caption":  "C:",
        "Description":  "Local Fixed Disk",
        "VolumeName":  "data",
        "VolumeSerialNumber":  "AF3AE71A",
        "Size":  1000186310656,
        "DriveType":  3,
        "FileSystem":  "NTFS"
    },
    {
        "SystemName":  "SMART",
        "Caption":  "D:",
        "Description":  "Removable Disk",
        "VolumeName":  "KING_GOLD",
        "VolumeSerialNumber":  "13501604",
        "Size":  7740706816,
        "DriveType":  2,
        "FileSystem":  "FAT32"
    }
]
```





## License

This software is released under the terms of the MIT license.