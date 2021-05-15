import React, { Component } from 'react';
import { Alert, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import {getArticles} from '../../service/news';
import {DataItem} from '../../component/dataItem';
import Modal from '../../component/modal';

export default class ListThumbnailExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {
        getArticles().then(data => {
            this.setState({
                isLoading: false,
                data: data
            })
        }, err => {
            Alert.alert("Error", "Something went wrong!");
        })
    }

  render() {

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop: 10}}>Please wait ...</Text>
      </View>
    ) : (
      <List 
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem data={item} />
        }}
      />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}