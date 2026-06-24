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
| 01 | Introduction and setup | 학습 환경과 저장소 운영 방식 정리 | Not started |
| 02 | Fundamental types | literal type, assignability, `unknown`, `never`, `any` 구분 | Not started |
| 03 | Classes | class, constructor, getter/setter, private member, inheritance 타입화 | Not started |
| 04 | Records and objects | object shape, key extraction, optional property, interface/object composition | Not started |
| 05 | Arrays and tuples | tuple, array, parameter tuple, readonly/safe array 패턴 | Not started |
| 06 | Conditional types | `extends`, generic constraint, `infer`, function/tuple type extraction | Not started |
| 07 | Type iteration | tuple/object 순회, map/filter/reduce 형태의 타입 변환 | Not started |
| 08 | Template literal types | 문자열 패턴, union 조합, recursive template matching | Not started |
| 09 | Union types | distributive behavior, narrowing, filtering, object union 변환 | Not started |
| 10 | Mapped types | `keyof`, generic mapped type, optional modifier, key remapping | Not started |
| 11 | Advanced concepts | overload, assertion function, type predicate, branded type | Not started |
| 12 | Extra practices | 주요 고급 타입 기법을 문제 풀이로 복습 | Not started |

## Planned Structure

```text
.
├── README.md
└── src/
    └── 1-Basic-in-TypeScript/
```
