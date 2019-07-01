import styled from "styled-components/native";
import { white, black, blue200, blue400, blue600, blue700, blue800, blue900, green700, red700 } from './colors';

export const TextDesk = styled.Text`
  fontSize: 25px;
  color: ${white};
  marginTop: 2px;
  marginLeft: 20;
`;

export const TextDeskAvatar = styled(TextDesk)`
  marginLeft: 0;
`;

export const TextDeskSmall = styled(TextDesk)`
  fontSize: 15px;
`;

export const TextButton = styled.Text`
  textAlign: center;
  fontSize: 15;
  color: ${white};
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  flexDirection: column;
  backgroundColor: ${blue600}
`;

export const DeskContainer = styled.View`
  flexDirection: row;
  height: 90px;
  marginTop: 10px;
  padding: 10px;
  alignItems: center;
  borderRadius: 50;
  borderWidth: 2;
  elevation: 2;
  borderColor: ${blue200}; 
  backgroundColor: ${blue400};
`;

export const TouchableButtonGreen = styled.TouchableOpacity`
  flexDirection: row;
  height: 60px;
  marginTop: 10;
  padding: 20px  
  alignItems: center;
  borderRadius: 45;
  elevation: 2;
  backgroundColor: ${green700};
`;

export const TouchableButtonBlue = styled(TouchableButtonGreen)`
  backgroundColor: ${blue800};
`;

export const TouchableButtonRed = styled(TouchableButtonGreen)`
  backgroundColor: ${red700};
`;

export const Avatar = styled.View`
  height: 50px;
  width: 50px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 25;
  borderWidth: 0;
  marginLeft: 15;
  backgroundColor: ${blue700};
`;

export const TextInputCustom = styled.TextInput`
  marginTop: 20;
  height: 50;
  color: ${black};
  borderColor: ${blue900};
  borderWidth: 2;
  borderRadius: 4;
  paddingLeft: 12;
  fontSize: 18;
  backgroundColor: ${white};
  marginBottom: 15;
`;