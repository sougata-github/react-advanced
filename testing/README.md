## Testing

Testing is the process of checking a program or application to make sure it works correctly. It's like double-checking your work to ensure everything works as expected

### Automated Test Types

- Unit Tests
- Integration Tests
- End-to-end Tests

### Unit Tests

Unit testing is where developers test individual components of an application, like `functions` or `classes`, to ensure they work as expected. These tests focus on small, isolated parts of code.

### Integration Testing

Integration testing is about checking how different parts of an application work together. While unit tests focus on individual components, integration tests ensure that modules, databases, APIs, and other services interact correctly.

### End to End Testing

End-to-end testing simulates real user scenarios to make sure the entire application works as expected from start to finish. It tests the whole system, including front-end, back-end, and any external services, to ensure everything integrates and functions properly in a real-world environment.

### Testing Framerworks

- Jest
- Vitest
- Cypress
- Playwright

We'll be focusing on Vitest

- Fast✅
- ESM✅
- TypeScript✅
- JSX✅

`describe` function is used to group related test cases together. It helps organise tests into logical blocks, making the test ouput more readable and structured.

Both `it` and `test` are used to define individual test cases. They work the same way, and we can use either one to write a test.

`expect` is a function used to make `assertions` in our tests. An assertion is a statement that checks if a value meets a certain condition (like equality, truthiness, etc). We use expect to check if the result of a test is what expect it to be.

```typescript
describe("Description", () => {
  it("A description of what the test is checking", () => {
    expect(value).toBe(expected_result);
  });
});
```

### AAA Pattern

- Arrange

  Set up everything for the test. (variables, mock data, etc)

- Act

  Perform the action that you want to test. (ex: call a function)

- Assert

  Verify that the result of the action is what you expect.

```typescript
test("should add two numbers", () => {
  //Arrange: Set up data
  const a = 1;
  const b = 1;

  //Act: Perform the action (call the function)
  const result = a + b;

  //Assert: Verify the result
  expect(result).toBe(2);
});
```
