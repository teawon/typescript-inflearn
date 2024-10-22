# typescript-inflearn

# 1. 타입스크립트 개론

## 1.1 타입스크립트의 동작원리 및 한계점

## 1.2 시작 (실습)

    - nodeJS 패키지 초기화
        - `npm init`
    - typenode 라이브러리를 설치하기
        -  `npm i @types/node`
        - nodeJS에서 기본적으로 제공하는 기능에 대한 타입이 외부 패키지로 정의되어있다 (console.log 등등)
        - 이게 없다면 타입스크립트의 컴파일 과정에서 기본 노드에서 제공하는 기능들에 대한 타입을 인식하지 못한다
    - typeScript컴파일러 설치하기
       - `npm i typescript -g` (글로벌로 설치)

    - ts파일 컴파일하기
        - `tsc src/index.ts`
            -  컴파일 결과물이 자바스크립트 코드로 생성된다(`src/index.js`)
        - `node src/index.js`
            - 자바스크립트 파일을 실행
        - 근데 매번 이렇게 하기 귀찮은데..?(한번에 실행하기)
            - `npm i tsx`  || (Node20이전이라면) `npm i ts-node -g`
            - `tsx src/index.ts` || (Node20이전이라면)`ts-node src/index.ts`

## 1.3 타입스크립트 설정

- 컴파일러 옵션 파일

  - `tsc --init` (기본 옵션이 들어간 컴파일러 설정 파일 생성 - `tsconfig.json`)

- `incloud`
  - 컴파일 할 타입스크립트 파일의 범위와 위치 설정
- `target`
  - 컴파일 결과 생성되는 자바스크립트 코드의 버전 설정
  - `ES5` or `ESNext`(최신)
  - 구형 브라우저 및 과거 서버환경에서 동작시키기 위해 구버전의 자바스크립트를 사용해야하는 경우가 있다.
- `skipLibCheck`
  - 타입 정의 파일을 스킵 (20버전 이후로 넣어줘야 라이브러리에서 오류 안남)
- `module`
  - 변환되는 자바스크립트 코드의 모듈 시스템을 설정
  - `CommonJS` or `ESNext`(최신)
- `outDir`
  - 컴파일 결과 생성할 JS위치 결정
- `strict`
  - 타입검사 엄격함 설정
- `ModuleDetection`

  - 로컬 모듈로 파일을 설정
  - 일반적으로 타입스크립트의 파일은 전역 파일로 선언되 동일한 변수를 사용할 수 없다
  - `"moduleDetection": "force"` 설정을 통해 각 파일을 로컬 모듈(독립) 으로 취급
  - 또는.. `export {}` 키워드를 각 파일에 넣으면 독립된 모듈로 인식한다.

    - "moduleDetection" 를 넣으면 실제 컴파일된 js파일에 해당 문구가 추가

  - **(package.json) 이때 `type` 설정으로 `module`을 넣어주어야 한다.**
    - 타입스크립트 코드가 ES 모듈 시스템을 사용하는 자바스크립트 코드로 컴파일 되기 때문
    - Node.js가 ES모듈 시스템을 사용할 수 있도록 module설정을 추가해야한다!
  - 실제 React를 사용하는 코드를 봐도, 각 파일을 export형태로 모듈로 처리하고있다. 억지로 두 파일을 만들고 같은 변수를 쓰면 에러가 남

## 2. 타입스크립트 기본

### 2.1 타입스크립트의 타입

- 원시 타입

  - number
    - 숫자(정수,음수,소수) + NaN, Infinity
  - string
  - boolean
  - null
  - undefined

- 리터럴

  - 특정 값 자체를 설정하는게 가능하다.
  - `let numberA : 10 = 10;
  - 'let strA : "test" = "test";`

- 배열

  - `const A : string` === `const A : Array<string>` 같다.

- 튜플

  - **길이와 타입이 고정된** 배열 (JS는 없음)
  - 타입은 배열과 같지만, 고정된 길이도 다음과 같이 지정이 가능하다
    - `const tuple : [number, string, number] = ... `
  - 결국 배열이기에 push, pop과 같이 길이를 무시하고 추가 & 삭제가 가능
  - 배열의 특정 위치에 특정 타입이 보장되어야 할때 용이하다 (순서가 중요할떄)
    - `['name', 20]`

- 객체 (object)
  - 객체 리터럴 타입 : 객체가 가지는 속성을 직접 나열해 만드는 타입
  - `object vs Record<any,any>` - section2-chapter3 정리 볼것

### 2.2 타입 별칭

- 스코프가 다르면 변수와 같이 동일한 타입 선언 가능

### 2.3 인덱스 시그니처

- `[key] : string` 과 같이 키와 값의 타입을 지정
- 인덱스 시그니처와 특정 필드에 대한 타입을 명시하려면 & 연산자 사용하기

### 2.4 Enum

- 숫자형 enum
  - 값을 넣지 않아도 0부터, 할당된 값부터 1씩 증가하며 자동 할당된다
- 문자형 enum

```
  enum Role {
    ADMIN = 10, // 10 할당
    USER, // 11 할당(자동)
    GUEST, // 12 할당(자동)
  }

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  language : Language.korean
  role: Role.ADMIN, //관리자
};


- 1.  enum의 경우 자동으로 숫자가 할당되는 과정에서 의도치않은 접근 예외처리 힘듬
- - 또한 즉시 실행 함수 형태로 코드를 생성하기 때문에 Tree-shaking되지 않는다
-
- 2.  const enum의 경우 별도의 객체가 생성되지는 않는다.
- - 말 그대로 치환하듯 해당 문자열이 삽입됨 (실제 코드를 보면 객체가 안만들어짐)
- - ts에서 --isolateModules 옵션을 사용하면 스코프 문제로 문제가 될 수 있음
- - Object.keys, Object.entries를 이용해서 값들에 대해 순회 불가
-
- 3.  as const
- - 단순 객체형태로 정의되므로 Tree-shaking 가능
- - Object.keys, Object.entries를 이용해서 값들에 대해 순회 가능

-
-
- https://techblog.woowahan.com/9804/

```

### 2.5 any , unknown, void, Never

- unknown
  - any와 유사하지만 메서드, 연산, 변수 할당이 안된다
  - 즉 타입을 좁혀 안전하게 사용해야하고 런타임 에러를 줄일 수 있는 안전한 타입
- void : 어떠한 값도 반환하지 않을 떄
- never : 모순, 불가능을 의미
  - 의도적인 에러 상황을 나타낼때 사용하기도 함

# 3. TypeScript 이해하기

## 3.1 타입과 집합

### 3.1.1 기본타입

![image_1](image.png)

- 상위 타입에는 하위 타입을 할당할 수 있다. (반대는 X)

```
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let a: never = 1; // number -> never ❌
```

### 3.1.2 객체타입

- 객체의 경우에는 속성을 기준으로 집합의 관계가 생성된다
  - 상위 (더 포괄적인) 객체로 업캐스팅이 가능

## 3.2 대수 타입

- Union : `let a: string | number;`
- Intersection : `let variable: number & string; // = never`

## 3.3 타입 추론

- 변수 선언
  - 초기값을 기준으로 타입을 추론
- 함수의 반환 값 (return)을 기준으로
- 기본 값이 설정된 매개변수
- 주의 해야하는 상황
  - 초기값을 생략하면 any로 추론
  - const 상수의 경우 가장 좁은 타입으로 추론된다
    - `const num = 10` // 10 Literal
    - `const str = "hello"` // hello Litiral
  - 여러가지 배열을 가지는 타입 -> union의 추론
    - `const arr = [1,'2']` // (number | string) []

## 3.4 타입 단언

- `as Type` 형태로 사용
- 특정 타입을 정의하였지만 빈 객체로 초기화할때 사용(유틸에서 많이씀)
- 특정 객체에 초과프로퍼티가 있을때 우회하는 용도로 사용 (본 기억이 없긴함..)
- 타입 단언의 조건
  - 두 타입이 슈퍼타입 or 서브 타입일때
- 다중 단언
  - `as unknown as` 사용되는걸 많이 본거같은데?
    - unknown의 경우 모든 유형에 할당이 가능하기 때문에 항상 타입을 정의할 수 있다
    - TODO // 사용 사례 추가

## 3.5 타입 좁히기

- `typeof` , `instanceof` , `in` 과 같은 타입 가드를 사용해 타입을 좁혀 추론
- `typeof value === "object"` 의 경우 `null` 값도 통과 한다.
- `Date` 객체의 경우 `value instanceof Date` 형태로 사용
  - 인스턴스의 경우 위 타입가드를 쓴다.
- 특정 필드값이 있음을 확인할 때에는 `in`을 사용

## 3.5.1 서로소 유니온 타입

- 교집합이 없는 타입으로 만든 유니온 타입

  - 서로 겹치는게 없는 타입
  - 태그 프로퍼티를 통해 타입을 직관적으로 분리하기(서로 포함 관계를 가지지 않도록)
    - 판별 프로퍼티는 값을 나타내는 Unit Type으로 선언되어야 한다
    - `void`, `string`이 아닌 특정 리터럴이나 값
  - ```
        type Admin = {
            tag: "ADMIN";
            name: string;
            kickCount: number;
        };

        type Member = {
            tag: "MEMBER";
            name: string;
            point: number;
        };

        type Guest = {
          tag: "GUEST";
          name: string;
          visitCount: number;
        };
    ```

# 4. 함수와 타입

## 4.1 함수 타입과 표현식

- 함수 타입 표현식

  - `type Operation = (a: number, b: number) => number;`
  - `const add: Operation = (a, b) => a + b;`

- 호출 시그니쳐

  - ```
    type Operation2 = {
      (a: number, b: number): number;
    };

    const add2: Operation2 = (a, b) => a + b;

    ```

## 4.2 함수 타입 호환성

- 반환 값의 타입 호환(공변성 - 업캐스팅)

  ```
  type WideReturn = () => number;
  type NarrowReturn = () => 10;

  let witeReturn: WideReturn = () => 10;
  let narrowReturn: NarrowReturn = () => 10;

  witeReturn = narrowReturn; // ✅
  ```

- 매개변수 값의 타입 호환(반공변성 - 다운 캐스팅)
  - 매개변수의 값이 더 구체적일때
  - 매개변수의 개수가 더 많을 때

```
type WideParam = (value: number) => void;
type NarrowParam = (value: 10) => void;

let wideParam: WideParam = (value) => {};
let narrowParam: NarrowParam = (value) => {};

narrowParam = wideParam; // ✅
```

- 어떤 함수가 매개변수로 any를 받아서 내부에서 any로 할 수 있는 여러 매서드를 사용한다면 결국 any보다 더 좁은 타입의 매개변수를 받는 함수는 호환될 수 없다.

- 반대로 좁은 타입의 매개변수를 받아 내부 로직을 처리하는 함수에 대해서, 더 많은 매개변수를 허용해도 상관없다. 어처피 좁은 타입의 매개변수는 호환될 수 있으니까

## 4.3 함수 오버로딩

- 하나의 함수를 매개변수의 개수/타입에 따라 다르게 동작하도록 만드는 문법

- 오버로드 시그니쳐 : 선언부만 만든 것
- 구현 시그니쳐 : 실제 함수의 실행 로직

- 왜 사용하는가?

  - 1.  코드의 가독성 증가(한눈에 파악)
  - 2.  특정 매개변수 조합에 대해서만 함수가 호출되도록 제한
    - 잘못된 함수 호출 방지

- 화살표 함수(const)는 익명함수를 할당하므로 function키워드를 사용해 사용해야 한다

- ```
  function format(data: string): string;
  function format(data: number, locale: string): string;


  function format(data: string | number, locale?: string): string {
  if (typeof data === "string") {
  return `Formatted string: ${data}`;
  } else if (typeof data === "number" && locale) {
  return new Intl.NumberFormat(locale).format(data);
  } else {
  return data.toString();
  }
  }

  ```

## 4.4 사용자 정의 타입가드

- 속성의 유무(`in`)를 사용해 타입을 좁히면 아래의 문제점이 있다
  - 속성이 수정되거나 변경되면 의도치 않은 타입으로 추론될 수 있음
- 아래와 같이 타입가드를 사용하자

- ```
  function warning_bad(animal: Animal) {
    if ("isBark" in animal) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else if ("isScratch" in animal) {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }



  function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
  }

  // Cat 타입인지 확인하는 타입가드
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
  }

  function warning_good(animal: Animal) {
    if (isDog(animal)) {
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
  }
  ```

# 5. 인터페이스

## 5.1 개요

- 오버로딩의 경우 함수타입 표현식이 아닌, 호출 시그니처 형태로 선언해야 한다
- ```
  interface Person {
    readonly name: string;
    sayHi(): void;
    sayHi(a: number): void;
    // sayHi : (a) => void (X)
  }
  ```
- interface의 경우 type과 같이 'union' , 'intersection' 사용불가
  - type A = C | B & D
- 그러나 extends를 사용한 확장은 가능

## 5.2 확장

- `extends`를 사용해 중복된 프로퍼티를 재선언하지 않고 타입을 확장할 수 있다.
- 재정의
  - 상속받는 부모 타입의 서브타입의 속성을 재정의하는게 가능하다
  - 즉 더 "좁은 범위"로 확장
- 다중 상속도 가능하다
- ```
      interface Animal {
        name: string;
        color: string;
      }

      interface Dog extends Animal {
        name : 'dog' // 서브타입이므로 속성을 재정의할 수 있음
        breed: string;
      }

      interface Cat extends Animal {
        isScratch: boolean;
      }

      interface DogCat extends Dog, Cat {
        grade : number;
      }

  ```

## 5.3 선언 합침

- 인터페이스의 경우 동일한 스코프 내에서 같은 이름을 선언할 수 있다
  - 이 경우 최종 타입은 하나로 합쳐진 타입이 된다
  - 같은 속성에 대해 다른 타입이 사용되어선 안된다
- 이를 활용해 라이브러리의 인터페이스를 확장하는게 가능하다고 함(사용하는건 아직 못봄..)

- ```
    interface Person {
      name: string;
    }

    interface Person {
      age: number;
    }

    const person: Person = {
      name: "name",
      age: 20,
    };

    /**
    * 단 아래와 같이 같은 이름의 인터페이스 속성이 다르다면 에러가 발생한다(서브타입도 안됨)
    */

    interface Person {
      // @ts-expect-error
      name: "subtype"; // name은 이미 string으로 선언되어있다
      age: number;
    }
  ```

# 6. 클래스

## 6.1 개념

- 보통 파스칼표기법 사용
- 동일한 형태의 "객체"를 쉽게 생성하게 도와주는 문법
- `this`를 통해 클래스 내부의 속성에 접근 가능
- `new 이름`의 형태로 생성자 함수를 호출한다.
- 상속을 통해 동일한 속성, 메서드를 활용할 수 있다.
  - `super`문법을 통해 부모 클래스의 생성자를 호출
- 클래스는 "타입"과 같이 사용할 수 있다.

- ```
    // js예재
    class Student {
    name;
    age;
    grade;

    constructor(name, grade, age) {
      this.name = name;
      this.grade = grade;
      this.age = age;
    }
  }


    class StudentDeveloper extends Student {

      favoriteSkill;

      constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
      }

      programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
      }
    }

  ```

- ```
  // ts예제
  class Employee {
    name: string = "";
    position? = ""; // 선택적 프로퍼티

    constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
    }

    work() {
      console.log("일함");
    }
  }


  class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, position: string, officeNumber: number) {
      super(name, position);
      this.officeNumber = officeNumber;
    }

  }
  ```

## 6.2 접근 제어자

- `public` - 인스턴스 및 외부클래스에서 프로퍼티 접근 가능
- `private` - 해당 클래스 외에 어디서든 접근 불가
- `protected` - 해당 클래스 및 상속받는 클래스 외에 어디서든 접근 불가
- 생성자 함수 내 접근 제어자 선언시...
  - 프로퍼티 선언 생략 (자동으로 입력되므로 오히려 적었을때 중복 에러가 나온다)
  - 생성자 할당 함수 생략 가능
- ```
  class Employee__ {
    // 생성자
    constructor(
      private name: string,
      protected age: number,
      public position: string
    ) {}

    // 메서드
    work() {
      console.log(`${this.name} 일함`);
    }
  }
  ```

## 6.3 인터페이스와 클래스

- 인터페이스는 클래스의 "설계도" 역할을 수행하기도 함
  - `implement` 키워드 사용
  - 모든 메서드 및 타입을 내부에서 구현해야함
- 인터페이스에서 정의한 속성은 모두 `pubilc` 이므로 다른 접근자를 사용하려면 인터페이스에서 분리해야함
- ```

    interface CharacterInterface {
      name: string;
      moveSpeed: number;
      move(): void;
    }

    class Character implements CharacterInterface {
      constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string // 인터페이스에서 분리하여 private를 사용했다..
      ) {}

      move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
      }
    }
  ```

# 7. Generic

## 7.1 개념

- 함수나 인터페이스, 클래스, 타입별칭 등에서 타입을 마치 변수로 받아 다양한 타입과 함께 동작할 수 있게 해주는 문법
- ```
  let arr = func<[number, number, number]>([1, 2, 3]);
  // 위 함수는 그냥 사용했다면 number[] 형태로 자동 추론되지만, T에 직접적으로 변수를 입력함으로써 값을 처리
  ```
- 타입 변수를 "제한" 할 때에는, extends를 활용한다.
  - `T extends { length : number}`
  - 위 코드는 배열이나 길이 속성을 가지고 있는 요소일때 활용
- ```
  // TODO Q) 여러 제네릭 변수가 있을때, 일부 필드는 직접 선언하고 일부는 자동추론되게 할 수 없는가?
  // A) 없다. 하나라도 직접 선언한 순간 나머지 타입은 자동추론이 안된다. React-query에서도 그랬는데 타입을 명시한순간 다 써야했다..
  // 이건 고칠 수 없을까?
  ```

## 7.2 제네릭 인터페이스

- ```
    interface KeyPair<K, V> {
      key: K;
      value: V;
    }

    // 제네릭 인터페이스의 경우 "반드시" 제네릭 변수를 명시해주어야 한다.
    let keyPair: KeyPair<string, number> = {
      key: "key",
      value: 0,
    };

    // @ts-expect-error
    let keyPair_: KeyPair<K, V> = {
      key: "key",
      value: 0,
    };
  ```

- ```
   // 활용 예시

    const developerUser: User<Developer> = {
      name: "test1",
      profile: {
        type: "developer",
        skill: "TypeScript",
      },
    };

    const studentUser: User<Student> = {
      name: "test2",
      profile: {
        type: "student",
        school: "가톨릭대학교",
      },
    };

  ```

## 7.3 제네릭 클래스

- ```

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

  ```

## 7.5 Promise

- Promise의 경우 기본적으로 타입을 추론해주지 않는다.
- 내부에서 Generic으로 선언되어있으며 타입을 직접 명시 해 resolve 데이터에 대한 타입을 드러낸다
- 단 에러(실패)의 경우 타입은 unknown으로 고정되어있으며 타입을 좁혀 분기처리를 수행해야 한다.

# 8. 조건부타입

## 8.1 Indexed Access Types

- 객체 타입에서 특정 키의 타입을 가져오는 기능
- 인덱스에 "값" 이 아닌 "타입(리터럴)"이 들어와야 한다

  - `const authorKey = "author";`
  - `function printAuthorInfo_(author: Post[authorKey]) { // Error `

- ```

    interface Post {
      title: string;
      content: string;
      author: {
        info: {
          id: number;
          name: string;
        };
      };
    }

    function printAuthorInfo(author: Post["author"]["info"]) {
      console.log(`${author.id} - ${author.name}`);
    }


      /**
    * 실제 회사에서도 이런 경우가 많았다.
    * 컴포넌트 내부에서 특정 타입의 일부 필드값만을 넘기거나 처리할 때, 인터페이스에서 특정 속성을 뽑아 처리
    * 또는 특정 타입을 잘개 쪼개 합치고 각각을 export했다.
    * -> 프로퍼티가 수정되거나 추가되어도 수정하지 않아도 되며 유연하게 처리 가능
    */
  ```

- ArrType[number]를 사용하면 특정 배열의 "요소"를 추출 할 수 있다.
  - DataList[0]과 같이 정수형 리터럴 값을 넣어도 됨
- 튜플도 마찬가지로 응용 가능

  - ```

    type Tup = [number, string, boolean];
    type Tup2 = Tup[2];
    // boolean

    type Tup3 = Tup[number];
    // number | string | boolean

    ```

## 8.2 keyof 연산자

- 특정 프로퍼티의 모든 Key들을 union타입으로 추출하는 연산자
- ```
      interface Product {
        id: number;
        name: string;
        price: number;
        description: string;
      }

      // K에는 'id' | 'name' | 'price' | 'description' 을 타입으로 가지는 값만 올 수 있다.
      function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
  ```

- ```
    // keyof는 "타입"에만 사용할 수 있다.
    // -> 변수의 경우 typeof를 통해 타입을 추출 후 사용하도록 하자.
    // @ts-expect-error
    function getPropertyKey(product: Product, key: keyof product) {
      // @ts-expect-error
      return product[key];
    }

    function getPropertyKey_(product: Product, key: keyof typeof product) {
      return product[key];
    }

  ```

## 8.3 Mapped Types

- ```

  type Optional<T extends object> = {
  [key in keyof T]?: T[key];
  };

  type MyPartialUser = Optional<User>;

  ```

## 8.4 템플릿 리터럴 타입

- ```

    /**
    * - 템플릿 리터럴을 사용해 특정 패턴을 갖는 "String" 타입을 만드는 기능
    */

    type Color = "red" | "black" | "green";
    type Animal = "dog" | "cat" | "chicken";

    type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog"; // ...

    type ColoredAnimal_ = `${Color}-${Animal}`;

    // TODO : CIDR을 정의하는 예제
    // https://toss.tech/article/template-literal-types


  ```

# 9. 타입 응용

## 9.1 조건부 타입

- 타입에 따라 각각 다른 타입을 정의하도록 돕는 문법
- `type StringNumberSwitch<T> = T extends number ? string : number;`
- 함수 오버로딩을 활용해 내부의 동적인 타입 추론을 도울 수 있다
- ```
       /**
   *  위 코드는 string | undefined를 반환하고 있다. 문자열이 들어간다면 string이 반환됨을 확실히 하고싶다면?
   */

   function removeSpaces_error<T extends string | undefined | null>(
     text: T
   ): T extends string ? string : undefined {
     if (typeof text === "string") {
       // @ts-expect-error
       return text.replaceAll(" ", "");
     }
     // @ts-expect-error
     return undefined;
   }

   // 위 형태는 에러가 난다. 왜냐하면 런타임 로직에 기반한 반환 타입을 조건부로 표현할 수 없기 때문 (T가 뭔지 모른다)
   // 'string' 형식은 'T extends string ? string : undefined' 형식에 할당할 수 없습니다.ts(2322)

   // 아래와 같이 함수 오버로딩을 사용하자

   // function removeSpaces(text: string): string;
   // function removeSpaces(text: undefined | null): undefined;
   function removeSpaces<T>(text: T): T extends string ? string : undefined;
   function removeSpaces(text: string | undefined | null) {
     if (typeof text === "string") {
       return text.replaceAll(" ", "");
     }

     return undefined;
   }

   let result = removeSpaces("hi im winterlood");
   // string

   let result2 = removeSpaces(undefined);
   // undefined


  ```

## 9.2 분산적인 조건부 타입

- 타입에 "유니온" 을 넘기면 다음과 같은 분산 평가가 진행된다
  - 각 유니온 타입을 분리
  - 분리된 각 타입을 추론
  - 결과 값을 유니온으로 합성
- ```
    type StringNumberSwitch<T> = T extends number ? string : number;

    let c: StringNumberSwitch<number | string>;
    // string | number

  ```

- 분산 평가를 막기 위해선 배열로 래핑하면 된다

  - 단일 배열로 가진 배열로 취급되 분산 평가 되지 않음
  - ```
    type StringNumberSwitch_<T> = [T] extends [number] ? string : number;

    let c_: StringNumberSwitch_<number | string>;
    //  number

    ```
