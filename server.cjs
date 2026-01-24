const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

app.db = router.db; // required for json-server-auth

app.use(middlewares);
app.use(jsonServer.bodyParser);

// auth middleware
app.use(auth);

// db routes
app.use(router);
