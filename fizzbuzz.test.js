const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 4 expect 4", () => {
    const result = FizzBuzz.say(4);
    expect(result).toEqual(4); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 3 expect 3", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("Fizz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 5 expect 5", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("Buzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 15 expect 15", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("FizzBuzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 30 expect 30", () => {
    const result = FizzBuzz.say(30);
    expect(result).toEqual("FizzBuzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 50 expect 50", () => {
    const result = FizzBuzz.say(50);
    expect(result).toEqual("Buzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 60 expect 60", () => {
    const result = FizzBuzz.say(60);
    expect(result).toEqual("FizzBuzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 70 expect 70", () => {
    const result = FizzBuzz.say(70);
    expect(result).toEqual("Buzz"); //Assert Function
  });
});

describe("Test FizzBuzz", () => {
  test("Test 300 expect 300", () => {
    const result = FizzBuzz.say(300);
    expect(result).toEqual("FizzBuzz"); //Assert Function
  });
});
