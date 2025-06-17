function App() {
    return (
        <div className="bg-slate-800 w-full h-screen flex justify-center items-center">
            <div className="shadow-2xl h-[400px] w-[380px] bg-white rounded-2xl p-6 pt-6">
                <div className="text-center">
                    <div className="text-xl font-bold tracking-wider">
                        Password Generator
                    </div>
                    <p className="text-xs text-[#5e5e5e]">
                        Generate strong random password!
                    </p>
                </div>
                <div className="bg-gray-200 border border-gray-300 mt-4 rounded-2xl h-[70px] flex items-center px-4">
                    <input
                        type="text"
                        className="pass-display-screen flex-3 font-mono text-lg text-[#444444] focus:outline-none focus:ring-0"
                        value={password}
                        readOnly
                        ref={passRef}
                    />
                    <div className="flex-1 flex gap-3">
                        <button
                            onClick={() => copyToClipboard()}
                            className="bg-[#2a2a2a] text-white p-2 text-xs rounded-lg cursor-pointer"
                        >
                            <i className="fa-solid fa-copy"></i>
                        </button>
                        <button
                            onClick={() => generatePassword()}
                            className="bg-[#2a2a2a] text-white px-2 text-xs p-1 rounded-lg cursor-pointer"
                        >
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
                <div className="my-5 mt-8 text-[#444444]">
                    <div className="flex justify-between items-center m-3">
                        <label htmlFor="include-num">Include Number</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="include-num"
                                name="numAllowed"
                                className="sr-only peer"
                                onClick={(e) => setIsNum(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2a2a2a]"></div>
                        </label>
                    </div>
                    <div className="flex justify-between items-center m-3">
                        <label htmlFor="include-upper">Include Uppercase</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="include-upper"
                                name="upperAllowed"
                                className="sr-only peer"
                                onClick={(e) => setUpper(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2a2a2a]"></div>
                        </label>
                    </div>
                    <div className="flex justify-between items-center m-3">
                        <label htmlFor="include-symbol">Include Symbols</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="include-symbol"
                                name="sym-Allowed"
                                className="sr-only peer"
                                onClick={(e) => setIsSpecial(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2a2a2a]"></div>
                        </label>
                    </div>
                    <div className="m-3 mt-4">
                        <div className="flex justify-between">
                            <div>Password length</div>
                            <div>{length}</div>
                        </div>
                        <input
                            type="range"
                            value={length}
                            min="10"
                            max="20"
                            className=" w-full mt-2 cursor-pointer"
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
