import React from "react";
import useInputState from "../hooks/useInputState";

export default () => {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Managed Input</h2>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="password" value={password} onChange={updatePassword} />
      <button
        onClick={() => {
          resetEmail();
          resetPassword();
        }}
      >
        Submit
      </button>
      <p>
        The value is : {email} / {password}{" "}
      </p>
    </div>
  );
};
