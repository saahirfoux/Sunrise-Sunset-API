import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const InputField = ({model, dispatch, index, list}) => {

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const handleChangeLongitude = ({target: {value}}) => {
      setLongitude(value)
  }
  const handleChangeLatitude = ({target: {value}}) => {
      setLatitude(value)
  }

  const handleAdd = (item) => {
    console.log(item, 'Teghasd')
    dispatch({type: 'add', payload: item})
  }
  const handleUpdate = (item) => {
    dispatch({type: 'update', payload: item})
  }
  const handleRemove = (item) => {
    console.log(model.index, 'index', index)
    dispatch({type: 'remove', payload: item})
  }
  const handleAction = () => {
    if (canAdd()) {
      handleAdd(getModel());
      setDisabled(true);
    } else {
      handleRemove(getModel())
    }
  }
  const getModel = () => {
    return {
      index: model.index,
      longitude: longitude,
      latitude: latitude
    }
  }
  const canAdd = () => {
    // if the first or newest
    if (list.length === 1 || model.index === list.length -1) {
      return true;
    } else {
      return false;
    }
  }
  const maxIsReached = () => {
    return model.index + 1 === 5
  }

  useEffect(() => {
    if (!canAdd() && maxIsReached()) {
      handleUpdate(getModel());
    }
  }, [longitude, latitude])

  return (
    <div className={'container_form-elements'}>
        <div className={'container_input-fields'}>
            <input disabled={isDisabled} onChange={handleChangeLongitude} className={'element_input-field'} placeholder={'Longitude'}></input>
            <input disabled={isDisabled} onChange={handleChangeLatitude} className={'element_input-field'} placeholder={'Latitude'}></input>
        </div>
        {canAdd() && !maxIsReached() && (<div onClick={handleAction} className={'element_form-button'}>Add</div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      list: state.list
  }
}
export default connect(mapStateToProps)(InputField);
