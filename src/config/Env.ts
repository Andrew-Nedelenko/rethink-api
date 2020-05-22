import dotenv from 'dotenv';
import { join } from 'path';


class Env {
  private readonly process = process.env

  constructor() {
    const root = join.bind(this, __dirname, '../../');
    dotenv.config({ path: root('.env') });
  }

  getEnv(param: string) {
    return this.process?.[param];
  }
}


export const env = (param: string) => new Env().getEnv(param);
