import { Link } from "react-router-dom";
import "../App.css"; // Make sure CSS is imported

const Dashboard = () => {
  return (
    <header className="dashboard-header">
      <Link to="/" className="dashboard-title">
        Creatorverse
      </Link>
    </header>
  );
};

export default Dashboard;
