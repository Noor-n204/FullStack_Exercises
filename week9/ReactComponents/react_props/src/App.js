import logo from './logo.svg';
import './App.css';
import Company from './components/Company';
import Wardrobe from './components/Wardrobe';

function generateCompanyTags(companies){
  let companiesArr = []
  for(let i of companies){
    companiesArr.push(<Company name={i.name} revenue={i.revenue}/>)
  }
  return(
    companiesArr
  )
}

const upperCase = name => name.toUpperCase()

function App() {
  let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }]

  return (
    <Wardrobe />
    // <div>
    // {companies.map(c => <Company name={upperCase(c.name)} revenue={c.revenue} key = {c.name} />)}
    // </div>
    // <div>
    //   {generateCompanyTags(companies)}
    // </div>
      
  )
}



export default App;
