const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /fires/sync': 'FireController.sync',
  'GET /fires': 'FireController.getAll',
};

module.exports = publicRoutes;
