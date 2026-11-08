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
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

//* ======================[Problem 4]======================

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
console.log(concatenateArrays([1, 2, 4], [5, 6, 8]));
console.log(concatenateArrays(["a", "b", "c"], ["d", "e", "k"]));

//* ======================[Problem 5]======================

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (courses: Course[]) => {
  return courses.filter((course) => {
    return course.isPublished === true;
  });
};

console.log(getPopularCourses(courses));
