import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs >
          <Left/>
          <Body>
              <Title>News App</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}