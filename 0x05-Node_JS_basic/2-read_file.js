const fs = require("node:fs");
async function countStudents(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log(data.slice);
    
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
