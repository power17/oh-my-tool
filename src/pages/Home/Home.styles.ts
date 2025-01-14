import { css } from '@emotion/react';

export const homeStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;

  & > hgroup {
    margin-top: 2rem;
    & > h1 {
      margin: 0.1rem;
      font-size: 2rem;
    }
    & > p {
      margin: 0.1rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.6rem;
    }
  }

  & > p {
    margin: 2rem;
    width: 80%;
    & > img {
      width: 30%;
      float: right;
      margin-left: 1rem;
    }
  }
`;
