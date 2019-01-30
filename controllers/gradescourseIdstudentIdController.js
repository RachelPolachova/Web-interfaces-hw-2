'use strict'

var vargradescourseIdstudentIdController = require('./gradescourseIdstudentIdControllerService');

module.exports.deleteStudenFromCoursetId = function deleteStudenFromCoursetId(req, res, next) {
  vargradescourseIdstudentIdController.deleteStudenFromCoursetId(req.swagger.params, res, next);
};

module.exports.funcgradescourseIdstudentIdPARAMETERS = function funcgradescourseIdstudentIdPARAMETERS(req, res, next) {
  vargradescourseIdstudentIdController.funcgradescourseIdstudentIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudenfromCoursetId = function getStudenfromCoursetId(req, res, next) {
  vargradescourseIdstudentIdController.getStudenfromCoursetId(req.swagger.params, res, next);
};