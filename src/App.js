import React from "react";
// task-1
import user from "./task-1/user.json";
import Profile from "./task-1/Profile";
// task-2
import statisticalData from "./task-2/statistical-data.json";
import Statistics from "./task-2/Statistics";

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
    </div>
  );
};

export default App;
