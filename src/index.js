import React from 'react'
import ReactDOM from 'react-dom'

const Child = props =>{
    const num1 = 23
    const num2 = 42
    const sum = num1 + num2
    props.listen(`I CAN DO MATH! ${num1} + ${num2} is ${sum}`)
    return <div> MATH IS FUN!</div>
}

const Parent = () => {
    const listenToTheChild = childWords =>{
        console.log(`Passed back a variable!!: `, childWords)
    }

    return(
        <>
        <div>It's good to learn math! </div>
        <Child listen={listenToTheChild} />
        </>
    )
}

ReactDOM.render(<Parent />, document.querySelector('#root') )

//--------------------Example 1--------------------
//
// const Goodbye = () => {
//     return <span>Goodbye cruel world!</span> 
// }

// function HelloWorld(){
//     return (
//         <>
//             <div>HELLO WORLD (or literally anything else you want to write here)</div>
//             <Goodbye />
//         </>
//     )
// }
//
//
//ReactDOM.render(<HelloWorld />, document.querySelector('#root'))
//
//
//
//
//
//  This below is used without react fragment and thus will require a div element to wrap the other elements 
//
//function HelloWorld(){
//     return (
//         <div>
//             <div>HELLO WORLD (or literally anything else you want to write here)</div>
//             <Goodbye />
//         </div>
//     )
// }
//
//
//
//
//
//
//
//
//
//------------------Example 2--------------------
//
// const isFrench = true
//
// const Bonjour = () => {
//     return <span>Bonjour</span>
// }
//
// const Hello = () => {
//     return <span>Hello</span>
// }
//
// const sayHello = () =>{
//     if(isFrench){
//         return <Bonjour />
//     }else {
//         return <Hello />
//     }
// }
//
// const name = ' Mike'
//
// const FrenchHelloWorld = () => {
//     return (
//         <>
//             <sayHello />
//             {name}
//         </>
//     )
// }
//
// ReactDOM.render(<FrenchHelloWorld />, document.querySelector('#root'))
//
//
//
//
//
//------------------- Example 3 ---------------------
//
//
// const isLoggedIn = true
// const username = 'reallyCoolGuy88'
//
// const LogInButton = () => (
//     <button onClick={() => alert('Log in, bozo')}> DO THE LOG IN PLEASE</button>
// )
//
// const DisplayLogin = () => {
//     return <> {isLoggedIn && username} </>
// }
//
// // const DisplayLogin = () => {
// //     return <> {isLoggedIn ? username : <LogInButton />} </>
// // }
//
//
// ReactDOM.render(<DisplayLogin/>, document.querySelector('#root'))
//
//
//
//
//
//
//
//
//------------------Example 4-------------------
//
//
// const Hello = ({ name, address}) => {
//     return (
//         <>
//         <span>Hello {name}</span>
//         <span> I KNOW WHERE YOU LIVE {address}</span>
//         </>
//     )
// }
//
// const SayHelloAndPassAProp = () => {
//     return <Hello name={'Mike'} address={'123 Fake Street'} />
// }
//
// // const Hello = props => {
// //     return <span>Hello {props.name}</span>
// // }
//
// // const SayHelloAndPassAProp = () => {
// //     const somebodysName = 'Matt'
// //     return <Hello name={somebodysName} />
// // }
//
// ReactDOM.render(<SayHelloAndPassAProp />, document.querySelector('#root'))
