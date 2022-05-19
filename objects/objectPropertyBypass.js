/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
const course = { name: 'JS: React', slug: 'js-react' };
for (const prop in course) {
  console.log(`course.${prop} = ${course[prop]}`);
}
// course.name = JS: React
// course.slug = js-react

const keys = Object.keys(course); // [ 'name', 'slug' ]
console.log(keys);

for (const key of keys) {
  console.log(course[key]);
}

// get values
const values = Object.values(course); // [ 'JS: React', 'js-react' ]

for (const value of values) {
  console.log(value);
}

// get keys and values
const entries = Object.entries(course);

for (const [key, value] of entries) {
  console.log(key);
  console.log(value);
}
