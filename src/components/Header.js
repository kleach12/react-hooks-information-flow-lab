import React from "react";

function Header({onDarkModeClick, nowDark }){
  
  console.log(onDarkModeClick)

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick }> {nowDark ? "Dark" : "Light"} Mode  </button>
    </header>
  )
}

export default Header