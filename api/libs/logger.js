const color 		=  require('chalk')
const make_string 	= require('sprintf-js').sprintf

var logger;

module.exports = logger = (log) => {

	console.log(make_string("%s › %s", color.green("UnderNode"), color.bold(log)));
};