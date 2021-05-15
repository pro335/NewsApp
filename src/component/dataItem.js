import React, {Component} from 'react';
import {ListItem, Left, Thumbnail, Body, Text, Button} from 'native-base';

class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage !== null ? this.data.urlToImage : "https://img.etimg.com/thumb/msid-78922982,width-1070,height-580,imgsize-116609,overlay-etmarkets/photo.jpg" }} />
                </Left>
                <Body>
                    <Text>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>

        )
    }
}

export default DataItem;