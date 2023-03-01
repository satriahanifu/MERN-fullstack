import React, { useState } from "react";
import Auth from "../components/Auth";

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { name, phone, email, pwd };
    console.log(data);
  };

  return (
    <div className="w-[1440px] h-[1024px] bg-[#FAFAFA] fixed left-0 right-0 top-0 bottom-0 mx-auto">
      <div className="w-[383px] h-[286px] left-[126px] top-[126px] absolute object-contain">
        <h3 className="font-[700] text-[117.752px] bg-gradient-to-r from-[#eb5757] to-[#9b51e0] bg-clip-text text-transparent">
          TO DO <br /> LIST
        </h3>
      </div>
      <div className="w-[509px] h-[1024px] absolute right-0 pt-[126px] px-[64px]">
        <h4 className="w-[222px] h-[30px] text-[20px] font-[500] text-[#5D5871] mb-[10px]">Welcome to To Do List</h4>
        <h5 className="w-[374px] h-[17px] text-[13px] font-[400] text-[#6D6B7A] mb-[40px]">Please sign-in into your account</h5>
        <h4 className="w-[68px] h-[30px] text-[20px] font [500] text-[#5D5871] mb-[20px]">Sign In</h4>

        {/* form section */}
        <form className="flex flex-col " onSubmit={handlesubmit}>
          {/* Username */}
          <div>
            <label className="w-[68px] h-[17px] text-[13px] font-[400] text-[#5D5871]">Username</label>
            <input className="w-[381px] h-[44px] bg-[#FFFFFF] border-[1px] border-solid border-[#E6EAEC] rounded-[5px]" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="w-[68px] h-[17px] text-[13px] font-[400] text-[#5D5871]">Phone number</label>
            <input type="text" placeholder="+62" className="w-[381px] h-[44px] bg-[#FFFFFF] border-[1px] border-solid border-[#E6EAEC] rounded-[5px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="w-[68px] h-[17px] text-[13px] font-[400] text-[#5D5871]">Email</label>
            <input type="text" placeholder="your email" className="w-[381px] h-[44px] bg-[#FFFFFF] border-[1px] border-solid border-[#E6EAEC] rounded-[5px]" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-[40px]">
            <label className="w-[68px] h-[17px] text-[13px] font-[400] text-[#5D5871]">password</label>
            <input type="password" className="w-[381px] h-[44px] bg-[#FFFFFF] border-[1px] border-solid border-[#E6EAEC] rounded-[5px]" value={pwd} onChange={(e) => setPwd(e.target.value)} />
          </div>
          <div>
            <Auth title="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
