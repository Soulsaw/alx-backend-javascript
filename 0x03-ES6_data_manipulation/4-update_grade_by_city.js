export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents) || !Array.isArray(newGrades)) {
    return [];
  }
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((studentId) => studentId.studentId === student.id);
      if (foundGrade) {
        return { ...student, grade: foundGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
