import renderer from 'react-test-renderer';
import {it, describe, expect} from '@jest/globals';
import React from 'react';
import LoginScreen from '../src/screens/login';

describe('renders and test login', () => {
  it('should be present', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should log in with valid credentials', () => {
    const component = renderer.create(<LoginScreen />);
    const instance: any = component.getInstance();
    if (instance) {
      // Simulate user input
      instance.setState({username: 'admin', password: 'admin'});

      // Trigger the login function
      instance.handleLogin();

      // Assert that the user is logged in
      expect(instance.state.loggedIn).toBeTruthy();
    }
  });

  it('should not log in with invalid credentials', () => {
    const component = renderer.create(<LoginScreen />);
    const instance: any = component.getInstance();
    if (instance) {
      // Simulate user input
      instance.setState({username: 'adin', password: 'adminad'});

      // Trigger the login function
      instance.handleLogin();

      // Assert that the user is logged in
      expect(instance.state.loggedIn).toBeFalsy();
    }
  });
});
