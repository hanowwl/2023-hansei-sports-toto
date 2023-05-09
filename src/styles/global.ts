import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: #f4f5f9;
  }

  #app {
    height: 100%;
    width: 100%;
    max-width: 640px;

    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    background-color: #ffffff;
    margin: 0 auto;
  }

  p {
    margin: 0;
  }

  button {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
`;
