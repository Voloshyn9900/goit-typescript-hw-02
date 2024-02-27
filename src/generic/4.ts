/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface ParePage {
  title1: "Hello";
  title2: "Hello";
}

interface ParePage {
  title3: "Hello";
}

class Page extends Component<ParePage> {
  pageInfo() {
    console.log(this.props.title2);
  }
}

export {};
