import "./App.css";
import Profile from "./component/Profile/Profile.jsx";
import Container from "./component/container/Container";
import Statistic from "./component/Statistic/statistic";
import FriendList from "./component/FriendsList/FriendList";
import TransactionHistory from "./component/Transaction/TransactionHistory";

import user from "./component/Profile/user.json";
import data from "./component/Statistic/data.json";
import friends from "./component/FriendsList/friends.json";
import transaction from "./component/Transaction/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile data={user} />
      <Container title="Upload stats">
        <Statistic stat={data} />
      </Container>
      <FriendList data={friends} />
      <TransactionHistory data={transaction} />
    </div>
  );
}

export default App;
