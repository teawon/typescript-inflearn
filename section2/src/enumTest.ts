enum Language_enum {
  ko = "korean",
  en = "english",
}
const enum Language2_const_enum {
  ko = "korean",
  en = "english",
}

const Language3_as_const = {
  ko: "korean",
  en: "english",
} as const;

const test = {
  enum: Language_enum.ko,
  constEnum: Language2_const_enum.ko,
  asConst: Language3_as_const.ko,
};

// @ts-expect-error
Object.entries(Language2_const_enum);
