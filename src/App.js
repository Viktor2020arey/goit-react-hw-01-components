import React from "react";
// task-1
import user from "./task-1/user.json";
import Profile from "./task-1/Profile";
// task-2
import statisticalData from "./task-2/statistical-data.json";
import Statistics from "./task-2/Statistics";

// task-3
import friends from "./task-3/friends.json";
import FriendList from "./task-3/FriendList";

// task-4
import transactions from "./task-4/transactions.json";
import TransactionHistory from "./task-4/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
