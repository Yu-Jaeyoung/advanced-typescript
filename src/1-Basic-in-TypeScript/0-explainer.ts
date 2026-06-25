type PrimitiveTypes =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

let message: string;

message = "hello";
message = "bye";
// message = 54;

42; // literal type, concrete instance of primitive type
false; // literal type

// --
// Exact Values as Types
type SomeNumber = 80
type SomeString = "blabla"

const correct: SomeNumber = 80;
// const incorrect: SomeNumber = 50; // TS2322: Type 50 is not assignable to type 80

const correctStr: SomeString = "blabla";
// const incorrectStr: SomeString = "blabla2" // TS2322: Type "blabla2" is not assignable to type "blabla"

// Why literal type is important ? -> Allow only a limited set of values
type Mode = "dev" | "deb" | "prd"
// helps prevent error by restricting the possible value

// const mode: Mode = "whatever"; // TS2322: Type "whatever" is not assignable to type Mode

// --
// Combining Types

// Union Type = collection of possible types.
type NotificationMethod = "email" | "sms" | "push";

// Intersection Type = // must satisfy all the individual types
type Person = { name: string }
type Recordable = { recordId: number }

type Employee = Person & Recordable;

// --
// The Unknown type

type narrowest = string & unknown; // string
type widest = string | unknown; // unknown
type widestWithLiteral = string | "hi"; // string
type mix = string | "hi" | number | 123; // string | number

// --
// The Never Type
type cannotHappen = string & number;

// --
// The Any Type
type stayAwayFrom = any;
// especially when consuming external libraries ...

// --
// Representing Data in TypeScript
// Object type: A product with fixed keys and different types.
type ProductDetails = {
  title: string;
  inStock: boolean;
}

// Record type: A configuration where every property value is a number
type ConfigSettings = {
  [setting: string]: number;
}

// Tuple type: A fixed-length list representing a log entry.
type LogEntry = [ timestamp: Date, level: string, message: string ];

// Array type: A list of ratings, where each rating is a number.
type Ratings = number[];

