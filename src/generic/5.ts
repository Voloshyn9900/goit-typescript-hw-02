/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, V> {
  key: T;
  value: V;
}

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: "age",
  value: 25,
};
const numberKeyValuePair: KeyValuePair<number, boolean> = {
  key: 42,
  value: true,
};
console.log(stringKeyValuePair);
console.log(numberKeyValuePair);

export {  };