#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var util = require('util');
var exec = require('child_process').exec;
var argv = process.argv.slice(2);
var workdir = process.cwd();

fs.readFile(path.join(workdir, '.rsyncignore'), function(err, buffer) {
  if (err && err.code === 'ENOENT') {
    console.warn('.rsyncignore file required, or use `rsync` directly');
    return;
  }
  
  var rules = buffer.toString('utf8').split('\n')
    .filter(function(rule) {
      return rule.length > 0;
    })
    .map(function(rule) {
      return util.format('--exclude "%s"', rule);
    });

  var command = util.format('rsync -avz %s %s %s', rules.join(' '), argv[0], argv[1]);
  console.log('exec:', command);

  var execStream = exec(command);
  execStream.stdout.pipe(process.stdout);
  execStream.stderr.pipe(process.stderr);

});

