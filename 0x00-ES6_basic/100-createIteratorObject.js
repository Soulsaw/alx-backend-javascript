export default function createIteratorObject(report) {
  function* employeeIterator() {
    // eslint-disable-next-line guard-for-in
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}
