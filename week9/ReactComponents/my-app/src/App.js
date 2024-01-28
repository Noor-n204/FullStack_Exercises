import logo from './logo.svg';
import './App.css';
// import SpotCheck1 from './Components/spotCheck1';
import SpotCheck2 from './Components/SpotCheck2';
import { useState } from 'react'
import SpotCheck5 from './Components/SpotCheck5';
import Hudini from './Components/Hudini';
import Home from './Components/Home';
import Landing from './Components/Landing';

function Calendar(props) {
  return (
    <div id="calendar">
      {props.reservations.map(reservation => <div>{reservation.name} on day {reservation.day}</div>)}
    </div>
  )
}

function Register(props) {
  return (<div id="register">
              you cannot register on
              {props.reservations.map(reservation => <div>{reservation.day} {reservation.time}</div>)}

          </div>)
}

const App = () => {
    // let [reservations, setReservations] = useState([
    //     { day: "Monday", time: 2000, name: "Earl" },
    //     { day: "Monday", time: 1845, name: "Ella" },
    //     { day: "Tuesday", time: 1930, name: "Linda" },
    //     { day: "Wednesday", time: 2015, name: "Anni" }
    // ]);

    let storeOBJ = {
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: true,
      currentPage: "Home"
    }

    let [store, setStore] = useState(storeOBJ)

    return (
        <div>
            {/* <Calendar reservations={reservations} />
            <Register reservations={reservations} /> */}
            {storeOBJ.currentPage=="Landing" ? <Landing user = {storeOBJ.user} store ={[...store.store]}/> :<Home store ={[...storeOBJ.store]} shouldDiscount={storeOBJ.shouldDiscount} setStoreF={setStore} />}
        </div>
    )
}

export default App;
