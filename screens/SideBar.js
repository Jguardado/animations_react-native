import React, { Component } from 'react';
import {
  // Platform,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  onSideMenuChange(isOpen) {
    this.setState({
      isOpen,
    });
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const MenuComponent = (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                onPress={() => console.log('Pressed')}
                avatar={l.avatar_url}
                key={i}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
        </List>
      </View>
    );

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={this.onSideMenuChange.bind(this)}
        menu={MenuComponent}
      >
        <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    );
  }
}

export default SideBar;
