// Calculator.jsx
// import { useState } from 'react';
// import CalculatorButton from './calculatorButton';
// import CalculatorDisplay from './calculatorDisplay';

// const GptCalculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (buttonValue) => {
//     if (buttonValue === '=') {
//       try {
//         setResult(eval(input).toString()); 
//         // eval performs mathematic operation provided in String like "2+2"
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (buttonValue === 'C') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput((prevInput) => prevInput + buttonValue);
//     }
//   };

//   const buttonValues = [
//     '1', '2', '3', '/',
//     '4', '5', '6', '*',
//     '7', '8', '9', '-',
//     '0', '.', '=', '+',
//     'C',
//   ];

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
//       <CalculatorDisplay value={result || input || '0'} />
//       <div className="grid grid-cols-4 gap-4">
//         {buttonValues.map((value) => (
//           <CalculatorButton key={value} value={value} onClick={handleButtonClick} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GptCalculator;

// my practice
import React, { useState } from 'react'

const GptCalculator = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const buttonValues = [
    "1", "2", "3", "/",
    "4", "5", "6", "*",
    "7", "8", "9", "-",
    "C", "0", "=", "+"
  ]

  const handleButtonClick = (buttonValue) => {
    if(buttonValue === "="){
      try{
        setResult(eval(input).toString())
        //setInput(eval(input).toString()) // why I need this? not now.
      } catch (error) {
        setResult("error")
      }
    } else if(buttonValue === "C"){
      setResult("")
      setInput("")
    } else {
      setInput((prevInput)=>prevInput+buttonValue)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow text-center">
       <p className="mt-[-12px] mb-2 ">@ Made By Gpt</p>
       <div className="bg-gray-100 p-4 mb-4 text-right">
        <span className="text-3xl font-bold">{result || input || "0"}</span>
      </div>
       <div className="grid grid-cols-4 gap-4">
        {buttonValues.map((value) => (
          <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleButtonClick(value)}
          key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GptCalculator

// ১. buttonValues নামে একটা এরে নেওয়া হয়েছে যার মধ্যে সমস্ত বাটনের 
//    ভ্যালু স্ট্রিং আকারে রাখা হয়েছে। 
// ২. input ও result নামে দুইটা স্ট্রিং ভ্যারিয়েবল স্টেটে রাখা হয়েছে।
// ৩. ডিসপ্লেতে দেখানোর জন্য ভ্যালু নেওয়া হয়েছে: {result || input || '0'}
//    অর্থাৎ রেজাল্ট থাকলে রেজাল্ট, ইনপুট থাকলে ইনপুট অন্যথায় 0 দেখাবে  (in ui)
// ৪. বাটন তৈরীর জন্য buttonValues এরে ম্যাপ করে প্রতিটি আইটেম দিয়ে
//    একেকটা বাটন তৈরী করা হয়েছে।  (in ui)
// ৫. প্রতিটি বাটনে handleButtonClick নামক ফাংশন অনক্লিকে কল করা হয়েছে
//    এবং ম্যাপের আইটেমকে তার আরগুমেন্ট আকারে পাস করা হয়েছে।
// ৬. handleButtonClick এ প্যারামিটার আকারে প্রাপ্ত ভ্যালুর উপর ভিত্তি করে
//    ৩ রকম অপারেশন চালিয়ে result বা input এর ভ্যালু সেট হয়েছে। 
//    যদি ভ্যালু ‘=’ হয় তাহলে সেটরেজাল্ট ও সেটইনপুট eval(input).toString()
//    যদি ভ্যালু ‘C’ হয় তাহলে সেটরেজাল্ট ও সেটইনপুট ফাঁকা
//    অন্যথায় সেটইনপুট আগের ভ্যালু + প্যারামিটার ভ্যালু