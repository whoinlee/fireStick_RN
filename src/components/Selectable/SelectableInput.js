/* @flow */

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import selectable from './selectable';

const Selectable = selectable(TextInput);

export default class SelectableInput extends Component {
  _input: any

  _handleInputPress = () => {
    console.log("INFO SelectableInput :: _handleInputPress, this._input ? " + this._input)
    //-- commented out by WhoIN
    //this._input.focus();
  }

  handleSubmit = () => {
    console.log("INFO SelectableInput :: handleSubmit, this._input ? " + this._input)
    //-- commented out by WhoIN
    //this._input.blur();
  }

  render() {
    //-- WhoIN, i._wrappedComponent won't work as _wrappedComponent has been removed from selectable.js
    return (
      <Selectable
        onPress={this._handleInputPress}
        onSubmitEditing={this.handleSubmit}
        ref={i => (this._input = i ? i._wrappedComponent : null)}
        {...this.props}
      />
    );
  }
}
