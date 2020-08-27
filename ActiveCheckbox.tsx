import React from 'react';
import {useDispatch} from 'react-redux';
import {Checkbox} from 'react-native-paper';

const ActiveCheckbox = () => {
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch();

    function filter(value){
        return value.active;
    }

    const setFilter = () => {
        dispatch({type: "SET_CLIENTS_FILTER", filter});
    };

    const removeFilter = () => {
        
    }

    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                if (!checked){
                    setFilter();
                }
                setChecked(!checked);
            }}
        />
    );
};
export default ActiveCheckbox;