/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      <h2>Jeopardy Style Quiz Tournament</h2>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100px",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid red",
          }}
        >
          <input
            style={{ width: "150px" }}
            type='text'
            placeholder='Enter name ...'
            value={playerName}
            onChange={event => setPlayerName(event.target.value)}
          />
          <Link to={`/JSQT`}>
            <button>Start Game</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
