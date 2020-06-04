import { app } from './App';
import { env } from './config/Env';

const port = env('PORT') || 2280;
if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => global.console.log(`Server started on ${port}`));
} else {
  // @ts-ignore
  app.listen(port, env('HOST'),
    () => global.console.log(`Server started on http://${env('HOST')}:${port} `));
}
