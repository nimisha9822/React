import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef(null)

  const passgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charallowed) str += "!@#$^*{}[]:"
    if (numallowed) str += "1234567890"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numallowed, charallowed, setPassword])

  

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passgen()
  }, [length, numallowed, charallowed, passgen])

  return (
    <>
      <div className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-400">
        <h1 className='text-white text-center my-3'> Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-600 text-white py0.5 px-3 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numallowed}
              id='numInput'
              onChange={() => {
                setNumallowed((prev) => !prev)
              }}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id='charInput'
              onChange={() => {
                setCharallowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
