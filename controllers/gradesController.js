'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.getGrades = function getGrades(req, res, next) {
  vargradesController.getGrades(req.swagger.params, res, next);
};

module.exports.postGrades = function postGrades(req, res, next) {
  vargradesController.postGrades(req.swagger.params, res, next);
};