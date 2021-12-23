# First things first:

## Installation:

__Create app__
npx create-react-app ytvideo-kata

__Change to directory__
cd ytvideo-kata

__Add hook to display video__
yarn add react-player

__Add hook to retrieve API call__
yarn add axios

__Add themeing libaries, we are using styled components but we will need to install all of mui components to be sure that we have what we need if we want to customize__
yarn add @mui/material @mui/styles @mui/icons-material @emotion/react @emotion/style @mui/styled-engine-sc styled-components

__Add Fonts (feel free to pick your own via https://fontsource.org/fonts)__
yarn add @fontsource/roboto @fontsource/bebas-neue

## In order to start we may need to run in https ##
yarn start HTTPS=true


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

Paper
https://mui.com/components/paper

And more info on Typography:
https://mui.com/components/typography/

## Next setup your API call in api/key.js and youtube.js ##
You will need to get a key from youtube at the following link:
https://developers.google.com/youtube/v3/getting-started

You will place your key in a .env file placed in the app's root directory.
React App will automatically load the key from the .env file. So long as you name it REACT_APP_YOUTUBE_API_KEY, it will be loaded.

## You MUST add your .env file to your .gitignore file, otherwise your key will be public. ##
In key.js you will need to add the following line for the app to work:
export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY



## Example ##

![image of app](https://i.imgur.com/hSzewh6.png)


