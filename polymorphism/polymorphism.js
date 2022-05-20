/* eslint-disable no-console */
const hasComments = (commentable) => commentable.getComments().length > 0;

const article = Article.first();
console.log(hasComments(article));

const topic = Topic.first();
console.log(hasComments(topic));
