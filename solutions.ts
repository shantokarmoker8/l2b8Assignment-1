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
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

console.log(processInput(true));

//* ======================[Problem 3]======================

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
