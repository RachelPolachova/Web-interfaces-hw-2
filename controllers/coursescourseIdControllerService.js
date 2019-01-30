'use strict'

let courses = [
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

module.exports.getCourseId = function getCourseId(req, res, next) {

	let courseId = req.courseId.value
	let index;

	if (courseExists(courseId)) {

		index = getIndex(courseId)
		res.send({
			message: courses[index]
		})

	} else {

		res.send({
			message: 'course doesnt exist.'
		})

	}

};

module.exports.funccoursescourseIdPARAMETERS = function funccoursescourseIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursescourseIdPARAMETERS'
  });
};

module.exports.deleteCourseId = function deleteCourseId(req, res, next) {

	let courseId = req.courseId.value

	if (courseExists(courseId)) {

		let filtered = courses.filter(function (course) {
			return course.id != courseId
		})

		courses = filtered;
		res.send('Course deleted.');

	} else {
		res.send("Course doesn't exist.");
	}

};

module.exports.updateCourseId = function updateCourseId(req, res, next) {
	console.log( req.value );
  res.send({
    message: "update course"
  });
};

function courseExists(id) {
	for (var i in courses) {
		if (courses[i].id == id) {
			return true;
		}
	}
	return false;
}

function getIndex(id) {
	for (var i in courses) {
		if (courses[i].id == id) {
			return i;
		}
	}
}
