import React from 'react';
import styled from 'styled-components';
import Container from 'components/general/Container';

const Title = styled.span`
  font-size: 1.4em;
  font-weight: 700;

  @media(min-width: 60em) {
    font-size: 2em;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.base};
`;

const Header: React.SFC = ({}) => (
  <header>
    <Container>
      <Inner>
        <Title>The Moon up Above</Title>
      </Inner>
    </Container>
  </header>
);

export default Header;
