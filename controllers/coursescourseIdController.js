'use strict'

const courses = [
	{
		"name": "ARI",
		"description": "Automatization and IT",
		"id": 1
	},
	{
		"name": "EI",
		"description": "Economic informatic",
		"id": 2
	},
	{
		"name": "Jedi",
		"description": "May the force be with you.",
		"id": 3
	}
]

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