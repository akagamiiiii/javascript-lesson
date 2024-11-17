//Q1 変数
let nickname = "油井真";
let age = 25;

console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");

//Q2 配列
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです`);

//Q3 オブジェクト
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

// console.log(user.age);

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let player = playerList.find(player => player.favorites.includes('The Legend of Zelda'));

if (player) {
  let favorite = player.favorites.find(favorite => favorite === 'The Legend of Zelda');
  console.log(favorite);
}

//Q5 四則演算
let totalAge = playerList.reduce((sum, player) => sum + player.age, 0);
let averageAge = totalAge/playerList.length;
console.log(averageAge);

//Q6 関数
function sayHello(){
  console.log("Hello");
}

sayHello();

let sayWorld = function(){
  console.log("World");
}

sayWorld();

//Q7 メソッド
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  greeting: function sayHello(){
    console.log("Hello!");
  }
};

user.greeting();

//Q8 引数
let calc = {
  addition: function add(){
    let x = 2;
    let y = 5;
    console.log(x + y);
  },

  substraction: function substract(){
    let x = 20;
    let y = 10;
    console.log(x - y);
  },

  multiplication: function multiply(){
    let x = 7;
    let y = 7;
    console.log(x * y);
  },

  division: function(){
    let x = 25;
    let y = 5;
    console.log(x / y);
  },
};

calc.addition();
calc.substraction();
calc.multiplication();
calc.division();

//Q9 返り値
function remainder(x, y){
  let rem = x % y;

  return rem;
}

console.log("5を3で割った余りは" + remainder(5, 3) + "です。");

//Q10 スコープ
// 変数xは、関数foo内のみでスコープが有効であり、関数内でしか参照できないため。



//応用編
//Q1 標準組み込みオブジェクト
let randomInt = Math.floor(Math.random() * 10);

console.log(randomInt);
