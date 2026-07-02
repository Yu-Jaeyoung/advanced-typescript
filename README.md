# Advanced TypeScript Study

O'Reilly 강의 [Advanced TypeScript: Building Production-Grade Applications](https://www.oreilly.com/videos/advanced-typescript-building/9781806703777/)를 기반으로 TypeScript의 고급 타입 시스템을 학습하고 실습하는 저장소입니다.

## Course

- Instructor: Mohammad Ayashi
- Publisher: Packt Publishing
- Duration: about 9 hours 58 minutes
- Main focus: production-grade TypeScript, advanced type modeling, and safer application code

## Goals

- TypeScript 타입 시스템을 단순 문법이 아니라 설계 도구로 사용한다.
- `unknown`, `never`, `any`의 차이를 실제 코드 안정성 관점에서 설명할 수 있다.
- 제네릭, 조건부 타입, mapped type, template literal type, union 변환을 직접 구현한다.
- type predicate, assertion function, branded type으로 런타임 값과 정적 타입 사이의 경계를 다룬다.
- 각 개념을 작은 예제와 연습 문제로 검증한다.

## Study Flow

1. 강의 챕터를 시청한다.
2. 실습 코드를 `src/`에 작성한다.
3. TypeScript 컴파일 결과로 타입 의도를 검증한다.

## Roadmap

| Chapter | Topic | Study Target | Status |
| --- | --- | --- | --- |
| 00 | Introduction and setup | 학습 환경과 저장소 운영 방식 정리 | Completed |
| 01 | Fundamental types | literal type, assignability, `unknown`, `never`, `any` 구분 | Completed |
| 02 | Classes | class, constructor, getter/setter, private member, inheritance 타입화 | Completed |
| 03 | Records and objects | object shape, key extraction, optional property, interface/object composition | Completed |
| 04 | Arrays and tuples | tuple, array, parameter tuple, readonly/safe array 패턴 | Completed |
| 05 | Conditional types | `extends`, generic constraint, `infer`, function/tuple type extraction | Not started |
| 06 | Type iteration | tuple/object 순회, map/filter/reduce 형태의 타입 변환 | Not started |
| 07 | Template literal types | 문자열 패턴, union 조합, recursive template matching | Not started |
| 08 | Union types | distributive behavior, narrowing, filtering, object union 변환 | Not started |
| 09 | Mapped types | `keyof`, generic mapped type, optional modifier, key remapping | Not started |
| 10 | Advanced concepts | overload, assertion function, type predicate, branded type | Not started |
| 11 | Extra practices | 주요 고급 타입 기법을 문제 풀이로 복습 | Not started |

## Project Structure

```text
.
├── README.md
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── 1-Basic-in-TypeScript/
    │   ├── 0-explainer.ts
    │   ├── 0-practice.ts
    │   ├── 0-sol.ts
    │   └── ...
    ├── 2-Classes/
    │   ├── 0-creating-a-class.ts
    │   ├── 1-class-methods.ts
    │   └── ...
    ├── 3-Objects-and-Records/
    │   ├── explainer.ts
    │   ├── 0. practice.ts
    │   ├── 0. sol.ts
    │   └── ...
    └── 4-Arrays-and-Tuples/
        ├── 0-explainer.ts
        ├── 1-practice.ts
        ├── 1-sol.ts
        └── ...
```
