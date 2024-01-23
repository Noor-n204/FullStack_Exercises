import logo from './logo.svg';
import './App.css';


export function AboutUs() {
  return <p>This is an example of an about us page~</p>
}

export function Nav() {
  return (
    <div id="nav"><span>Home</span><span>About</span></div>
    )
  }
  
  export function LandingPage(){
    return (
      <h1>Welcome!</h1>
      )
    }
    
    export function SignUp (){
      return (
        <h1>SignUp!</h1>
        )
    }
    
    export function Blurb (){
      return (
        <h1>Blurb!</h1>
        )
    }

    export function About (){
      return (
        <div>
          <SignUp />
          <Blurb />  
        </div>
        
        )
    }
    
  export function App() {
      let isUserLoggedIn = localStorage.getItem('loggedIn')
      let componentToDisplay = isUserLoggedIn ?
          <LandingPage /> :
          <AboutUs />
    
      return (
          <div className="app">
              <Nav />
              <About />
              {componentToDisplay}
          </div>
      )
    }


export function Sum() {
  const num1 = 9
  const num2 = 3
  return (
      <div>
          The sum is {num1 + num2}
      </div>
  )
}


//export default App;
