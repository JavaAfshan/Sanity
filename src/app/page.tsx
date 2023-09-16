// import Hero from "@/components/views/Hero";
"use client";
import {useSelector} from 'react-redux';
export default function Home() {
  const selector:any=useSelector((state)=>state);
  console.log(selector);
  return (
    <div>
      {/* <Hero/> */}
    {selector.counterReducer}

    </div>
  );
}
