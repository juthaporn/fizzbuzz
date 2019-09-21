class FizzBuzz {
  static say(number) {
    switch (true) {
      case number % 15 === 0:
        return "FizzBuzz";
        brack;
      case number % 3 === 0:
        return "Fizz";
        brack;
      case number % 5 === 0:
        return "Buzz";
        brack;

      default:
        return number;
        brack;
    }
  }
}

module.exports = FizzBuzz;
