const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1).map((line) => line.split(','));
    const fieldCounts = {};
    const fieldLists = {};
    let totalStudents = 0;

    students.forEach(([firstName, , , field]) => {
      if (field && firstName) {
        totalStudents += 1;
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldLists[field] = [];
        }
        fieldCounts[field] += 1;
        fieldLists[field].push(firstName);
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${fieldLists[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
