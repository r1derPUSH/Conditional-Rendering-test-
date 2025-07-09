import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greeting from "./Greeting";

function App() {
 
  return (
    <div>
        <h1>Conditional Rendering in React</h1>

        {/* Weather */}

        <Weather temperature={10} /> <br />
        <Weather temperature={20} /> <br />
        <Weather temperature={30} /> <br />

        {/* UI */}
        <UserStatus loggedIn={true} isAdmin={true}/> <br />
        <UserStatus loggedIn={true} /> <br />

        {/* Greeting */}

        <Greeting timeOfDay="morning" /> <br />
        <Greeting timeOfDay="afternoon" /> <br />

    </div>
  )

}

export default App
