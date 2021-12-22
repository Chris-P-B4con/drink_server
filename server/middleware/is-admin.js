module.exports = (req, res, next) => {
  if (req.session.user.privileges !== "ADMIN") {
    return res
      .status(401)
      .json({ success: "", error: "You are not authorized to do this." });
  }
  next();
};
