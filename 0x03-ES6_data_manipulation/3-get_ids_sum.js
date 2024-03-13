export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const iniValue = 0;
  return getListStudents.reduce((acc, cur) => acc + cur.id, iniValue);
}
