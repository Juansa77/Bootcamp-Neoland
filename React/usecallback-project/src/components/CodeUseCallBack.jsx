import { useState, useCallback } from "react";
import DeleteUser from "./DeleteUser";

const CodeUseCallback = () => {
  const [user, setUser] = useState({
    name: "Juansa",
    lastName: "García",
  });

  const deleteUserCallback = useCallback(() => {
    setUser({ name: "", lastName: "" });
  }, []);

  return (
    <div>
      <h3>
        {user.name} | {user.lastName}
      </h3>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />

      <DeleteUser deleteUser={deleteUserCallback}>Reset name</DeleteUser>
    </div>
  );
};

export default CodeUseCallback;
