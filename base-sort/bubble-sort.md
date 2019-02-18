# 冒泡排序

**冒泡排序是一种交换排序，它的基本思想是：两两比较相邻记录的关键字，如果反序则交换，直到没有反序的记录为止。**

先看冒泡排序初级版

```java
public void sort(Comparable[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i].compareTo(arr[j]) > 0) {
                Util.swap(arr, i, j);
            }
        }
    }
}
```

它应该算是最容易写出的代码了，不过这个简单易懂的代码，却有缺陷。排序好1和2的位置后，对其余关键字的排序并没有什么帮助（数字3反而还被换到了最后一位）。效率是非常低的。

来看看正宗的冒泡排序，有没有什么改进的地方：

```java
public void sort(Comparable[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = arr.length - 1; j > i; j--) {
            if (arr[j-1].compareTo(arr[j]) > 0) {
                Util.swap(arr, j, j-1);
            }
        }
    }
}
```