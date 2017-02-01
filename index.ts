import {foo1, foo2} from "./hello_cmd.js";


console.log("start");
let s1: string =  "s1";
s1 = foo1();
let s2: string = "s2";
s2 = foo2();
console.log("s1:" + s1);
console.log("s2:" + s2);
console.log('end');



