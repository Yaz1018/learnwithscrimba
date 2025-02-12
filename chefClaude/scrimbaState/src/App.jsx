// import Header from "./Components/Header";
// import Main from "./Components/Main";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   );
// }

import { useState } from 'react';
export default function App() {
  /**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the button flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  const [ isGoingOut, setisGoingOut] = useState("true")

  function handleClick() {
   setisGoingOut(prev => !prev)
  }

  return (
      <main>
          <h1 className="title">Do I feel like going out tonight?</h1>
          <button className="value" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
      </main>
  )
}