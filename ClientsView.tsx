import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ClientsList from './ClientsList';
import ActiveCheckbox from './ActiveCheckbox';
import getClients from './actionCreators';

const styles = StyleSheet.create(
{
    container: {
      flex: 1,
      backgroundColor: '#05192B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#FFD'
    }
});

export default function ClientsView()
{
    const state = useSelector((state) => (state));
    const dispatch = useDispatch();
    
    const showClients = () => {
        dispatch(getClients());
    }
    return (
        <View style={styles.container}>
            <Button onPress={showClients}>Obtener clientes</Button>
            {
                state.error ?
                <Text>{state.error}</Text> :
                <ClientsList pending={state.pending} clients={state.clients} 
                filteredClients={state.filteredClients}/>
            }
            <ActiveCheckbox />
            <Text style={styles.text}>ocultar inactivos</Text>
            <StatusBar style="auto" />
        </View>
    );
};