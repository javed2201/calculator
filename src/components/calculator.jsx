import { useState } from "react"

const Calculator = () => {
const [display, setDisplay] = useState([])
const [operator, setOperator] = useState("")

// button's operation
const itemToDisplay = (input)=>{
    //handle operator in if
    if(input == "/" || input == "*" || input == "-" || input == "+"){
        // check to prevent the operator at start
        if(display.length>0){
            // check if an operator already selected
            let arithmeticValues = ["/", "*", "-", "+"]
            let hasArithmeticValues = arithmeticValues.map(value=>{
                return display.includes(value)
            })
            // check to prevent multiple operators
            if(!hasArithmeticValues.includes(true)){
                setDisplay([...display, input])
                setOperator(input)
            }
        }
    } 
    // handle numbers in if else
    else{
        setDisplay([...display, input])
    }
}

// final operation by button "="
const calculate  = ()=>{
    
    let operatedArray = display.join("").split(operator)

    if(operator == "+"){
        let result = Number(operatedArray[0]) + Number(operatedArray[1]) 
        setDisplay([result])
    }
    if(operator == "-"){
        let result = Number(operatedArray[0]) - Number(operatedArray[1]) 
        setDisplay([result])
    }
    if(operator == "*"){
        let result = Number(operatedArray[0]) * Number(operatedArray[1]) 
        setDisplay([result])
    }
    if(operator == "/"){
        let result = Number(operatedArray[0]) / Number(operatedArray[1]) 
        setDisplay([result])
    }

}
  
  return (
    <div className='flex items-center justify-center h-screen max-w-md mx-auto '>
        <div className="bg-white p-4 rounded shadow-md text-center">
            <p className="mt-[-16px] mb-2 ">@ Made By Me</p>
            {/* display */}
            <div className="h-[80px] mb-4 w-full bg-slate-100 py-8 px-4 rounded text-right font-bold text-2xl flex justify-end items-center">
                {display ? display.join("") : "0"}
            </div>
            {/* button */}
            <div className="grid grid-cols-4 gap-3">
            <button onClick={()=>itemToDisplay('1')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">1</button>
            <button onClick={()=>itemToDisplay('2')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">2</button>
            <button onClick={()=>itemToDisplay('3')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">3</button>
            <button onClick={()=>itemToDisplay('/')} className="col-span-1 btn btn-operator bg-slate-200 py-2 px-4 rounded font-bold">/</button>

            <button onClick={()=>itemToDisplay('4')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">4</button>
            <button onClick={()=>itemToDisplay('5')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">5</button>
            <button onClick={()=>itemToDisplay('6')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">6</button>
            <button onClick={()=>itemToDisplay('*')} className="col-span-1 btn btn-operator bg-slate-200 py-2 px-4 rounded font-bold">*</button>

            <button onClick={()=>itemToDisplay('7')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">7</button>
            <button onClick={()=>itemToDisplay('8')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">8</button>
            <button onClick={()=>itemToDisplay('9')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">9</button>
            <button onClick={()=>itemToDisplay('-')} className="col-span-1 btn btn-operator bg-slate-200 py-2 px-4 rounded font-bold">-</button>

            <button onClick={()=>setDisplay([])} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">C</button>
            <button onClick={()=>itemToDisplay('0')} className="col-span-1 btn bg-slate-200 py-2 px-4 rounded font-bold">0</button>
            <button onClick={()=>calculate()}          className="col-span-1 btn btn-operator bg-slate-200 py-2 px-4 rounded font-bold">=</button>
            <button onClick={()=>itemToDisplay('+')} className="col-span-1 btn btn-operator bg-slate-200 py-2 px-4 rounded font-bold">+</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator

// ১. display নামে একটা এরের এবং operator নামে একটা স্ট্রিংয়ের স্টেট নেওয়া হয়েছে।
// ২. ১৬টা বটনের জন্য একটা ডিভে ১৬টা বাটন ট্যাগ নেওয়া হয়েছে।
//    প্রতিটা বাটনের অনক্লিকে itemToDisplay নামে ফাংশন কল করে বাটনের ফিল্ডটাকে 
//    পাস করা হয়েছে।
// ৩. itemToDisplay ফাংশনে প্যারামিটারে যে ইনপুট পাচ্ছে তার উপর ভিত্তি করে ২টা 
//    অপারেশন চালানো হয়েছে:
//    যদি তা অপারেটর না হয় তাহলে ডিসপ্লে এরেতে তা এড করা হয়েছে। unmutable way
//    যদি অপারেটর হয় তাহলে ২টা কন্ডিশনের পরে তা ডিসপ্লেতেও (unmutable) এড করা 
//    হয়েছে আবার ইনপুট হিসাবেও সেট করা হয়েছে।
//    কন্ডিশন ১ = ডিসপ্লের লেংথ ০ থেকে বড় কিনা। 
//    কন্ডিশন ২ = ডিসপ্লেতে আগে থেকে কোন অপারেটর আগে কিনা।
// ৪. “=” বাটনের অনক্লিকে calculate নামক ফাংশন পাঠিয়ে দেওয়া হয়েছে। 
//    এখানে প্রথমে পুরো এরেকে প্রথমে জয়েন করে তারপর অপারেটরের উপর ভিত্তি করে
//    স্প্লিট করে ২টা ভ্যালুর এরে বানানো হয়েছে। একটা অপারেটরের আগের অন্যটা পরের।
//    এরপর অপারেটরের টাইপ চেক করে সে অনুযায়ি ঐ দুই ভ্যালুতে অপারেশন চালিয়ে  
//    প্রাপ্ত ভ্যালুটা সেটরেজাল্টে ডিস্ট্রাকচার ওয়েতে সেট করা হয়েছে। প্রথমে ঐ দুই ভ্যালুকে
//    নাম্বারে কনভার্ট করে নিতে হয়েছে।
// ৫. “C” বাটনের অনক্লিকে ইনপুট ও রেজাল্টকে খালি করা হয়েছে।
// ৬. ডিসপ্লে শো করার জন্য display থাকলে display.join("") অন্যথায় 0 দেওয়া হয়েছে।