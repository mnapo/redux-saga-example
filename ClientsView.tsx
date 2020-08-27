import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Button, Checkbox, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ClientsList from './ClientsList';
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
    const [checked, setChecked] = React.useState(false);
    const state = useSelector((state) => (state));
    const dispatch = useDispatch();
    
    const showClients = () => {
        dispatch(getClients());
    }

    const setFilter = () => {
            dispatch(
                {type: "SET_CLIENTS_FILTER", 
                filter: (value) => {return value.active;}
            });
        setChecked(!checked);
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
            <Checkbox status={checked ? "checked" : "unchecked"} onPress={setFilter}/>
            <Text style={styles.text}>ocultar inactivos</Text>
            <StatusBar style="auto" />
        </View>
    );
};