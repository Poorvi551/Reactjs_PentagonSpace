import React from 'react';
import UserData from "./pages/UserData";
const App = () => {
  let username="Poorvi"
  let age=19
  let skills=["HTML","CSS","JavaScript","React"]
  let college="SDIT"
  let address={
    city: "Mangalore"
  }
  function greet(){
    return "Welcome"  /* function should always be in returned do not use console.log if u use console.log then the value will not be dispayed*/
  }
  return (
    <>
    <UserData
    a={username}
    age={age}
    skills={skills.join(" ")}
    college={college}
    address={address}
    greet={greet}

    />
    </>

  )
}
export default App;