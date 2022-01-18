import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>RyanLand is very fun</h1>
      <h1>Click the button below for more fun (it is lots of fun)</h1>
      <Link to="/fun">
        <button type="button">FUN!</button>
      </Link>
    </div>
  );
}

export default Home;
