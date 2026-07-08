// Looping Patterns
// Pseudocode in an imperative language (명령형):
// doSomething();
// while (conditionIsMet) {
//   performRepetitiveTask();
// }

// A recursive function(재귀 함수) in JavaScript:
// const processItems = (input) =>
//   input.length > 0
//     ? processItems(input.slice(1)) // process the rest of the array recursively
//     : "Done";

// A type-level recursive loop (pseudocode)
type ProcessTuple<T extends any[]> =
  T extends [ infer HEAD, ...infer Tail ] // Check if T has at least one element
    ? ProcessTuple<Tail>                  // Recursively process the rest of the tuple
    : "Finished";

// Why Recursion Works Well at the Type Level
// - No Imperative Constructs
// - Functional Style
// - Expressiveness


// ---
// Iterating Through Tuple Types

type Column = {
  key: string;
  entries: unknown[]
}

type DataTable = [ Column, ...Column[] ];

type UserDataTable = [
  { key: "username"; entries: string[] },
  { key: "score"; entries: number[] },
  { key: "active"; entries: boolean[] }
];

type FindColumn<Table, K> = Table extends [ infer First, ...infer Rest ]
  ? First extends { key: K, entries: infer E }
    ? E
    : FindColumn<Rest, K>
  : undefined;

type usernames = FindColumn<UserDataTable, "username">;
type scores = FindColumn<UserDataTable, "score">;
type undefinedTest = FindColumn<UserDataTable, "blabla">

// The Recursion Pattern
/*
* 1. Deconstruct the Tuple; -> extends [infer Head, ...infer Rest]
* 2. Process the Head
* 3. Recurse on the Rest
* 4. Base Case
* */


// ---
// Applying the Map Method in TypeScript

type UserList = [
  { username: "user1", role: "user" },
  { username: "user2", role: "admin" }
]

type MapRoles<List extends unknown[]> =
  List extends [ infer First, ...infer Rest ]
    ? [ ExtractRole<First>, ...MapRoles<Rest> ]
    : [];

type ExtractRole<Obj> = Obj extends { role: infer R } ? R : "no-role";

type RoleList = MapRoles<UserList>;

// type RecursiveMap<List extends unknown[]> =
//   List extends [ infer First, ...infer Rest ]
//     ? [ /* transform First somehow */, ...RecursiveMap<Rest> ]
//     : [];

// ---
// Applying the Filter Method in TypeScript
type SomeValues = [ 1, "hello", true, "bye" ] // ["hello", "bye"]
type FilterStrings<T extends unknown[]> =
  T extends [ infer First, ...infer Rest ]
    ? First extends string
      ? [ First, ...FilterStrings<Rest> ]
      : FilterStrings<Rest>
    : [];

type CheckString = FilterStrings<SomeValues>;

// type SomeFilter<List> =
//   List extends [ infer First, ...infer Rest ]
//     ? First extends /* ... the condition */
//       ? [ First, ...SomeFilter<Rest> ]
//       : SomeFilter<Rest>
//     : [];


// ---
// Applying the Reducer Method in TypeScript


// Reducing Tuple Types
// type Reduce<List, Acc = /* initial value */> =
//   List extends [infer First, ...infer Rest]
//     ? Reduce<Rest, /* new accumulator based on First and Acc */>
//     : Acc;

type ProductValues = [ [ "title", "TV 65' " ], [ "price", 499.99 ] ];
// Expected type: { title: "TV 65'"; price: 499.99 }

type TupleToObject<Tuple, Acc = {}>
  = Tuple extends [ infer Value, ...infer Rest ]
  ? TupleToObject<
    Rest,
    // Check if Value is a valid [Key, Value] pair
    Value extends [ infer Key, infer Value ]
      // Merge the new key-value pair into the accumulator
      ? Acc & { [K in Key & (string | number | symbol)]: Value }
      : Acc
  >
  : Acc;

type Product = TupleToObject<ProductValues>;
// The type `Product` will be { title: "TV 65'"; price: 499.99 }


// ---
// Inferring Constraints
// Type Constraints and Recursion

type ExtendArray<Arr extends unknown[], NewItem> = [ ...Arr, NewItem ];

type ValidResult = ExtendArray<[ 10, 20 ], 30>; // Results in: [10, 20, 30]

// type InvalidResult = ExtendArray<{ wrong: true }, 30>;

type Profile = { title: string };

// type GetTitles<Profiles extends Profile[]> =
//   Profiles extends [{title: infer T}, ...infer Others] -> loose type when using infer keyword
// TS2344: Type Others does not satisfy the constraint Profile[]
//     ? [T, ...GetTitles<Others>]
//     : [];

// Solution #1 add extends keyword
type GetTitles1<Profiles extends Profile[]> =
  Profiles extends [ { title: infer T }, ...infer Others extends Profile[] ]
    ? [ T, ...GetTitles1<Others> ]
    : [];

// Solution #2 using conditional type
type GetTitles2<Profiles extends Profile[]> =
  Profiles extends [ { title: infer T }, ...infer Others ]
    ? [ T, ...GetTitles2<Others extends Profile[] ? Others : never> ]
    : [];

// A cleaner version of Solution #2
type GetTitles3<Profiles extends Profile[]> =
  Profiles extends [ { title: infer T }, ...infer Others ]
    ? [ T, ...GetTitles3<Cast<Others, Profile[]>> ]
    : [];

type Cast<Source, Target> = Source extends Target ? Source : never;
