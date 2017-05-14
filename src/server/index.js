import Koa from 'koa';

import { handler } from './handlers';

const app = new Koa();

app.use(handler);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
