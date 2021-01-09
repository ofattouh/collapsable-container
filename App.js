import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, UIManager } from 'react-native';

import Panel from './Panel';

export default class App extends Component {
  constructor(props){  
    super(props);
    
    // Disabled by default on Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text style={styles.toolbar}>Animated containers</Text>

        <View style={styles.content}>
          <Panel title={'Container 1'} style={styles.panel}>
            <Text style={styles.panelText}>Temporibus autem quibusdam et aut officiis saepe</Text>
          </Panel>

          <Panel title={'Container 2'} style={styles.panel}>
            <Text style={styles.panelText}>
              Et harum quidem rerum facilis est et expedita ptio cumque.Et harum quidem rerum facilis est et 
                expedita ptio cumque. Et harum quidem rerum facilis est et expedita ptio cumque. Et harum quidem 
                rerum facilis est et expedita ptio cumque
            </Text>
          </Panel>

          <Panel expanded title={'Container 3'} style={styles.panel}>
            <Text style={styles.panelText}>Nullam lobortis eu lorem ut vulputate.</Text>
            <Text style={styles.panelText}>Donec id elementum orci. Donec fringilla lobortis</Text>
          </Panel>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  panel: {
    marginBottom: 10,
  },
  panelText: {
    paddingBottom: 15,
  }
});

// expo init my-app
// https://reactnative.dev/docs/animated
// https://reactnative.dev/docs/easing
