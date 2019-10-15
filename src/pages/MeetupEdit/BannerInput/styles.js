import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      min-width: 100%;
      max-height: 300px;
      object-fit: fill;
      border-radius: 4px;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
