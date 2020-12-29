import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const Cita = ({ item }) => {

    const dialogoEliminar = () => {
        console.log("eliminando...")
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar()} style={styles.btEliminar}>
                    <Text style={styles.textEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    }, 
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    },
    texto: {
        fontSize: 18
    },
    btEliminar: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 10
    },
    textEliminar: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Cita;