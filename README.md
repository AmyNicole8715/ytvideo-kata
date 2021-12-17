# First things first:

## Installation:

<<Create app>>
npx create-react-app ytvideo-kata

<<Change to directory>>
cd ytvideo-kata

<<Add hook to display video>>
yarn add react-player

<<Add themeing libaries, we are using styled components but will need to install all of mui components to be sure that we have what we need>>
yarn add @mui/material @mui/styles @mui/icons-material @emotion/react @emotion/style @mui/styled-engine-sc styled-components

<<Add Fonts (feel free to pick your own via https://fontsource.org/fonts)>>
yarn add @fontsource/roboto @fontsource/bebas-neue

## Next setup your theme in theme/theme.js
To build a custom theme there are several tools available:

For basic theme setup:
https://material.io/design/color/the-color-system.html#color-theme-creation

For custom color palette:
https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=6002ee

A handy color palette generator:
https://www.paletton.com/

### Styled Components ###
The following components will be needed for our app from MUI:

App Bar with Search Field
https://mui.com/components/app-bar/#app-bar-with-search-field

