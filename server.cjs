const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('data/users.json');
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(jsonServer.bodyParser);

app.use(auth);
app.use(router);

app.listen(8000, () => {
  console.log('✅ JSON Server Auth running on port 8000');
});
