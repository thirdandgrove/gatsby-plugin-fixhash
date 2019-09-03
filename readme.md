# Fixhash

fixes the hash scroll-to function that is a known issue with reach router

## Install

`yarn add gatsby-plugin-fixhash`

## Use

in gatsby-config.js

```js
plugins: [
  {
    resolve: `gatsby-plugin-fixhash`,
    options: {
      offsetY: 20 // number, optional offset
    }
  }
];
```
