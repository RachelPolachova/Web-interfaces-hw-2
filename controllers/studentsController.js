'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsController.getStudents(req.swagger.params, res, next);
};

module.exports.postStudents = function postStudents(req, res, next) {
  varstudentsController.postStudents(req.swagger.params, res, next);
};