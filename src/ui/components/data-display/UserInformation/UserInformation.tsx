import React from 'react';
import { 
    UserInformationContainer, 
    UserName, 
    UserDescription, 
    AvatarStyled, 
    RatingStyled 
} from './UserInformation.style';

const UserInformation = (props) => {
  return (
      <UserInformationContainer>
          <AvatarStyled />
          <UserName>julio</UserName>
          <RatingStyled />
          <UserDescription />
      </UserInformationContainer>
  );
};

export default UserInformation;
