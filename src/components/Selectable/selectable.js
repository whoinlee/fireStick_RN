/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

type TProps = {
  onFocus?: Function;
  onBlur?: Function;
  onPress?: Function;
  style?: any;
}

type TState = {
  isFocused: boolean;
  registered: boolean;
}

type TContext = {
  registerSelectable: Function;
}

export default function selectable(WrappedComponent: any) {
  return class Selectable extends Component {
    static contextTypes = {
      registerSelectable: PropTypes.func,
    }

    state: TState = {
      isFocused: false,
      registered: false,
    }

    props: TProps
    context: TContext
    //-- commented out by WhoIN, as ref for _wrappedComponent removed from <WrappedComponent> node
    //_wrappedComponent: any

    _handleFocus = () => {
      const { onFocus } = this.props;

      this.setState({ isFocused: true });

      if (onFocus) {
        onFocus();
      }
    }

    _handleBlur = () => {
      const { onBlur } = this.props;

      this.setState({ isFocused: false });

      if (onBlur) {
        onBlur();
      }
    }

    _handleLayout = (e: Object) => {
      const { layout } = e.nativeEvent;
      if (this.state.registered) {
        return;
      }

      const {
        onPress = () => {},
      } = this.props;

      this.context.registerSelectable(
        { x: layout.x, y: layout.y },
        this._handleFocus,
        this._handleBlur,
        onPress
      );

      this.setState({ registered: true });
    }

    render() {
      //-- WhoIN :: WrappedComponent node updated
      // <WrappedComponent ref={x => (this._wrappedComponent = x)} {...this.props} />
      return (
        <View
          onLayout={this._handleLayout}
          style={[this.props.style, this.state.isFocused ? styles.active : {}]}
        >
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  active: {
    opacity: 0.5,
  },
});
