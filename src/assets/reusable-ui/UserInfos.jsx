import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          {' '}
          <Link to='/'>Se déconnecter</Link>
        </span>
      </div>

      {icon}
    </UserInfosStyled>
  );
}

const UserInfosStyled = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 4px;

  .name {
    display: flex;
    justify-content: flex-end;
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

  a {
    color: #747b91;
    text-decoration: none;
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
  }

  svg {
    color: #747b91;
    font-size: 36px;
  }
`;
