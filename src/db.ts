import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init() {
    console.log('### database start initialization...');

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, booked INTEGER DEFAULT 0)',
          [],
          () => {
            console.log('### database started...');
            resolve();
          },
          (_, error) => {
            console.log('### database error....', error);

            reject(error);
            return false;
          }
        );
      });
    });
  }
}
