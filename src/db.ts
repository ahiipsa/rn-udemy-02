import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import {TPost} from './types';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init() {
    console.log('### database start initialization...');

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY NOT NULL, date TEXT, text TEXT NOT NULL, img TEXT, booked INTEGER DEFAULT 0)',
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

  static getPostList() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM post;',
          [],
          (_, result) => {
            resolve(result.rows._array);
            return [];
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }

  static createPost(post: {
    text: string;
    date: string;
    booked: boolean;
    img: string;
  }) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO post (text, img, booked, date) VALUES (?, ?, ?, ?)`,
          [post.text, post.img, 0, post.date],
          (_, result) => {
            console.log('### post Created', result);

            resolve(result.insertId);
          },
          (_, error) => {
            console.log('### post create error', error, _);

            reject(error);
            return false;
          }
        );
      });
    });
  }

  static updatePost(post: TPost) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE post SET booked = ? WHERE id = ?`,
          [post.booked ? 1 : 0, post.id],
          (_, result) => {
            console.log('### post updated', result);

            resolve(result.insertId);
          },
          (_, error) => {
            console.log('### post updating error', error, _);

            reject(error);
            return false;
          }
        );
      });
    });
  }

  static deletePost(post: TPost) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM post WHERE id = ?`,
          [post.id],
          (_, result) => {
            console.log('### post deleted', result);

            resolve(result.insertId);
          },
          (_, error) => {
            console.log('### post deleting error', error, _);

            reject(error);
            return false;
          }
        );
      });
    });
  }
}
