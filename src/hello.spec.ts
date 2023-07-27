import Hello from "@/hello";

it("should say my name", () => {
  const person = new Hello();
  expect(person.sayHello()).toBe("Hello World!");
});
