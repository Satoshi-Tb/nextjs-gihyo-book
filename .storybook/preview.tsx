import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Preview } from "@storybook/react";
import { theme } from "../src/themes";
import * as NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

// Themeの適用
const preview: Preview = {
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    ),
  ],
};
export default preview;

//TODO 課題。有効にすると、default定義重複エラーが発生し、storybookにコンポーネントが表示されない
// next/imageの差し替え
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) =>
//     typeof props.src === "string" ? (
//       <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//     ) : (
//       <OriginalNextImage {...props} unoptimized />
//     ),
// });
