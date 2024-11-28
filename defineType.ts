interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Ankit",
  age: 18,
};

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newUser: User = new UserAccount("Ankit", 18);

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  return {
    name: "Manish",
    age: 17,
  };
}
