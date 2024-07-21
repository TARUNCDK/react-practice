import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 text-black rounded-3xl'>
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl'>
          <button className='rounded-3xl border-slate-700 bg-blue-600 px-3 py-2 m-2' onClick={() => setColor("blue")}>blue</button>  
          <button className='rounded-3xl border-slate-700 bg-red-600 px-3 py-2 m-2' onClick={() => setColor("red")}>red</button>  
          <button className='rounded-3xl border-slate-700 bg-cyan-600 px-3 py-2 m-2' onClick={() => setColor("cyan")}>cyan</button>  
          <button className='rounded-3xl border-slate-700 bg-orange-600 px-3 py-2 m-2' onClick={() => setColor("orange")}>orange</button>  
          <button className='rounded-3xl border-slate-700 bg-lime-600 px-3 py-2 m-2' onClick={() => setColor("lime")}>lime</button>  
          <button className='rounded-3xl border-slate-700 bg-violet-600 px-3 py-2 m-2' onClick={() => setColor("violet")}>violet</button>
          <button className='rounded-3xl border-slate-700 bg-fuchsia-600 px-3 py-2 m-2' onClick={() => setColor("fuchsia")}>fuchsia</button>
          <button className='rounded-3xl border-slate-700 bg-pink-600 px-3 py-2 m-2' onClick={() => setColor("pink")}>pink</button>
          <button className='rounded-3xl border-slate-700 bg-teal-600 px-3 py-2 m-2' onClick={() => setColor("teal")}>teal</button>
          <button className='rounded-3xl border-slate-700 bg-yellow-600 px-3 py-2 m-2' onClick={() => setColor("yellow")}>yellow</button>
          <button className='rounded-3xl border-slate-700 bg-indigo-600 px-3 py-2 m-2' onClick={() => setColor("indigo")}>indigo</button>
          <button className='rounded-3xl border-slate-700 bg-lime-900 px-3 py-2 m-2' onClick={() => setColor("olive")}>olive</button>  
          <button className='rounded-3xl border-slate-700 bg-cyan-300 px-3 py-2 m-2' onClick={() => setColor("aqua")}>aqua</button>
        </div>
        
      </div>
    </div>
    
  )
}

export default App
