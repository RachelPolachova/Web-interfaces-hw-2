'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.getCourses = function getCourses(req, res, next) {
  varcoursesController.getCourses(req.swagger.params, res, next);
};

module.exports.postCourse = function postCourse(req, res, next) {
  varcoursesController.postCourse(req.swagger.params, res, next);
};
