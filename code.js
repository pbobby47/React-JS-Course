//! ===== React Code =====

// creating h1 Tag
const h1 = React.createElement(
  "h1",
  {
    id: "firstHeading",
  },
  "This is Heading 1"
);
console.log(h1);

// creating h2 Tag
const h2 = React.createElement(
  "h2",
  {
    id: "secondHeading",
  },
  "This is Heading 2"
);
console.log(h2);

// creating a container and adding h1 and h2 into it.
let container = React.createElement(
  "section",
  {
    id: "mainContainer",
  },
  [h1, h2]
);

// Targetting the root element, It will specify where the React code have to render
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// render() method will render data into DOM.
root.render(container);
