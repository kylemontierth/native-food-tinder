import React, { Component } from 'react';
import { Form, Item, Label, Input, Button } from 'native-base';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { createUser } from '../actions/user';

class Register extends React.Component {
  state = { firstName: '', lastName: '',  email: '', password: '' }

  register = () => {
    let { nickname, email, password, passwordConfirmation } = this.state
    let { history, dispatch } = this.props;
    if (password === passwordConfirmation) {
      dispatch(auth({ nickname, email, password, passwordConfirmation }, '/user', history));
    }
  }

  handleChange = (type, val) => {
    this.setState({ [type]: val });
  }

  showButton = () => {
    let { email, firstName,lastName, password } = this.state;
    let show = false;
    if (email.length && firstName.length && lastName.length && password.length )
      show = true;
    return show;
  }

  render() {
    let { firstName, lastName, email, password } = this.state;
    return (
      <Form>
        <Item floatingLabel>
          <Label>First Name</Label>
          <Input 
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ (val) => this.handleChange('firstName', val) }
          />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input 
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ (val) => this.handleChange('lastName', val) }
          />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ (val) => this.handleChange('email', val) }
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input 
            onChangeText={ (val) => this.handleChange('password', val) }
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </Item>
        { this.showButton() ?
          <Button primary block onPress={this.handleSubmit}>
            <Text style={styles.loginButton}>Register</Text>
          </Button> : null
        }
        <Link to="/login">
          <Text style={styles.link}>Already have an account?</Text>
        </Link>
      </Form>
    )
  }
}

const styles = {
  link: {
    textAlign: 'center',
    paddingTop: 40,
  },
  loginButton: {
    color: 'white'
  }
}

export default connect()(Register);