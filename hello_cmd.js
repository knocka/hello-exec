
// http://nodejs.org/api.html#_child_processes

module.exports = { foo1: foo1, foo2: foo2 }

function foo1() {
	//var sys = require('util')
	var fs = require('fs');
 
	var exec = require('child_process').exec;
	var child;
	var content_stdout;

	// executes `pwd`
	child = exec("pwd", function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		content_stdout = stdout;
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
	//console.log("DEBUG>" +content_stdout);
	return "content_stdout";
}

export function foo2() {
	var content_stdout;
	// or more concisely
	//var sys = require('util')
	var fs = require('fs');
 
	var exec = require('child_process').exec;
	function puts(error, stdout, stderr) { 
		content_stdout = stdout;
		console.log(stdout);
	 }
	exec("ls -la", puts);
	//console.log("DEBUG>" +content_stdout);
	return "content_stdout";
}