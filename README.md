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

### 2.1 타입스크립트의 원시타입

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
