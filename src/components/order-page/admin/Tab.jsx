import styled from 'styled-components';

export default function Tab({ content, onClick, icon, className }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {icon && icon}
      {content}
    </TabStyled>
  );
}

const TabStyled = styled.span`
  padding: 13px 22px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border-radius: 5px 5px 0 0;
  gap: 13px;

  &.active {
    background: #292729;
    color: #fff;
  }
`;
