import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PayInfo = () => {
const [inputs,setInputs] = useState({
    amount:"",
    phone: "",
    message:""
})


useEffect(()=>{
    if(inputs){
        console.log(inputs)
    }
})

const navigate = useNavigate()

//check inputs
    const checkingInputs = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value} = e.target
       setInputs((prev)=>({
        ...prev,
        [name]:value
       }))
    }

    const sendSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(Number(inputs?.amount || 0) < 1.25){
            return alert("lacagta ugu yar waa 1.25")
        }
        navigate("/successPayment")
    }
  return (

            <div className="flex items-center justify-center px-4 py-20">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    
                    <div className="flex flex-col items-start text-left">
                        <div className="inline-flex items-center justify-center border border-zinc-200 bg-zinc-50 rounded-full px-4 py-1.5 text-sm text-zinc-800 mb-4">
                            Contact us
                        </div>
                        <h1 className="text-[40px] font-medium text-zinc-900 leading-tight mb-1.5">
                            Still have questions?
                        </h1>
                        <p className="text-sm text-zinc-600 max-w-[360px] mb-6 leading-relaxed">
                            Need help with components, setup, or customization? We're here to support you.
                        </p>

                        <div className="flex flex-col space-y-5">
                            <div className="flex items-center gap-2">
                                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18.333 5.836-7.492 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.667 3.336H3.333c-.92 0-1.666.746-1.666 1.667v10c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666v-10c0-.92-.746-1.667-1.666-1.667" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <span className="text-sm text-zinc-600">Sadaqsamor99@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M11.527 13.804a.83.83 0 0 0 1.01-.252l.296-.388a1.67 1.67 0 0 1 1.334-.667h2.5a1.667 1.667 0 0 1 1.666 1.667v2.5a1.667 1.667 0 0 1-1.666 1.667 15 15 0 0 1-15-15 1.667 1.667 0 0 1 1.666-1.667h2.5A1.667 1.667 0 0 1 7.5 3.331v2.5a1.67 1.67 0 0 1-.667 1.333l-.39.293A.83.83 0 0 0 6.2 8.484a11.67 11.67 0 0 0 5.327 5.32" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
                                </div>
                                <span className="text-sm text-zinc-600">+252613170796</span>
                            </div>
                        

                            <div className="flex items-center gap-2">
                                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.667 8.33c0 4.162-4.616 8.495-6.166 9.833a.83.83 0 0 1-1.002 0c-1.55-1.338-6.166-5.671-6.166-9.832a6.667 6.667 0 0 1 13.334 0" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10.836a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <span className="text-sm text-zinc-600">Mogadishu banadir somalia</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl p-6 md:p-8 w-full max-w-[470px] mx-auto md:ml-auto md:mr-0">
                        <form onSubmit={sendSubmit} className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-primary">EVC Plus Number</label>
                                <input onChange={checkingInputs}  type="tel" name="phone" placeholder="Enter Your number" className="rounded-full border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400" />
                            </div>

                           <div className="flex flex-col space-y-2">
                                <label className="text-sm text-primary">Lacagta Salaxa</label>
                                <input onChange={checkingInputs}  name="amoun" type="text" placeholder="Ugu yaraan 1.25" className="rounded-full border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400" />
                            </div>


                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-primary">Message</label>
                                <textarea onChange={checkingInputs} placeholder="Enter your message" name="message" className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 h-24 resize-none"></textarea>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="size-3.5 rounded-full border border-zinc-200 shrink-0 cursor-pointer flex items-center justify-center"></div>
                                <span className="text-xs text-zinc-950">
                                    I agree with <a href="#" className="text-xs text-primary underline hover:text-zinc-900">the terms and conditions</a>
                                </span>
                            </div>

                            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm py-3 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
 
  )
}

export default PayInfo