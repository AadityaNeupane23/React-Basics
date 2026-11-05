import UserCard from "./UserCard";
import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>Props - User List</h1>

      <UserCard name="Aadi" age={20} role="Student" />
      <UserCard name="Shiva" age={25} role="Developer" />
      <UserCard name="Aayush" age={22} role="Designer" />

    </div>
  );
}

export default App;