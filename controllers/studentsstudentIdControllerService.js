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

module.exports.getStudentId = function getStudentId(req, res, next) {

	const studentId = req.studentId.value
	if (studentExists(studentId)) {
		const index = getIndex(studentId)
		res.send({
			message: students[index]
		})
	} else {
		res.send({
			message: "Student doesn't exist."
		})
	}

};

module.exports.funcstudentsstudentIdPARAMETERS = function funcstudentsstudentIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsstudentIdPARAMETERS'
  });
};

module.exports.deleteStudentId = function deleteStudentId(req, res, next) {

	const studentId = req.studentId.value
	if (studentExists(studentId)) {
		let filtered = students.filter(function (student) {
			return student.id != studentId;
		});
		students = filtered
		res.send({
			message: "Student deleted."
		})
	} else {
		res.send({
			message: "Student doesn't exist."
		})
	}
};

module.exports.updateStudentId = function updateStudentId(req, res, next) {
  res.send({
	  message: req.body.name
  });
};

function studentExists(id) {
	for (let i in students) {
		if (students[i].id == id) {
			return true
		}
	}
	return false
}

function getIndex(id) {
	for (let i in students) {
		if (students[i].id == id) {
			return i;
		}
	}
}
