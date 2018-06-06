function getItemPrice() {
    console.log('getprice');
    return this.currency + this.price;
}

const item1 = {
    name: 'Intel i5',
    price: 200,
    type: 'processor',
    currency: '$',
    getPrice: getItemPrice
};
const item2 = {
    name: 'Intel i7',
    price: 300,
    type: 'processor',
    currency: '$',
};

function convertPrice(currency, coeficient) {
  return currency + this.price * coeficient;
};
////////////////////////////    APPLY     CALL /////////////////////////
// let res = convertPrice.call(item2, 'EUR', 0.7);
let res = convertPrice.apply(item1, ['EUR', 0.7]);
console.log(Math.max.apply(null, [1, 2, 3, 4]));
////////////////////////////////////////////////////
function foo2() {
    const list = [].slice.call(arguments); // из списка аргументов получаем массив
    console.log(list);
};
foo2(2, 43, 12);
////////////////////////////////////////////////////

const btn = document.querySelector('.btn');
//
// btn.addEventListener('click', function (evn) {
//     console.log(this);
//     console.log(evn.target);
// });

////////////////////////////       SET TIMEOUT   ////////////////
// setTimeout(function () {
//     console.log('timeout');
// }, 2000);

// setTimeout(item1.getPrice, 2000);

/////////////////////////         BIND        /////////////////
// let getPriceBind = item1.getPrice.bind(item1); // контекст привязан жестко к item1

// setTimeout(getPriceBind, 1000);

// btn.addEventListener('click', item1.getPrice.bind(item1));
// btn.addEventListener('click', () => item1.getPrice()); // короткая запись


//////////////////////////       SET INTERVAL       ////////////////////////
// let i = 0;
// let interval = setInterval(function () {
//     console.log(i++);
// }, 1000);
// btn.addEventListener('click', function (evn) {
//     clearInterval(interval); // stop
// });

