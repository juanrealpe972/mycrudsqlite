import {Alert, TextInput, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {styles} from '../styles/style';
import {useNavigation} from '@react-navigation/native';
import {addCategoria} from '../db/database';
import { useState } from 'react';

const FormScreen = () => {
  const [categoria, setCategoria] = useState('');
  const navigation = useNavigation();

  const handleAddCategoria = () => {
    if (!categoria) {
      Alert.alert('Ingrese una categoría');
      return
    } else {
      addCategoria(categoria);
      setCategoria("")
      navigation.navigate('Listar');
    }
  };
  return (
    <View style={styles.containerform}>
      <View>
        <TextInput placeholder="Ingrese la categoría" value={categoria} onChangeText={setCategoria} style={styles.input}/>
        <ButtonComponent title="Registrar categoria" onPress={handleAddCategoria}/>
      </View>
    </View>
  );
};
export default FormScreen;
