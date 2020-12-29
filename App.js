
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Cita from './componentes/Cita'

const App = () => {

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hooks", propietario: "Yesser", sintomas: "No come" },
    { id: "2", paciente: "Redux", propietario: "Juan", sintomas: "No duerme" },
    { id: "3", paciente: "Native", propietario: "María", sintomas: "No responde" }
  ]);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.encabezado}>Administrador de Citas</Text>

      <FlatList
        data={citas}
        renderItem={({item}) => <Cita item={item} /> }
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  encabezado: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default App;
