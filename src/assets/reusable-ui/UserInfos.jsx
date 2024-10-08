import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { reload } from '../../utils/Reload';

export default function UserInfos({ icon, name }) {
  return (
    <UserInfosStyled>
      <div className='user-infos'>
        <div className='name'>
          <h4>
            Hey, <span>{name}</span>
          </h4>
        </div>
        <span className='deconnexion'>
          <p onClick={reload}>Se déconnecter</p>
        </span>
      </div>

      {icon}
    </UserInfosStyled>
  );
}

const UserInfosStyled = styled.div`
  min-width: 120px;
  display: flex;
  align-items: center;
  column-gap: 4px;

  .name {
    display: flex;
    font-family: 'Open Sans', sans-serif;
  }

  h4 {
    font-weight: 400;
    color: #747b91;
  }

  span {
    color: #ffa01b;
    font-weight: 700;
  }

  p {
    color: #747b91;
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    cursor: pointer;
  }

  svg {
    color: #747b91;
    font-size: 36px;
  }
`;
