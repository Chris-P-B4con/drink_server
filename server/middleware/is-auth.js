module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.status(401).json({success: "", error: "You do not have authorization for this data."});
    }
    next();
}
