import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
  location: 'default',
});

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS categoria (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
      [],
      (sqlTxn, res) => {
        console.log('Tabla creada correctamente');
      },
      error => {
        console.log('Error al crear la tabla' + error.message);
      },
    );
  });
};

export const getCategorias = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM categoria ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Categorias listadas correctamente');
          let len = res.rows.length;
          if (len > 0) {
            let resultado = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              resultado.push({id: item.id, nombre: item.name});
            }
            resolve(resultado);
          } else {
            resolve([]);
          }
        },
        error => {
          console.log('Error al obtener datos' + error.message);
          reject(error);
        },
      );
    });
  });
};

export const addCategoria = categoria => {
  if (!categoria) {
    Alert.alert('Ingrese una categoría');
    return false;
  }

  db.transaction(txn => {
    txn.executeSql(
      `INSERT INTO categoria (name) VALUES (?)`,
      [categoria],
      (sqlTxn, res) => {
        console.log(categoria);
        Alert.alert(`${categoria} Categoría insertada correctamente`);
      },
      error => {
        Alert.alert('Error al adicionar datos' + error.message);
      },
    );
  });
};
