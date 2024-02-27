/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type PhoneBook = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt?: Date | object | string;
    updateAt?: Date | object | string;
  };
};

const page1: PhoneBook = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PhoneBook = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
