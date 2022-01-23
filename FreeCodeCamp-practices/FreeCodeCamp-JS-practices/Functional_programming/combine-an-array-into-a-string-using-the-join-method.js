function sentensify(str) {
  let newArr = str.split(/[" ", \-,\,,.]/);
  // separator being anything from the list including
  // " " | "-" |"," |"."
  let finalStr=newArr.join(" ");
  return finalStr; 
}
sentensify("May-the-force-be-with-you");