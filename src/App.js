import { useState, useEffect } from 'react';
import './styles/app.css';
import { Form, Results } from './components';
import { connect } from 'react-redux';

const App = ({results}) => {
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    setShowResults(results.length ? true : false);
  }, [results]);
  return (
    <div className={'container_app'}>{showResults ? <Results/> : <Form/>}</div>
  );
}

const mapStateToProps = (state) => {
  return {
      results: state.results
  }
}
export default connect(mapStateToProps)(App);