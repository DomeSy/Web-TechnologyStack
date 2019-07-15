<!-- 写标题的方式一共有三种，这里只介绍一种 -->
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

<!-- 列表 -->
<!-- 无序列表有三种形式分别为：*(推荐) + - -->
###无序列表
* 1
* 2
* 3

<!-- 有序列表，注意一点就行，第一个是序号第一个的位置，后面几个都无所谓 -->
###有序列表
5. 列表1
7. 列表2
4. 列表3

<!-- >:区块引用，如果你想对某个部分做的内容做一些说明或者引用某某的话等，可以用这个语句 -->
<!-- 
  注：1>几个>代表第几层区块
      2>有其他语法时，要引用区块中，必须先写>
-->
* React技术栈
  > React全家桶

># React
> * React全家桶 
> >你好

> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用

<!-- 华丽分割线：* -(推荐) _ 这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以 -->
- - -
- - - - -

<!-- 链接：方括号 -->
<!-- 1>[名称](地址) -->
[妙语连珠](http://www.baidu.com) 
<!-- 2>参数式:[名称]:地址  "描述"(鼠标放上去显示的描述) -->
[Hello World！]:http://www.baidu.com "名称"
这里是[Hello World！]

<!-- 图片,与链接的方式一样 与地不同的是必址须加入!-->
![Domesy](./01.jpg)

<!-- 代码框： -->
<!-- 1>单行用`` -->
`<div>Domesy，你好！ </div>`
<!-- 2>多行用``` -->
``` 这里是注释
<div>
  <p> 我们很嗨 </p>
</div>
```

###表格
| name | age | sex |
| :-----: | :-----: | :-----: |
| Domesy | 23 | Vue |
| Option | 56 | React |

表头1 | 表头2
----------- | ------
Domesy | React
Table | 什么

姓名|年龄|技术
-|-|-
Domesy|23|React
Option||React

<!-- 删除线：双~~ -->
~~你好，React~~