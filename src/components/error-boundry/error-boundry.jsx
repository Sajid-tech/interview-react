// A JavaScript error in a part of the UI shouldn't break the whole app.
// To solve this, React 16 introduced Error Boundaries.

// Error Boundaries are React components that catch JavaScript errors anywhere
// in their child components, log those errors, and display a fallback UI
// instead of crashing the entire app.

// ❌ Error Boundaries do NOT catch:
// 1. Event handlers
// 2. Asynchronous code (like setTimeout, requestAnimationFrame, callbacks)
// 3. Server-side rendering
// 4. Errors thrown inside the Error Boundary itself

// Lifecycle methods used:
// getDerivedStateFromError()
// componentDidCatch()

import React from 'react'


// show without error 


// class ErrorBoundry extends React.Component{
//     state = {hasError : false}

//     static getDerivedStateFromError(){
//         return {hasError: true}
//     }


//     componentDidCatch(error,info){
//         console.log("Caught by Error Boundry",error,info)
//     }

//     render(){
//         if(this.state.hasError){
//             return (
//                 <>
//                 <h2>Something went wrong</h2>
//                 </>
//             )
//         }
//         return this.props.children
//     }
// }


// with error redenr 
// class ErrorBoundry extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {hasError:false, error:null}
//     }
   

//     static getDerivedStateFromError(error){
//         return {hasError: true, error}
//     }


//     componentDidCatch(error,info){
//         console.log("Caught by Error Boundry",error,info)
//     }

//     render(){
//         if(this.state.hasError){
//             return (
//                 <>
//                 <h2>Something went wrong</h2>
//                 <p>{this.state.error?.message}</p>
//                 </>
//             )
//         }
//         return this.props.children
//     }
// }



class ErrorBoundry extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false , error:null}

    }


    static getDerivedStateFromError(error){
        return {hasError: true, error}
    }

    componentDidCatch(error,info){
        console.log(`Caught by error Boundry`, error, info)
    }

    render(){
        if(this.state.hasError){
            return (
               <>
                <h2>Something wrong!!</h2>
                <h2>{this.state.error?.message}</h2>
               
               </>
            )
        }

        return this.props.children
    }
}




export default ErrorBoundry

