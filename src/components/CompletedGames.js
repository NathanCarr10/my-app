import React, {useState, useEffect} from 'react';

const CompletedGames = () => {
    // State to hold the list of games in the wishlist
    const [completedGames, setCompletedGames] = useState([]);

    //Get wishlist games from the server
    useEffect(() => {
        const fetchCompletedGames = async () => {
            const response = await fetch('http://localhost:4000/api/games/status/completed');
            
            const data = await response.json();
            
            setCompletedGames(data.games); //Update state with the fetched data
        };

    // Call the fetch function when the component loads
    fetchCompletedGames();
    }, []); //Empty dependancy array ensures the fetch happens once on component mount

    return (
        <div>
          <h2>Completed Games</h2>
          {/* Check if there are games in the wishlist */}
          {completedGames.length > 0 ? (
            <ul>
            {/* Map through the games and display them as list items */}
              {completedGames.map((game) => (
                <li key={game._id}> {/* Use the unique game ID as the key */}
                  <h3>{game.title}</h3>
                  <p>Release Year: {game.releaseYear}</p>
                  <img src={game.coverUrl} alt={game.title} style={{ width: '200px', height: 'auto' }} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No completed games yet.</p>
          )}
        </div>
      )
};

export default CompletedGames;