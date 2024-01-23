import logo from './logo.svg';
import './App.css';
//Exercise 2
function App() {
  const getClassName = (temperature) => {
    if(temperature<15){
      return "freezing"
    }
    else if(temperature>15 & temperature<30){
      return "fair"
    }
    else{
      return "hell-scape"
    }
 }

 

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" class ={getClassName(32)}></div>
      </div>
    </div>
  )
}





//Exercise 1

// function App() {
//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]
//   const showCompany = (name, revenue) => {return <div id={name}>{name} makes {revenue} every year</div> }

//   const arr = companies.map(company=> showCompany(company.name, company.revenue))
//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {arr}
//       </div>
//     </div>
//   )
// }

export default App;
