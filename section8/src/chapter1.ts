/**
 * 인덱스드 엑세스 타입
 * - 타입 내 특정 속성의 타입을 추출하는 타입
 */

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

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    info: {
      id: 1,
      name: "이정환",
    },
  },
};

//Post["author"]["info"]는 Post 타입으로부터 author 프로퍼티의 타입을 추출

function printAuthorInfo(author: Post["author"]["info"]) {
  console.log(`${author.id} - ${author.name}`);
}

/**
 * 실제 회사에서도 이런 경우가 많았다.
 * 컴포넌트 내부에서 특정 타입의 일부 필드값만을 넘기거나 처리할 때, 인터페이스에서 특정 속성을 뽑아 처리
 * 또는 특정 타입을 잘개 쪼개 합치고 각각을 export했다.
 * -> 프로퍼티가 수정되거나 추가되어도 수정하지 않아도 되며 유연하게 처리 가능
 */

/**
 *  인덱스에는 "값"이 아니라 "타입"이 들어올 수 있다.
 */
const authorKey = "author";

// @ts-expect-error
function printAuthorInfo_(author: Post[authorKey]) {
  // ❌
  console.log(`${author.id} - ${author.name}`);
}

/**
 * 배열의 요소 타입 추출하기
 * - ArrType[number] 을 사용하면 특정 배열의 요소를 추출하는 것도 가능
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const postElement: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};
// PostList[0] PostList[1]과 같이 직접 리터럴 값을 명시해도 된다.

/**
 * 튜플의 타입 추출하기
 *
 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean

/**
 * exp
 */

interface Test {
  multiType: string | number | boolean;
}

const test: Test["multiType"] = 1;
