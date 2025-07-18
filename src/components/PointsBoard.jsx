import { useEffect, useState } from "react";

function PointsBoard() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("https://your-backend.onrender.com/api/points")
      .then((res) => res.json())
      .then((data) => setPoints(data));
  }, []);

  return (
    <div className="points-board">
      <h2>🌍 Public Points Snapshot</h2>
      <ul>
        {points.map((entry) => (
          <li key={entry._id}>
            {entry.user}: {entry.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointsBoard;
