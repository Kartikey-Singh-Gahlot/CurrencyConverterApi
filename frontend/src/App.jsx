import { useState, useEffect } from "react";
import {v4 as uuidv4 } from "uuid";
import "./Output.css";
import "./Input.css";


export default function App(){
  let [val, setVal] = useState("");
  let [code, setCode] = useState([]);
  let [formData, setFormData] = useState({c1:"", c2:"", q :1})

  function trgrInputChange(e){
    setFormData((prev)=>{
      return {...prev,[e.target.name]: e.target.value}
    })
  }

  useEffect(()=>{
    async function getAll(){
        let URL ="https://kartz-currency-converter-api.vercel.app";
        let un = await fetch(`${URL}/currency/all");
        let pr = un.json();
        let codes = "";
        pr.then((result)=>{
          codes = result.data.map((i)=>{ return <option key={uuidv4()}>{i.currencyCode}</option>;});
          setCode(codes);
        })
       
    }
    getAll();
  },[]);

  async function trgrSubmit(e){
    e.preventDefault();
    let URL = "https://kartz-currency-converter-api.vercel.app"
    let un = await fetch(`${URL}/currency/rates?c1=${e.target.c1.value}&c2=${e.target.c2.value}&q=${e.target.q.value}`);
    
    let pr = (await un.json()).data;
    setVal(`${formData.q} ${formData.c1.toUpperCase()} = ${pr.rate} ${formData.c2.toUpperCase()}`);
    setFormData({c1:"", c2:"", q:1});
  }

  return(
    <div className="h-screen w-full bg-amber-400 flex justify-center">
        <div>
             <h1 className="text-3xl py-10 flex justify-center h-fit w-full text-center ">Welcome to Currency Converter</h1>

             <form onSubmit={trgrSubmit} className="border-[1px] py-3 px-2 border-amber-100">

                 <div className="flex w-full justify-center gap-5">
                    <select required name="c1" value={formData.c1} onChange={trgrInputChange} className="border-[1px] border-amber-50 text-center py-3 px-5">
                            <option value="">Select Currency 1</option>
                            {code}
                    </select>

                    <select  required name="c2" value={formData.c2} onChange={trgrInputChange} className="border-[1px] border-amber-50 text-center py-3 px-5">
                            <option value="">Select Currency 2</option>
                            {code}
                    </select>

                    <input type="number" name="q" value={formData.q} onChange={trgrInputChange} className="border-[1px] border-amber-50 text-center py-3 px-5"/>
                 </div>

                 <div className="flex justify-center py-3 px-5">
                         <button className="bg-red-500 py-2 px-10 rounded-3xl">Submit</button>
                 </div>

                 <h1 className=" flex flex-col justify-center w-full border-[1px] border-amber-50 bg-stone-700 text-amber-50 h-10 text-center">
                     {val}
                 </h1>
              
            </form>
                   
        </div>
    </div>
    
  )
}
