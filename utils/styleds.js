export const ListContainer = styled.View`
  flex: 1;
  flexDirection: column;
  marginTop: 0px;
  paddingLeft: 30px;
  paddingRight: 30px;
  paddingBottom: 15px;
  backgroundColor: ${purple600};
  zIndex: 1;  
`;

export const DeskContainer = styled.View`
  flexDirection: row;
  height: 90px;
  marginTop: 15px;
  padding: 10px;
  alignItems: center;
  borderRadius: 50;
  borderWidth: 2;
  borderColor: ${purple200}; 
  shadowOpacity: 1;
  elevation: 6;
  backgroundColor: ${purple400};
`;

export const TextDesk = styled.Text`
  fontSize: 25px;
  color: ${white};
  marginTop: 2px;
  marginLeft: 30;
`;

export const TextDeskSmall = styled(TextDesk)`
  fontSize: 15px;
`;

export const TextDeskAvatar = styled(TextDesk)`
  marginLeft: 0;
`;

export const Avatar = styled.View`
  height: 50px;
  width: 50px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 25;
  borderWidth: 0;
  marginLeft: 15;
  backgroundColor: ${purple700};
`;

export const TouchableOpacityCustom = styled.TouchableOpacity`
  marginTop: 30;
  backgroundColor: ${purple800};
  paddingTop: 10;
  paddingBottom: 10;
  borderRadius: 35;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

export const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${white};
`;