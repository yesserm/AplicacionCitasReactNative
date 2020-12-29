import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    ScrollView
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {

    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [celular, guardarCelular] = useState('');
    const [sintomas, guardarSintomas] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (time) => {
        const opciones = { hour: 'numeric', minute: '2-digit' };
        guardarHora(time.toLocaleString('en-US', opciones));
        hideTimePicker();
    };
    const crearNuevaCita = () => {
        if (paciente.trim() === '' || propietario.trim() === '' || celular.trim() === '' ||
            fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            console.log("algo fallo al validar");
            mostrarAlerta();
            return;
        }
    }

    //mostrar alerta
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',  //titulo de la alerta
            'Todos los campos son obligatorios', //mensaje de la alerta
            [
                'OK' //arreglo para los botones
            ]
        )
    }

    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Propietario: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Celular: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarCelular(texto)}
                        keyboardType='phone-pad'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha: </Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora: </Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                    />
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas: </Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btSubmit}>
                        <Text style={styles.textSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btSubmit: {
        backgroundColor: '#7d024e',
        padding: 10,
        marginVertical: 10
    },
    textSubmit: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Formulario