import React from 'react';
import { connect } from 'react-redux';
import './styles/results.css';
import Actions from '../shared/button'

const Results = ({ results }) => {
  console.log(results, 'The results')
  return (
    <div className={'container_result-list'}>
        {results.map((item, index) => {
            return (
                <div key={index} className={'container_result-item'}>
                    <div className={'element_result-item-number'}>{`#${index}`}</div>
                    <div className={'container_result-item-info'}>
                        <div className={'element_result-item-time'}>{`Sunrise: ${item.sunrise}`}</div>
                        <div className={'element_result-item-time'}>{`Sunset: ${item.sunset}`}</div>
                    </div>
                </div>        
            )
        })}
        <Actions/>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}
export default connect(mapStateToProps)(Results);