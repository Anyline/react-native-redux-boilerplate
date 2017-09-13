import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import * as userActions from '../containers/UserContainer/actions';

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 100%;
`;

const Image = styled.Image`
    display: flex;
    width: 380px;
    height: 200px;
`;

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (this.props.user.get('firstTimeStartingApp')) {
      this.props.setUserNotFirstUsage();
    }
  }

  render() {
    return (
        <Container>
          <Image source={require('../assets/logo.png')}/>
        </Container>
    );
  }
}

Start.navigationOptions = {
  title: 'Start',
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUserNotFirstUsage: result => dispatch(userActions.setUserNotFirstUsage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
