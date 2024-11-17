const box = React.createElement(
    'div',
    null,
    "Hello World!"
)
const heading1= React.createElement(
    'h1',
    null,
    'This is heading 1'
)

const container = document.getElementById('container');

// container.innerHTML(heading1);

ReactDom.render(heading1, container);
   

