'use strict'

let students = [

	{
		name: "1st student",
		adress: "My adress",
		class: "abrakadabra",
		id: 1
	},
	{
		name: "2nd student",
		adress: "Her adress",
		class: "Pencil",
		id: 2
	},
	{
		name: "3rd student",
		adress: "His adress",
		class: "Notebook",
		id: 3
	}
];

module.exports.getStudents = function getStudents(req, res, next) {
  res.send({
    message: students
  });
};

module.exports.postStudents = function postStudents(req, res, next) {
  res.send({
    message: req.body
  });
};
