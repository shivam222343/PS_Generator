import React, { useState, useCallback, useRef } from 'react';
import { IoPlayBackCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Spline from '@splinetool/react-spline';


function Ai() {
  const [question, setQuestion] = useState("Enter a prompt here....");
  const [response, setResponse] = useState("hey! I am always ready to help you.....");
  const [fontsize, setFontsize] = useState('xl');

  const [opt, setopt] = useState("")



  const fontSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];
  const [index, setIndex] = useState(3); // starting from 'xl'

  const decrease = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFontsize(fontSizes[index - 1]);
    }
  }

  const increase = () => {
    if (index < fontSizes.length - 1) {
      setIndex(index + 1);
      setFontsize(fontSizes[index + 1]);
    }
  }

  const enter = () => {
    setQuestion("");
  }

  const A = async () => {
    setResponse("Loading..... (It may take 5 to 15 seconds to respond....)");

    try {
      const res = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCBQIO3gKfA1KSyE3u-m6HuK7Sohb1N4S4',
        method: 'post',
        data: {
          "contents": [{
            "parts": [{
              "text": `${question} ${opt}`
            }]
          }]
        }
      });
      setResponse(res.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  }

  const responseRef = useRef(null);

  const copyToClipboard = useCallback((e) => {
    if (responseRef.current) {
      const text = responseRef.current.textContent;
      navigator.clipboard.writeText(text).then(() => {
        e.target.innerText = "Copied";
        setTimeout(() => {
          e.target.innerText = "Copy";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    }
  }, []);

  return (
    <div >
      <div className="Home bg-gradient-to-tr to-black from-slate-900 min-h-[80vh] w-[100vw] flex flex-col items-center pb-10">
      <div className="Home relative min-h-[80vh] w-[100vw] md:flex flex-col items-center">
      <Spline scene="https://prod.spline.design/2trSoEUpdpwFQ2UD/scene.splinecode" />
        <div className="md:absolute part1 h-28 w-[94vw] flex justify-center items-center">
          <div className=" md:absolute left-0 back h-28 w-[12vw] flex justify-center items-center">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} duration-500 text-4xl text-white hover:text-yellow-400`} >
              <IoPlayBackCircle />
            </NavLink>
          </div>
          <div className=" md:ml-44 part1 h-28 w-[70vw] mr-[12vw] flex justify-center items-center">
            <h1 className=' AI text-xl font-bold text-yellow-300 ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 text-center'>AI</h1>
            <div className="Headline text-yellow-300 font-bold lg:text-3xl ml-4 text-2xl">Prompt Generator</div>
          </div>
        </div>
        <div className="md:absolute md:top-14 part2 h-36 w-[94vw] flex justify-center lg:max-w-[60vw] items-center">
          <h1 className='text-white text-lg text-center'>"Unleash your programming potential with CodeCraft, the smart tool that generates precise code or logic for any programming language you choose. Whether you’re working in Python, JavaScript, Java, C++, or any other language"</h1>
        </div>

        <div className="flex flex-col mt-10 items-center">
          <h2 className="md:absolute md:top-48 text-xl font-bold mb-4 text-white">Choose any language:</h2>
          <select
            multiple={true}
            className="md:absolute md:top-60 border hover:border-yellow-300 bg-black text-yellow-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-center w-[90vw] md:w-96">
            <option onClick={(e) => { setopt("in Javascript") }} className='op hover:bg-white duration-500 hover:text-red-500  border-[1px] py-1 rounded-lg cursor-pointer border-red-400'>Javascript</option>
            <option onClick={(e) => { setopt("in Html") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 cursor-pointer rounded-lg border-red-400' >Html</option>
            <option onClick={(e) => { setopt("in Html and Css") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >Html and Css</option>
            <option onClick={(e) => { setopt("in C language") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >C language</option>
            <option onClick={(e) => { setopt("in c++") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >C++</option>
            <option onClick={(e) => { setopt("in Html and Tailwind Css") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >Html and Tailwind Css</option>
            <option onClick={(e) => { setopt("in Java") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 cursor-pointer rounded-lg border-red-400' >Java</option>
            <option onClick={(e) => { setopt("in React Js") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >React Js</option>
            <option onClick={(e) => { setopt("in Python") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >Python</option>
            <option onClick={(e) => { setopt("") }} className='op mt-1 hover:bg-white duration-500 hover:text-red-500 border-[1px] py-1 rounded-lg cursor-pointer border-red-400' >None</option>
          </select>
        </div>
        <div className="md:absolute md:top-96 flex flex-row mt-7">

          <input
            onClick={enter}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className='border-2 border-r-0 border-yellow-400 w-[60vw] bg-zinc-700 px-3 py-2 mt-3 rounded-l-lg text-white'
            type="text"
          />
          <button
            onClick={A}
            className="Generate border-2 border-l-0 border-yellow-400 text-white rounded-r-lg bg-red-500 font-bold text-2xl hover:bg-red-700 duration-500 px-3 py-1 mt-3 max-h-[45px]"
          >
            Generate
          </button>
        </div>

        <div className="md:absolute md:top-[500px] response relative">
          <div className="fontsize absolute left-1 top-10">
            <button onClick={decrease} className='minus bg-yellow-400 px-2 font-extrabold'>-</button>
            <button onClick={increase} className='plus bg-yellow-400 ml-5 px-2 font-extrabold'>+</button>
          </div>
          <pre ref={responseRef} className={`response p-7 font-semibold text-wrap text-${fontsize} font-mono bg-gradient-to-r from-black to-slate-900 min-h-96 mt-20 min-w-[80vw] max-w-[80vw] text-white rounded-md hidden lg:block`}>
            <div onClick={copyToClipboard} className="copy hover:shadow-lg duration-300 hover:shadow-yellow-400 shadow-sm shadow-yellow-400 sh bg-zinc-900 text-lg text-yellow-400 right-0 mr-10 cursor-pointer absolute px-4 top-30 inline font-semibold p-1 rounded-md">Copy</div>
            {response}
          </pre>
          <pre ref={responseRef} onClick={copyToClipboard} className={`p-2 text-${fontsize} font-semibold font-mono bg-zinc-950 min-h-96 w-[90vw] overflow-hidden text-wrap text-white mt-20 rounded-md lg:hidden`}>
            <div className="copy bg-zinc-950 text-yellow-400 text-lg right-0 absolute font-semibold top-0 px-4 cursor-pointer p-1 rounded-md mt-11">Copy</div>
            {response}
          </pre>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Ai;
