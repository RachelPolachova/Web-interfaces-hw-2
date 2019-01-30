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

module.exports.getCourses = function getCourses(req, res, next) {
  res.send({
    courses
  });
};

module.exports.postCourse = function postCourse(req, res, next) {

	// courses.push(req.body)

	res.send({
    message: req.body
  });
};
