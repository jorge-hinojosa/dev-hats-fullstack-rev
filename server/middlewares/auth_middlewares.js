module.exports = {
  checkForUser: (req, res, next) => {
    if (!req.session.user) {
      req.session.user = {
        loggedIn: false
      }
      res.json(req.session.user)
    }
    res.json(req.session.user);
    next();
  }
}