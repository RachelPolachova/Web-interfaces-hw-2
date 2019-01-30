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

module.exports.deleteStudenFromCoursetId = function deleteStudenFromCoursetId(req, res, next) {

	const courseId = req.courseId.value
	const studentId = req.studentId.value

	if (courseExists(courseId)) {
		if (studentExistsInCourse(courseId, studentId)) {

			const courseIndex = getCourseIndex(courseId)

			let filtered = grades[courseIndex].students.filter(function (student) {
				return student.studentId != studentId
			})

			grades[courseIndex].students = filtered

			res.send({
				message: "student deleted."
			})

		} else {
			res.send({
				message: "Student doesn't exist in this course."
			})
		}
	} else {
		res.send({
			message: "Course doesn't exist."
		});
	}

};

module.exports.funcgradescourseIdstudentIdPARAMETERS = function funcgradescourseIdstudentIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradescourseIdstudentIdPARAMETERS'
  });
};

module.exports.getStudenfromCoursetId = function getStudenfromCoursetId(req, res, next) {

	const courseId = req.courseId.value
	const studentId = req.studentId.value

	if (courseExists(courseId)) {
		if (studentExistsInCourse(courseId, studentId)) {
			res.send({
				message: grades[getCourseIndex(courseId)].students[getStudentIndex(courseId,studentId)]
			})
		} else {
			res.send({
				message: "Student doesn't exist in this course."
			})
		}
	} else {
		res.send({
			message: "Course doesn't exist."
		});
	}


};

function courseExists(id) {
	for (let i in grades) {
		if (grades[i].courseId == id) {
			return true
		}
	}
	return false
}

function studentExistsInCourse(courseId, studentId) {

	let index = getCourseIndex(courseId)
	for (let i in grades[index].students) {
		if (grades[index].students[i].studentId == studentId) {
			return true
		}
	}
	return false
}

function getStudentIndex(courseId, studentId) {
	let index = getCourseIndex(courseId)
	for (let i in grades[index].students) {
		if (grades[index].students[i].studentId == studentId) {
			return i
		}
	}
}

function getCourseIndex(id) {
	for (let i in grades) {
		if (grades[i].courseId == id) {
			return i
		}
	}
}
