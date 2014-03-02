
rsync-ignore
============================
It helps [rsync](http://linux.die.net/man/1/rsync) to parse a `.rsyncignore` file for a project like
other `.gitignore` and `.npmignore`.

### Installation
```sh
$ npm install -g rsync-ignore
```

### Usage
Before run your `rsync` command, you need define a `.rsyncignore` file like [example](./.rsyncignore),
then runs below command:
```sh
$ rsync2 [source] [dest]
```

### License
MIT