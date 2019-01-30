'use strict'

var varcoursescourseIdController = require('./coursescourseIdControllerService');

module.exports.getCourseId = function getCourseId(req, res, next) {
  varcoursescourseIdController.getCourseId(req.swagger.params, res, next);
};

module.exports.funccoursescourseIdPARAMETERS = function funccoursescourseIdPARAMETERS(req, res, next) {
  varcoursescourseIdController.funccoursescourseIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.deleteCourseId = function deleteCourseId(req, res, next) {
  varcoursescourseIdController.deleteCourseId(req.swagger.params, res, next);
};

module.exports.updateCourseId = function updateCourseId(req, res, next) {
  varcoursescourseIdController.updateCourseId(req.swagger.params, res, next);
};