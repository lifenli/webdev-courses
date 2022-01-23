
function urlSlug(title) {
  let separator = /[" "]+?\s*/;
let slug=title.split(separator);
console.log(title);
console.log(slug);
let newSlug = slug.concat().filter(a => a !== "");
//  this is to filter out any empty element in an array
let finalURLSlug=newSlug.join("-").toLowerCase();
// join the array to a string and turn it lower case
console.log(finalURLSlug);
return finalURLSlug;
}

urlSlug(" Winter Is  Coming")
