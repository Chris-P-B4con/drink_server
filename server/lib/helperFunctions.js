exports.checkObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (key of Object.keys(obj1)) {
      if (key === "createdAt") continue;
      if (!(key in obj2) || !(obj2[key] === obj1[key])) return false;
    }
  }
  return true;
};

exports.checkOdddbjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  } else return false;
};
