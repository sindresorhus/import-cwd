'use strict';
var reqFrom = require('req-from');

module.exports = function (moduleId) {
	return reqFrom('.', moduleId);
};
