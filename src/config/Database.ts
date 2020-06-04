import mysql, { Pool } from 'mysql';
import { env } from './Env';

class Database {
    private readonly dbhost = env('DBHOST');

    private readonly dbname = env('DBNAME');

    private readonly dbuser = env('DBUSER');

    private readonly dbpass = env('DBPASS');

    connnection(): Pool {
      return mysql.createPool({
        host: this.dbhost,
        database: this.dbname,
        user: this.dbuser,
        password: this.dbpass,
      });
    }

    promiseQuery <T>(query: string, args: Array<T>): Promise<T> {
      return new Promise((res, rej) => {
        const conn = this.connnection();
        conn.query(query, args, (err, result: T) => {
          if (!err) {
            res(result);
            return conn.end();
          }
          conn.end();
          return rej(err);
        });
      });
    }
}

export const promiseQuery = <T>(query: string, args: Array<T>) => new Database().promiseQuery(query, args);
