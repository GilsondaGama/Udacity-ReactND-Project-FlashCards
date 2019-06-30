import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Icon } from 'react-native-material-ui';
import { View, TouchableOpacity, FlatList, Animated } from "react-native";

import styled from "styled-components/native";
import { white, blue200, blue400, blue600, blue700, blue800 } from '../../utils/colors';

import * as DecksActions from "../actions/decks";

class DeckList extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  static navigationOptions = {
    headerTitle: "DeckList"
  };

  componentWillMount() {
    this.props.loadDeckList();
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  renderItem(item) {
    const { opacity } = this.state;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')} >
        <DeskContainer as={Animated.View} style={[{ opacity }]}>
          <Avatar>
            <TextDeskAvatar >
              {item.title.charAt(0).toUpperCase()}
            </TextDeskAvatar>
          </Avatar>

          <View>
            <TextDesk >
              {item.title}
            </TextDesk>
            <TextDeskSmall >
              {item.questions.length} Cards
            </TextDeskSmall>
          </View>
        </DeskContainer>
      </ TouchableOpacity >
    );
  };

  render() {
    const { decks } = this.props;

    const data = Object.keys(decks).map(key => {
      return { key, ...decks[key] };
    });

    return (
      <Fragment>
        <ListContainer >
          <FlatList
            data={data}
            renderItem={({ item }) => this.renderItem(item)}
          />

          <TouchableOpacityCustom
            onPress={() =>
              this.props.navigation.navigate("NewDeck")
            }>
            <Icon
              name="add-circle"
              color={white}
              size={40}
            />
            <TextButton >
              NEW DECK
            </TextButton>
          </TouchableOpacityCustom>
        </ListContainer>
      </Fragment>
    );
  }
}

const TextDesk = styled.Text`
  fontSize: 25px;
  color: ${white};
  marginTop: 2px;
  marginLeft: 30;
`;

const TextDeskAvatar = styled(TextDesk)`
marginLeft: 0;
`;

const TextDeskSmall = styled(TextDesk)`
fontSize: 15px;
`;

const TextButton = styled.Text`
  textAlign: center;
  fontSize: 15;
  color: ${white};
`;

const ListContainer = styled.View`
  flex: 1;
  alignItems: center;
  flexDirection: column;
  marginTop: 0px;
  paddingLeft: 30px;
  paddingRight: 30px;
  paddingBottom: 15px;
  backgroundColor: ${blue600};
  zIndex: 1;  
`;

const DeskContainer = styled.View`
  flexDirection: row;
  height: 90px;
  marginTop: 15px;
  padding: 10px;
  alignItems: center;
  borderRadius: 50;
  borderWidth: 2;
  borderColor: ${blue200}; 
  shadowOpacity: 1;
  elevation: 6;
  backgroundColor: ${blue400};
`;

const Avatar = styled.View`
  height: 50px;
  width: 50px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 25;
  borderWidth: 0;
  marginLeft: 15;
  backgroundColor: ${blue700};
`;

const TouchableOpacityCustom = styled.TouchableOpacity`
  width: 200px;
  marginTop: 10;
  backgroundColor: ${blue800};
  paddingTop: 5;
  paddingBottom: 5;
  borderRadius: 50;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(DeckList);

