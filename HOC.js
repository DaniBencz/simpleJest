'use strict'

const MyComponent = () => {
  <div>
    <h3>Hello</h3>
  </div>
}

// HOC example
function withMath(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component add={(a, b) => { a + b }}></Component>
      )
    }
  }
}

let SmarterComponent = withMath(MyComponent)
