// Создайте класс Car с свойствами mark(марка), model(модель) и year(год выпуска).Добавьте метод age(), который вычисляет возраст автомобиля(на основе текущего года).

class Car {
  constructor(mark, model, year) {
    this.mark = mark
    this.model = model
    this.year = year
  };
  age = () => new Date().getFullYear() - this.year;
}

const bmw = new Car("BMW", "m4", 2014)
console.log(bmw.age())


// Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.

class Person {
  static roles = ["student", "lecturer", "employer"];
  static createdPersons = [];
  #card = "";

  constructor(firstname, lastname, age = 18, balance, cardData, email) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.balance = balance
    this.#card = cardData
    this.email = email // new email
    Person.createdPersons.push(this)
  };
  get card() { return this.#card.split(" ")[0] };
  set card(value) { this.#card = value };
  static getTotalBalance = () => Person.createdPersons.reduce((acc, user) => acc + user.balance, 0);
  setRole(role) {
    if (Person.roles.includes(role)) {
      this.role = role
      return
    };
    throw new Error("Недопустимая роль");
  };
  incrementAge() { this.age++ };

  // new function email
  change_email(email) {
    if (email.includes(".") && email.includes("@")) {
      return this.email = email;
    }
    throw new Error("Wrong email!");
  };
}

const person = new Person("Jane", "Doe", 25, 123, "1950512882 464 1234", "email@mail.com");
console.log(person.change_email("email@mail.com"));

// Создайте класс Library, который хранит статический массив книг.Каждая книга – это объект с свойствами title и author.Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.

class Library {
  static books = [];
  static addBook(title, author) {
    this.books.push({ title, author })
  }
  static listBooks() {
    console.log(this.books);
  }
}
Library.addBook("Harry Potter", "JK Rowling");
Library.listBooks();


// Создайте класс Rectangle с приватными свойствами #width и #height.Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами.Добавьте метод area(), который возвращает площадь прямоугольника.
class Rectangle {
  #width = 0;
  #height = 0;
  set setWidth(num) {
    if (num > 0) this.#width = num;
  }
  set setHeight(num) {
    if (num > 0) this.#height = num;
  }
  area = () => this.#width * this.#height
};

const rectangle = new Rectangle();
rectangle.setWidth = 30;
rectangle.setHeight = 15;
console.log(rectangle.area());

// Создайте класс BankAccount с приватным свойством #balance.Реализуйте методы для депозита и снятия средств.Добавьте геттер для получения текущего баланса.При попытке снять сумму, большую чем баланс, выбрасывайте исключение.Затем создайте статический метод, который ведёт учёт всех созданных счетов(например, массив accounts) и статический метод для расчёта общего баланса всех счетов.

class BankAccount {
  #balance = 0;
  static accounts = [];

  constructor() {
    BankAccount.accounts.push(this);
  };

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Сумма депозита должна быть положительной.");
    };
    this.#balance += amount;
  };

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Недостаточно средств на счёте.");
    };
    this.#balance -= amount;
  };

  get balance() {
    return this.#balance;
  };

  static getTotalBalance() {
    return BankAccount.accounts.reduce((total, account) => total + account.balance, 0);
  };
};


const account = new BankAccount();
account.deposit(100);
account.withdraw(50);

const accountTwo = new BankAccount();
accountTwo.deposit(200);

console.log(account.balance);
console.log(accountTwo.balance);
console.log(BankAccount.getTotalBalance());