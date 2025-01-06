import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setisNumber] = useState(false);
  const [isSpecial, setisSpecial] = useState(false);
  let [password, setPassword] = useState("");

  function generatePass(isNumber, isSpecial) {
    password = "";
    let refPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let refNum = "1234567890";
    let refSpecial = "@#$%&*?";
    if (isNumber && isSpecial) {
      refPass += refNum;
      refPass += refSpecial;
    } else if (isSpecial) {
      refPass += refSpecial;
    } else if (isNumber) {
      refPass += refNum;
    }

    for (let i = 0; i < length; i++) {
      password += refPass[Math.floor(Math.random() * refPass.length)];
    }
    setPassword(password);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 w-3/4 m-5 p-3 rounded-xl border-red-200 border-2">
        <div className="text-lg m-1 font-bold md:text-2xl md:font-semibold">
          Generate a Random Strong Password
        </div>
        <div className="text-slate-600 w-3/4 m-2">
          Generate Strong, Secure Passwords Effortlessly — Protect Your Digital
          World with Every Click!
        </div>
        <div className="flex justify-between items-center">
          <input
            readOnly
            disabled
            type="text"
            className="tracking-widest bg-white p-3 m-3 w-3/4 flex-3 text-slate-600 rounded-lg"
            placeholder="Password"
            value={password}
          />
          <div className="flex-1 text-xl">
            <i className="fa-regular fa-copy cursor-pointer"></i>
          </div>
        </div>
        <div className="flex items-center gap-2 w-3/4">
          <input
            id="length-bar"
            min={8}
            max={40}
            type="range"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length-bar" className="mr-3">
            Length ({length})
          </label>
          <input
            type="checkbox"
            name="num"
            id="num"
            onClick={(e) => (isNumber ? setisNumber(false) : setisNumber(true))}
          />
          <label htmlFor="num" className="mr-3">
            Number
          </label>
          <input
            type="checkbox"
            name="special"
            id="special"
            onClick={(e) =>
              isSpecial ? setisSpecial(false) : setisSpecial(true)
            }
          />
          <label htmlFor="special">Special</label>
        </div>
        <button
          className="bg-slate-900 p-2 px-4 text-slate-100 m-3 rounded-lg"
          onClick={() => generatePass(isNumber, isSpecial)}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
