export const emails = new Set();

emails.add("test@gtest.com");
emails.add("blabla@BlaBlaBla.org");

// Error
emails.add(true);
emails.add({ id: "jfa2sdkjfbsdjkf" });