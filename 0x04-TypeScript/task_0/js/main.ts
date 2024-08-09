interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const user1: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 24,
  location: "Av Bassawara",
  };

const user2: Student = {
  firstName: "Mike",
  lastName: "Arison",
  age: 20,
  location: "Av Kwame Kurma",
  };

const studentsList: Student[] = [user1, user2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable(studentsList);
