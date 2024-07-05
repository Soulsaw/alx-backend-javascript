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
