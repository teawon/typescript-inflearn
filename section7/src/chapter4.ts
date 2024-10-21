/**
 *  제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

class StringList {
  constructor(private list: string[]) {}

  push(data: string) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 중복되는 기능의 타입만 다른 위 클래스는 아래와 같이 제네릭을 사용해 쉽게 표현할 수 있다.
const numberList = new NumberList([1, 2, 3]);
const stringList = new StringList(["1", "2", "3"]);

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  // 아래와 같이 타입가드를 통해 "특정 타입"의 로직을 분기처리 할 수 있다.
  print() {
    if (typeof this.list[0] === "string") {
      // 문자열 처리 로직
      console.log("String list:", this.list.join(", "));
    } else {
      console.log(this.list);
    }
  }
}

const numberList_ = new List([1, 2, 3]);
const stringList_ = new List(["1", "2"]);
