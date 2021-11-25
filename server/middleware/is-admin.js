module.exports = (req, res, next) => {
    if (req.session.user.role !== ADMIN) {
        return res.status(401).json({success: "", error: "You do not have authorization for this data."});
    }
    next();
}