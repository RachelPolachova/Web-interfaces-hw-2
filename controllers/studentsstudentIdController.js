'use strict'

var varstudentsstudentIdController = require('./studentsstudentIdControllerService');

module.exports.getStudentId = function getStudentId(req, res, next) {
  varstudentsstudentIdController.getStudentId(req.swagger.params, res, next);
};

module.exports.funcstudentsstudentIdPARAMETERS = function funcstudentsstudentIdPARAMETERS(req, res, next) {
  varstudentsstudentIdController.funcstudentsstudentIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.deleteStudentId = function deleteStudentId(req, res, next) {
  varstudentsstudentIdController.deleteStudentId(req.swagger.params, res, next);
};

module.exports.updateStudentId = function updateStudentId(req, res, next) {
  varstudentsstudentIdController.updateStudentId(req.swagger.params, res, next);
};