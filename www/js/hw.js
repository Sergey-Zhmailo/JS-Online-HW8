////////      THIS     ////////////
// 1.
function getSquare(width, height) {
    return this.width * this.height;
}
const rectangle = {
    width: 20,
    height: 10,
    square: getSquare
};
console.log(rectangle.square());

// 2.
function getPrice() {
    return this.price;
};
function getPriceWithDiscount() {
    return this.price * ((100 - parseFloat(this.discount)) / 100);
};

const product = {
    price: 10,
    discount: '15%'
};
res = getPrice.call(product);
resDisq = getPriceWithDiscount.call(product);
console.log('Price: ' + res, 'Price with disq: ' + resDisq);

// 3.
const user = {
    name: 'Abraham',
};
getUserName = function () {
  return this.name;
};
user.getName = getUserName.call(user);
console.log(user.getName);

// 4.
function increase() {
    return this.height += 1;
}
const obj4 = {
    height: 10,
    increaseParam: increase
};
resIncr = obj4.increaseParam();
console.log(resIncr);

// 5.
const numeratior = {
    value: 1,
    double,
    pluseOne,
    minusOne
};
function double() {
    this.value *= 2;
    return this
};
function pluseOne() {
    this.value += 1;
    return this
};
function minusOne() {
    this.value -= 1;
    return this
}
res5 = numeratior.double().pluseOne().pluseOne().minusOne();
console.log(res5.value);

// 6.
const user6 = {
    name: 'Abraham'
};
const otherUser6 = {
    name: 'John',
    getName: function () {
        return this.name
    }
};
console.log(user6.getName); // undefined потому что у user6 нет этого параметра
user6.getName = otherUser6.getName; // произошло одалживание функуии
console.log(user6.getName()); // Получили значение функции из otherUser6 в объекте user6
console.log(otherUser6.getName()); // Получили значение функции из otherUser6

// THIS задачи 2ч.
// 1.
function getList() {
    return this.list;
}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John']
};

console.log(getList()); // undefined т.к. нет привязки к контексту
console.log(users.getList = getList); // выведет саму функцию
console.log(users.getList()); // выполнит функцию с привязкой к контексту юзерс
console.log(getList.call(users)); // вызывается в контексте юзерс

// 2.
let products2 = {
    price: 123,
    quantity: 5,
    getSum: getSum
};
function getSum() {
    return this.price * this.quantity
}
console.log(products2.getSum());

// 3.
let products3 = {
    price: 123,
    quantity: 5,
    getSum: getSum
};
let details3 = {
    price: 23,
    quantity: 6,
};
function getSum() {
    return this.price * this.quantity
}
details3.getSum = products3.getSum;
console.log(details3.getSum());

// 4.
let sizes = {
    width: 5,
    height: 10
};
getSquare = function () {
    return this.width * this.height
};
console.log(getSquare.call(sizes));

// 5.
let numbers = [4, 12, 0, 10, -2, 4];
min5 = function () {
    return Math.min.apply(null, this);
};
console.log(min5.call(numbers));

// 6.
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function() {
        return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
    }
};
const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
};
console.log(element.getFullHeight());
console.log(element.getFullHeight.call(block));

// 7.
let element7 = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};
let getElementHeight = element7.getHeight.bind(element7);
console.log(getElementHeight());