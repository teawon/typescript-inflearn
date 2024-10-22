/**
 * Partial<T>
 * - 특정 객체의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T extends object> = {
  [K in keyof T]?: T[K];
};

const draft: Partial<Post> = {
  title: "제목",
  content: "초안...",
};

// TODO - 만약 특정 타입만 Partial로 만들고 싶다면?

type PartialPick<T extends object, K extends keyof T> = Omit<T, K> & {
  [key in keyof T as key extends K ? key : never]?: T[K];
};

const example: PartialPick<Post, "title" | "tags"> = {
  content: "123",
  thumbnailURL: "2",
};

/**
 *  Required<T>
 *  - 특정 객체의 모든 프로퍼티를 필수적 프로퍼티로 바꿔줌
 */

type Required<T extends object> = {
  [K in keyof T]-?: T[K];
};

// @ts-expect-error
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  thumbnailURL: "https://...",
};

/**
 * ReadOnly<T>
 * - 읽기 전용 프로퍼티로 만듦
 */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Post = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};
