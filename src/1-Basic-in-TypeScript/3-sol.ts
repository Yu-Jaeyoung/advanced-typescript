import type { Equal, Expect } from "..";

export async function fetchServerVersion(): Promise<number> {
  const response = await fetch("https://api.example.com/v");
  const data = await response.json();
  return data;
}

const example = async() => {
  const version = await fetchServerVersion();

  type test = Expect<Equal<typeof version, number>>;
};

// 1. 브라우저/Web API 기준 학습이면 DOM lib 추가
//
// {
//   "compilerOptions": {
//   "lib": ["ESNext", "DOM"]
// }
// }
//
// DOM의 Response.json(): Promise<any> 타입이 적용되어 현재 코드는 통과. 다만 any라서 타입 안정성은 낮음.
//
// 2. 현재 Node/Undici 타입을 유지하고 명시적으로 좁히기
//
// export async function fetchServerVersion(): Promise<number> {
//   const response = await fetch("https://api.example.com/v");
//   const data: unknown = await response.json();
//
//   if (typeof data !== "number") {
//     throw new Error("Expected server version to be a number");
//   }
//
//   return data;
// }
//
//
// 3. 타입 assertion으로 넘기기
//
// const data = await response.json() as number;
// return data;