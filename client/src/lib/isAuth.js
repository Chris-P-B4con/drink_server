exports.isAuth = () => {
  fetch("/users/isAuth", {})
    .then((response) => response.status)
    .catch((err) => {
      console.log("Something went wrong");
    });
};

exports.isAdmin = () => {
  fetch("users/isAdmin", {})
    .then((response) => response.status)
    .catch((err) => {
      console.log("Something went wrong");
    });
};
