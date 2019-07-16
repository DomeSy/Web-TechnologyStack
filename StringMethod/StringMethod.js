// 字符串方法(10种)
  // 1>str.substring: 切割字符串，从start到end-1位，如果end不写，从start切割之后全部 
  let str = 'abcd';
  console.log(str.substring(1));  // bcd
  console.log(str.substring(1,2)); //b

  // 2>str.slice(start,end): 与 str.substring 不同的是，参数可正可负，负数代表从后计算
  let str = 'abcd';
  console.log(str.slice(1));  // bcd
  console.log(str.slice(1,2)); //b

  // 3>str.split(separator,limit):分割，将字符串分割成数组 separator:正则或是指定的字符串，limit为限制个数，如果不写，默认全部
  let str = 'abcd';
  console.log(str.split('')); // ["a", "b", "c", "d"]
  console.log(str.split('',2)); // ["a", "b"]

  // 4>str.charAt(n):查找字符串n位的数，如果超出字符串的个数，则返回空
  let str = 'abcd';
  console.log(str.charAt(1)); // b 

  // 5>str.search():查找字符串内第一次出现的位置，可以是正则
  let str = 'abcdbc';
  console.log(str.search('bc')); //1

  // 6>str.concat():链接字符串
  let str1 = 'ab';
  let str2 = 'cd';
  console.log(str1.concat(str2)); // abcd

  // 7>str.indexOf()：查找字符串，如果找到返回1否则返回-1，第二参数从第几位找起，
  let str = 'abcd';
  console.log(str.indexOf('bc'));  // 1
  console.log(str.indexOf('bc',2));  // -1

  // 8>str.lastIndexOf():与str.indexOf一样，只不过从后面查找

  // 9>str.toLowerCase():将字符串中的字母变为小写
  let str = 'aBcD';
  console.log(str.toLowerCase()); //abcd

  // 10>str.toUpperCase():将字符串中的字母变为大写
  let str = 'aBcD';
  console.log(str.toUpperCase()); //ABCD