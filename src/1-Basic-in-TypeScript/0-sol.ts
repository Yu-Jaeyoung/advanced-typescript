// export const emails = new Set<string>();
export const emails: Set<string> = new Set();

emails.add("test@gtest.com");
emails.add("blabla@BlaBlaBla.org");

// Error
// emails.add(true); // TS2345: Argument of type boolean is not assignable to parameter of type string
// emails.add({ id: "jfa2sdkjfbsdjkf" }); // TS2345: Argument of type { id: string; } is not assignable to parameter of type string

