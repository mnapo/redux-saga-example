import React from 'react';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        text: {
          color: '#FFF',
          fontWeight: "bold",
          marginTop: '50px'
        }
    });

const ClientsList = () => {
    const state = useSelector((state) => (state));

    return (
        state.pending ?
        <Text style={styles.text}>
            Cargando...
        </Text> :
        (Array.isArray(state.clients) && state.clients.length) ?
        <Text style={styles.text}>
            {
                state.clients.map(item => {
                    return <li key={item.name}>{item.name}</li>;
                })
            }
        </Text>: 
        <Text style={styles.text}>
            Presioná para ver una lista detallada
        </Text>
    );
};
export default ClientsList;