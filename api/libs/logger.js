const color 		= require('chalk')
const make_string 	= require('sprintf-js').sprintf
const moment 		= require('moment')

var logger;

module.exports = logger = (log) => {

	console.log(make_string("%s › [%s] %s", color.green("UnderNode"), color.bold(moment().format()), color.bold(log)));
};