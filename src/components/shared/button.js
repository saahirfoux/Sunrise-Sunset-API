import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Actions = ({dispatch, list, allowSubmit}) => {

  const handleSubmit = async () => {
      const createPromise = (item) => {
        return new Promise((resolve, reject) => {
            let endPoint = `https://api.sunrise-sunset.org/json?lat=${item.latitude}&lng=${item.longitude}&formatted=1`;
            axios.get(endPoint).then(response => resolve(response.data.results)).catch((error) => reject(error));
        })
      }
      let locationPromises = list.map((item) => {
          return createPromise(item)
      });

      await Promise.all(locationPromises).then((response) => {
          console.log(response, 'The final response');
          dispatch({type: 'submit', payload: response})
      });
  };

  const handleReset = () => {
    dispatch({type: 'reset'});
    dispatch({type: 'clear'});
  }
  return (
    <>
        {allowSubmit && (<div onClick={handleSubmit} className={'element_form-button'}>Submit</div>)}
        <div onClick={handleReset} className={'element_form-button'}>Reset</div>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
  }
  export default connect(mapStateToProps)(Actions);