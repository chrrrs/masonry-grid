# masonry-grid

A React and CSS Grid based, dependency free, masonry grid component.

## How to use

First install the package through NPM

`npm install masonry-grid`

Or with Yarn

`yarn add masonry-grid`

Then import the component and wrap the children that should be a part of the grid.

```javascript
import React from "react";
import MasonryGrid from "masonry-grid";

const MyComponent = ({ items }) => {
  return (
    <div>
      <MasonryGrid>
        <div>Hello</div>
        <div>This</div>
        <div>Is</div>
        <div>My</div>
        <div>Grid</div>
      </MasonryGrid>
    </div>
  );
};

export default MyComponent;
```

## Available props

| Prop     | Default | Description                                                                                                                     |
| -------- | :-----: | ------------------------------------------------------------------------------------------------------------------------------- |
| children |   []    |                                                                                                                                 |
| gap      |  100px  | A string with the value of the gap, which should be present between the elements in the grid - support rem, em, px, vw, vh etc. |
| minWidth |   800   | A number representing the minimum width of the elements within the grid.                                                        |
