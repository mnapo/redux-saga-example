import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Button, Checkbox, Text, Searchbar} from 'react-native-paper';
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
    const [searchQuery, setQuery] = React.useState("");
    const state = useSelector((state) => (state));
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getClients());
    }, []);

    const onChangeSearch = (value) => {
        dispatch({
            type: "SET_CLIENTS_SEARCH_AND_FILTER",
            query: value,
            filter: (value) => {return value}
        });
        setQuery(value);
    }

    const onChangeCheck = () => {
        !checked ?
        dispatch({
            type: "SET_CLIENTS_FILTER", 
            filter: (value) => {return value.active}
        }) :
        dispatch({
            type: "SET_CLIENTS_FILTER", 
            filter: () => {}
        });
        setChecked(!checked);
    }

    return (
        <View style={styles.container}>
            <Searchbar onChangeText={onChangeSearch} value={searchQuery}/>
            <Text style={styles.text}>
                {state.filteredClients.length ? state.filteredClients.length : state.clients.length}
                /{state.clients.length} clientes mostrados
            </Text>
            {
                state.error ?
                <Text>{state.error}</Text> :
                <ClientsList pending={state.pending} clients={state.clients} 
                filteredClients={state.filteredClients}/>
            }
            <Checkbox status={checked ? "checked" : "unchecked"} onPress={onChangeCheck}/>
            <Text style={styles.text}>ocultar inactivos</Text>
            <StatusBar style="auto" />
        </View>
    );
};