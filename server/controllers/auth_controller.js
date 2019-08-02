const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const {firstName, lastName, username, password} = req.body;
    if (!firstName || !lastName || !username || !password) {
      res.status(406).json({
        error: "Please fill in all information"
      });
    } else {
      const db = req.app.get('db');
      const user = await db.check_for_user([username]).catch(err => console.log(err));
      
      if (user.length > 0) {
        res.status(401).json({error: "Username already taken"});
      } else {
        const hash = await bcrypt.hash(password, 10).catch(err => console.log(err));
        await db.add_user([firstName, lastName, username, hash]);

        req.session.user = {
          firstName, 
          lastName, 
          username,
          loggedIn: true
        }
        console.log(req.session.user)
        res.status(200).json(req.session.user);
      }
    }
  },
  checkout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }

}