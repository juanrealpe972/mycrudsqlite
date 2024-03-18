import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getCategorias} from '../db/database';
import {styles} from '../styles/style';

const ListaCategorias = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };
    
    fetchCategorias();
    const intervalId = setInterval(() => {
      fetchCategorias();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const renderCategoria = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.textCategoria}>{item.id}</Text>
      <Text style={styles.textCategoria}>{item.nombre}</Text>
    </View>
  );

  return (
    <>
      <Text style={styles.title}>Lista de Categorías</Text>
      <FlatList
        data={categorias}
        renderItem={renderCategoria}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};
export default ListaCategorias;
