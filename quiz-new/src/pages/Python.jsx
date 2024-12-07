import React from "react";
import NavBar from "../components/NavBar";

function Python() {
  return (
    <>
    <NavBar/>
      <h1>Python Quiz</h1>
      <p>Q. What is the size of the `int` data type in Python?</p>
      <form>
        <div>
          <input type="radio" id="2bytes" name="intSize" value="2" />
          <label htmlFor="2bytes">2 bytes</label>
        </div>
        <div>
          <input type="radio" id="4bytes" name="intSize" value="4" />
          <label htmlFor="4bytes">4 bytes</label>
        </div>
        <div>
          <input type="radio" id="8bytes" name="intSize" value="8" />
          <label htmlFor="8bytes">8 bytes</label>
        </div>
        <div>
          <input type="radio" id="16bytes" name="intSize" value="16" />
          <label htmlFor="16bytes">16 bytes</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Python;
