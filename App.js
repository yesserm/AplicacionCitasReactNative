
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Cita from './componentes/Cita'
import Formulario from './componentes/Formulario';

const App = () => {

  const [mostrarForm, guardarMostrarForm] = useState(false);

  //definir el state de citas
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hooks", propietario: "Yesser", sintomas: "No come" }
  ]);

  //eliminar un paciente de la cita
  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    })
  }

  //mostrar u ocultar el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  }
  
  //cerrar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.encabezado}>Administrador de Citas</Text>

        <View>
          <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btMostrarForm}>
            <Text style={styles.textMostrarForm}>{mostrarForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'}</Text>
          </TouchableHighlight>
        </View>

        {mostrarForm ? (
          <>
            <Text style={styles.encabezado}>Crea una nueva cita</Text>
            <Formulario 
              citas={citas}
              setCitas={setCitas}
              guardarMostrarForm={guardarMostrarForm}
            />
          </>
        ) : (
            <>
              <Text style={styles.encabezado}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
      </View>
    </View>
    </TouchableWithoutFeedback>
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
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1
  },
  btMostrarForm: {
    backgroundColor: '#7d024e',
    padding: 10,
    marginVertical: 10
  },
  textMostrarForm: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default App;
