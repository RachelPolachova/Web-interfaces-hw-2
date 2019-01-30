'use strict'

let grades = [
	{
		courseId: 1,
		students: [
			{
				studentId: 1,
				grade: 1
			},
			{
				studentId: 2,
				grade: 1
			}
		]
	},
	{
		courseId: 2,
		students: [
			{
				studentId: 1,
				grade: 3
			},
			{
				studentId: 9,
				grade: 5
			}
		]
	}
];

module.exports.getGrades = function getGrades(req, res, next) {
  res.send({
    message: grades
  });
};

module.exports.postGrades = function postGrades(req, res, next) {
  res.send({
    message: 'This is the mockup controller for postGrades'
  });
};
