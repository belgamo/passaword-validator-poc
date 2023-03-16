import { useState } from "react";
import "./App.css";
import usePasswordValidator from "./use-password-validator";

function App() {
  const [password, setPassword] = useState("");
  const { validate } = usePasswordValidator();

  const { digits, isValid, lowercase, specialCharacters, uppercase, length } =
    validate(password);

  return (
    <div className="App">
      <br />
      <br />

      <input onChange={(e) => setPassword(e.target.value)} value={password} />

      <br />
      <br />

      <span>At least 1 uppercase letter: {uppercase ? "✓" : "X"}</span>
      <br />
      <span>At least 1 lowercase letter: {lowercase ? "✓" : "X"}</span>
      <br />
      <span>
        At least one special character: {specialCharacters ? "✓" : "X"}
      </span>
      <br />
      <span>At least 1 number: {digits ? "✓" : "X"}</span>
      <br />
      <span>At least 10 characters: {length ? "✓" : "X"}</span>

      <br />
      <br />

      <button disabled={!isValid}>Signup</button>
    </div>
  );
}

export default App;
