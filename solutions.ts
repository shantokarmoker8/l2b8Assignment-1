//* ======================[Problem 1]======================

const multiplyValue = (value: number, multiplier: number = 2) => {
  return value * multiplier;
};

multiplyValue(1, 2);

//* ======================[Problem 2]======================

type Value = string | number | boolean;

const processInput = (value: Value) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
};

console.log(processInput(" hello WorLd"));
