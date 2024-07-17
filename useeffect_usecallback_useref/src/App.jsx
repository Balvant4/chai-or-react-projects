import React, { useEffect, useCallback, useState } from "react";
import { useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  // useref

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "1234567890"; // Fixed: Corrected from setCharacterAllowed to numberAllowed
    if (characterAllowed) str += "?>:<-_=+";

    for (let i = 1; i <= length; i++) {
      // Fixed loop iteration to run from 0 to length-1
      const char = Math.floor(Math.random() * str.length); // Fixed random index generation
      pass += str.charAt(char); // Fixed string concatenation
    }
    setPassword(pass);
  }, [characterAllowed, numberAllowed, length]);

  const copypassword = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [characterAllowed, numberAllowed, length, passwordGenerator]);

  return (
    <div className="flex flex-col bg-black h-screen py-5 px-5 items-center text-white">
      <div>
        <h1 className="text-4xl text-green-600 uppercase">
          Password Generator
        </h1>
      </div>
      <div className="py-5 flex items-center">
        <input
          type="text"
          readOnly
          placeholder="Password"
          className="pr-32 py-3 text-black"
          value={password}
          ref={passwordref}
        />
        <button onClick={copypassword} className="py-3 px-2 bg-green-800 ml-2">
          Copy
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))} // Convert value to number
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center pr-4">
          <input
            type="checkbox"
            className="rounded-full cursor-pointer"
            checked={numberAllowed} // Fixed from value to checked
            onChange={() => setNumberAllowed((prev) => !prev)} // Fixed handler to setNumberAllowed
          />
          <label className="ml-2">Number</label>
        </div>
        <div className="flex items-center pr-4">
          <input
            type="checkbox"
            className="rounded-full cursor-pointer"
            checked={characterAllowed} // Fixed from value to checked
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label className="ml-2">Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
