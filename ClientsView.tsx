import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import ClientsList from './ClientsList';
import getClients from './actionCreators';

const styles = StyleSheet.create(
{
    container: {
      flex: 1,
      backgroundColor: '#05192B',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default function ClientsView()
{

    const dispatch = useDispatch();
    
    const showClients = () => {
        dispatch(getClients());
    }

    return (
        <View style={styles.container}>
            <Button onPress={showClients}>Obtener clientes</Button>
            <ClientsList />
            <StatusBar style="auto" />
        </View>
    );
};