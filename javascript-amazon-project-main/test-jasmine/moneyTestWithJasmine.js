import formatCurrency from "../scripts/utils/money.js";

// CREATE  TEST SUITE  FUNCTION IN JASMINE

describe("TEST SUITE: format currency", () => {
  //CREATE A TEST IN JASMINE
  // FIRST TEST
  it("CONVERTS CENTS TO DOLLARS", () => {
    // COMPARISON FUNCTION LIKE IF / TERNARY STATEMENT
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  // SECOND TEST
  it("WORKS WITH ZERO", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  // THIRD TEST
  it("ROUNDS UP CORRECTLY", () => {
    expect(formatCurrency(2000.95)).toEqual("20.01");
  });
  // FOURTH TEST
  it("ROUNDS DOWN CORRECTLY", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
  // FIFTH TEST
  it("ROUNDS DOWN CORRECTLY", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
  // SIXTH TEST
  it("ROUNDS DOWN CORRECTLY", function () {
    expect(formatCurrency(2000.1)).toEqual("20.00");
  });
});
