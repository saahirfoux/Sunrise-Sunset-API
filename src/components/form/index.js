import React from 'react';
import Actions from '../shared/button';
import InputField from './children/inputField'
import { connect } from 'react-redux';
import './styles/form.css';

const Form = ({dispatch, list}) => {
    const handleAdd = (item) => {
        dispatch({type: 'add', payload: item});
    }

    return (
        <>
            {list.map((location, index) => {
                return (<InputField key={index} handleAdd={handleAdd} model={location} index={index}/>)
            })}
            <Actions allowSubmit={true}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
export default connect(mapStateToProps)(Form);
