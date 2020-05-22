import { app } from './App';
import { env } from './config/Env';

if (process.env.NODE_ENV === 'production') {
  app.listen(env('PORT'), () => global.console.log(`Server started on ${env('PORT')}`));
} else {
  // @ts-ignore
  app.listen(env('PORT'), env('HOST'),
    () => global.console.log(`Server started on http://${env('HOST')}:${env('PORT')} `));
}
