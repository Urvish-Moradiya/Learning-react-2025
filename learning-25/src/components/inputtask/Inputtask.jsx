import { useState } from "react";

export const Inputtask = () => {
  const [movie, setMovie] = useState("");
  const [imba, setImba] = useState("");
  const [cast, setCast] = useState("");
  const [rating, setRating] = useState("");
  const [profit, setProfit] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Movie Ticket</h2>

      <label>Movie Name: </label>
      <input
        type="text"
        placeholder="Enter movie name"
        onChange={(event) => setMovie(event.target.value)}
      />
      <br />

      <label>IMBA: </label>
      <input
        type="text"
        placeholder="Enter IMBA"
        onChange={(event) => setImba(event.target.value)}
      />
      <br />

      <label>Cast Name: </label>
      <input
        type="text"
        placeholder="Enter cast name"
        onChange={(event) => setCast(event.target.value)}
      />
      <br />

      <label>Rating: </label>
      <input
        type="text"
        placeholder="Enter rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <br />

      <label>Total Profit: </label>
      <input
        type="text"
        placeholder="Enter total profit"
        onChange={(event) => setProfit(event.target.value)}
      />
      <br />

      <h3>Movie Details</h3>
      <table
        border="1"
        style={{ margin: "0 auto", width: "50%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>IMBA</th>
            <th>Cast</th>
            <th>Rating</th>
            <th>Total Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{movie}</td>
            <td>{imba}</td>
            <td>{cast}</td>
            <td>{rating}</td>
            <td>{profit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};