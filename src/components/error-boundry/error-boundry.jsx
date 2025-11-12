// A Javascript error in a part of the UI shouldn't break the whole app . To Solve for React User , React 16 introduces a new concept of an error Boundry  

const { RFC_2822 } = require("moment")

// Error Boundries are React components that catch Javascript eroros anywhere in thier child components , log those error , and display a Fallback error  instead of the component tree that crashed

// 4 things that error boundy will not work 
// 1. Event Handlers 
// 2 .Asynchronous Code ( Like setTimeout or  requestAnimationFrame , callbacks )
// 3. Server Side Rendering 
// 4. Error thrown in Error Boundry itself

