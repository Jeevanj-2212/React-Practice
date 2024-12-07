import React from "react";
import NavBar from "../components/NavBar";

function Java() {
  return (
    <>
    <NavBar/>
      <h1>Html Quiz</h1>
      <p>Q. What is the full form Html?</p>
      <form>
        <div>
          <input type="radio" id="2bytes" name="intSize" value="2" />
          <label htmlFor="2bytes">Hi to my London</label>
        </div>
        <div>
          <input type="radio" id="4bytes" name="intSize" value="4" />
          <label htmlFor="4bytes">Hyper text markup language</label>
        </div>
        <div>
          <input type="radio" id="8bytes" name="intSize" value="8" />
          <label htmlFor="8bytes">Hello the main lead</label>
        </div>
        <div>
          <input type="radio" id="16bytes" name="intSize" value="16" />
          <label htmlFor="16bytes">both 1 & 2</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Java;
