// 数组方法

  // 1>arr.push():给数组的后面添加元素，返回值为添加完后的数组长度 
  let arr = [1,2,3,4,5];
  console.log(arr.push(5)); // 6
  console.log(arr);  // [1,2,3,4,5,5]

  // 2>arr.pop():从后面删除元素，只能是一个，返回值是删除的元素
  let arr = [1,2,3,4,5];  
  console.log(arr.pop()); // 5
  console.log(arr); // [1,2,3,4]

  // 3>arr.shift():从前面删除元素，只能删除一个 返回值是删除的元素
  let arr = [1,2,3,4,5];
  console.log(arr.shift());  // 1
  console.log(arr); // [2,3,4,5]

  // 4>arr.unshift():从前面添加元素, 返回值是添加完后的数组的长度
  let arr = [1,2,3,4,5];
  console.log(arr.unshift(2));  //6
  console.log(arr);  //[2,1,2,3,4,5]

  // 5>arr.splice(i,n):删除从i开始后的n个元素元素，返回为删除的元素,如果n不写，则默认删除i开始的所有元素
  let arr = [1, 2, 3, 4, 5];
  // console.log(arr.splice(2)); //[3,4,5]
  console.log(arr.splice(2,2)); // [3,4]
  console.log(arr); //[1, 2, 5]

  // 6>arr.concat() 连接两个数组 返回值为连接后的新数组，不会改变原数组
  let arr = [1, 2, 3, 4, 5];
  let arr1 = [1,2]
  console.log(arr.concat(arr1)); // [1, 2, 3, 4, 5, 1, 2]
  console.log(arr); //[1, 2, 3, 4, 5]

  // 7>arr.sort() 将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序
  let arr = [3, 45, 26, 7, 9, 15];
  console.log(arr.sort()); //[15, 26, 3, 45, 7, 9]
  let arr1 = arr.sort((a, b) => a - b);
  console.log(arr1); //升序：[3, 7, 9, 15, 26, 45]  
  let arr2 = arr.sort((a, b) => b - a);
  console.log(arr2); //降序：[45, 26, 15, 9, 7, 3]

  // 8>arr.reverse() 将数组反转,返回值是反转后的数组
  let arr = [1,2,3,4,5]
  console.log(arr.reverse()); // [5,4,3,2,1]
  console.log(arr); // [5,4,3,2,1]

  // 9>arr.slice(start,end) 切除从start开始到end-1的值，返回值是切出来的数组，不会影响原数组
  let arr = [1,2,3,4,5]
  console.log(arr.slice(1,3)); //[2,3]
  console.log(arr); //[1,2,3,4,5]

  // 10> arr.forEach(callback):遍历数组，无return，callback三个参数：value：索引值，index：索引，array：原数组
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((value,index,array)=>{
    console.log(`value:${value} + index:${index} + array:${array}`);
  });

  // 11>arr.map(callback) 映射数组(遍历数组),有return 返回一个新数组
  let arr = [1, 2, 3, 4, 5];
  arr.map((value,index,array)=>{
    value *= 2;
    console.log(`value:${value} + index:${index} + array:${array}`);
  });
  console.log(arr); //[1, 2, 3, 4, 5]
  let arr1 = arr.map((value,index,array) => {
    value *= 2;
    console.log(`value:${value} + index:${index} + array:${array}`);
    return value;
  });
  console.log(arr1); //[2, 4, 6, 8, 10]

  // 12>arr.filter(callback) 过滤数组，返回一个满足要求的数组
  let arr = [1,2,3,4,5]
  let arr1 = arr.filter( (value, index) => value < 3)
  console.log(arr1)    // [1, 2]

  // 13>arr.every(callback) 依据判断条件，数组的元素是否全部满足，若满足则返回ture，否则为false
  let arr = [1,2,3,4,5]
  let arr1 = arr.every( (i, v) => i < 3)
  console.log(arr1)    // false
  let arr2 = arr.every( (i, v) => i < 10)
  console.log(arr2)    // true

  // 14>arr.some(callback) 依据判断条件，数组的元素是否有一个满足，若有一个满足则返回ture，否则为false
  let arr = [1,2,3,4,5]
  let arr1 = arr.some( (i, v) => i < 3)
  console.log(arr1)    // true
  let arr2 = arr.some( (i, v) => i > 10)
  console.log(arr2)    // false

  // 15> arr.reduce(callback, initialValue) 累加器（迭代数组的所有项），数组中的每个值（从左到右）合并，最终计算为一个值
  // callback中的参数：
  //   previousValue 必选 上一次调用回调返回的值，或者是提供的初始值（initialValue）
  // 　currentValue 必选 数组中当前被处理的数组项
  // 　index 可选 索引值
  // 　array 可选 原数组
  // initialValue：可选，初始值 ,但如果遍历的是空数组时必须加入initialValue，否则会报错
  // 如果不加initialValue则会为数组的的一个数

  // 应用：
  // a.求和：
  let arr = [0,1,2,3,4]
  let arr1 = arr.reduce((preValue, curValue,index) => {
      return preValue + curValue;
    }
  )
  console.log(arr1)    // 10

  // b.求最大值和最小智
  let arr = [0,1,2,3,4]
  let arr1 = arr.reduce((preValue, curValue) => {
      // 最大值
      return preValue > curValue? preValue : curValue;
    }
  )
  console.log(arr1); //4

  // c.将二维数组转化为一维数组
  let arr = [[0,1],[2,3],[3,4]];
  let arr1 = arr.reduce((preValue, curValue) => preValue.concat(curValue));
  console.log(arr1); //[0, 1, 2, 3, 3, 4]

  // 16>arr.reduceRight(callback, initialValue) 与arr.reduce()功能一样，不同的是，reduceRight()从后向前操作。

  // 17>arr.indexOf() 查找某个元素的索引值，若有重复的，则返回第一个查到的索引值,若不存在，则返回 -1
  let arr = [1,2,3,4,5,2];
  let arr1 = arr.indexOf(2);
  console.log(arr1); // 1
  let arr2 = arr.indexOf(9);
  console.log(arr2); // -1

  // 18>arr.lastIndexOf()  和arr.indexOf()的功能一样，不同的是从后往前查找
  let arr = [1,2,3,4,5,2];
  let arr1 = arr.lastIndexOf(2);
  console.log(arr1); // 5
  let arr2 = arr.lastIndexOf(9);
  console.log(arr2); // -1

  // 19>Array.from() 将伪数组变成数组，就是只要有length的就可以转成数组。 ES6中
  let str = '12345';
  console.log(Array.from(str)); // ["1", "2", "3", "4", "5"]
  let obj = {0:'a',1:'b',length:2};
  console.log(Array.from(obj)); // ["a", "b"]

  // 20>Array.of() 将一组值转换成数组，类似于声明数组  ES6中
  let str = '11';
  console.log(Array.of(str)); // ["11"]
  // 等价于
  console.log(new Array('11')); // ["11"]
  // 但是new Array()有缺点，就是参数问题引起的重载
  console.log(new Array(2)); //[empty × 2]  是个空数组
  console.log(Array.of(2)); // [2]

  // 21>arr.find(callback) 找到第一个符合条件的数组成员
  let arr = [1,2,3,4,5,2,4];
  let arr1 = arr.find((value, index, array) =>value > 2);
  console.log(arr1); // 3

  // 22>arr.findIndex(callback) 找到第一个符合条件的数组成员的索引值
  let arr = [1,2,3,4,5];
  let arr1 = arr.findIndex((value, index, array) => value > 2);
  console.log(arr1); // 2

  // 23> arr.fill(target, start, end) 使用给定的值，填充一个数组,填充完后会改变原数组
  // 　　参数： target:待填充的元素
  // 　　　　　 start:开始填充的位置
  // 　　　　   end:终止填充的位置 - 1
  //           如果不写end，会到最后一个
  let arr = [1,2,3,4,5];
  let arr1 = arr.fill(5);
  console.log(arr1); // [5, 5, 5, 5, 5]
  console.log(arr); // [5, 5, 5, 5, 5]
  let arr2 = arr.fill(5,2);
  console.log(arr2); // [1, 2, 5, 5, 5]
  let arr3 = arr.fill(5,1,3);
  console.log(arr3); // [1, 5, 5, 4, 5]

    // 24> arr.includes() 判断数中是否包含给定的值
  // 与indexOf()的区别：
  // b.indexOf()返回的是数值，而includes()返回的是布尔值
  // a.indexOf() 不能判断NaN，返回为-1 ，includes()则可以判断
  let arr = [1,2,3,4,5];
  let arr1 = arr.includes(2);  
  console.log(arr1); // ture
  let arr2 = arr.includes(9);
  console.log(arr2); // false
  let arr3 = [1,2,3,NaN].includes(NaN);
  console.log(arr3); // true
  
  // 25>arr.keys() 遍历数组的键名(index)
  let arr = [1,2,3,4]
  let arr2 = arr.keys()
  for (let key of arr2) {
      console.log(key);   // 0,1,2,3
  }

  // 26>arr.values() 遍历数组键值(value)
  let arr = [1,2,3,4];
  let arr1 = arr.values();
  for (let val of arr1) {
      console.log(val); // 1,2,3,4
  }

  // 27>arr.entries() 遍历数组的键名和键值
  // entries() 方法返回迭代数组。
  // 迭代数组中每个值 前一个是索引值作为 key， 数组后一个值作为 value。
  let arr = [1,2,3,4];
  let arr1 = arr.entries();
  for (let e of arr1) {
      console.log(e); // [0,1] [1,2] [2,3] [3,4]
  }

  // 28>arr.join(''):将数组变为字符串，可以加入符号，则在数之间加入
  let arr = [1,2,3,4];
  console.log(arr.join('')); // 1234
  console.log(arr.join('-')); // 1-2-3-4