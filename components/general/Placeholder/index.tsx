import styled from 'styled-components';

const Placeholder = styled.div`
  height: 0;
  padding-bottom: ${({ width, height }: Props) => (width/height) * 100}%;
  background-color: ${({ theme }) => theme.base};
  position: relative;

  > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface Props {
  width: number;
  height: number;
}

export default Placeholder;
