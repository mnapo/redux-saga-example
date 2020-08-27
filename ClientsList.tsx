import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        text: {
          color: '#FFF',
          fontWeight: "bold",
          marginTop: '50px'
        }
    });

const ClientsList = (props) => {
    let dataSrc = props.clients;
    if (props.filteredClients.length) {
        dataSrc = props.filteredClients;
    }
    return (
        props.pending ?
        <Text style={styles.text}>Cargando...</Text> :
        props.clients.length ?
                <Text style={styles.text}>
                    {
                        dataSrc.map(item => {
                        return <li key={item.name}>{item.name} - <i>edad:</i> {item.age} (
                        {item.active ? <i>activo</i> : <i>inactivo</i>})</li>;
                        })
                    }
                </Text> :
            <Text style={styles.text}>Presioná para ver una lista detallada</Text>
    );
};
export default ClientsList;