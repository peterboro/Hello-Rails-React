import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
};

const GreetingContainer = connect(mapStateToProps)(Greeting);

export default GreetingContainer;
