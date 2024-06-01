/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { GiStrong } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


import Loader from "./Loader";


const Input = ({ placeholder, name, type, value, handleChange }) => {

  

  return (
    <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      placeholder={placeholder} type={type} step="0.0001" value={value}
      onChange={(e) => handleChange(e, name)} />
  )
}

const Welcome = () => {

  const {connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction} = useContext(TransactionContext);

 
  const common = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const isLoading = false;

  const handleSubmit = (e) => {
    //now we will destructure all the values from formData as we are bringing it in from contextapi after sending each value in handlechange and then we will send it to the blockchain

    const { addressTo, amount, keyword, message } = formData;
    console.log({ addressTo, amount, keyword, message });
    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message){
      alert("Please fill all the fields");
      return;
    }
    //we will now send the transaction to the blockchain
    //we will call the sendTransaction function from the context api
    //we will pass the addressTo,amount,keyword,message
    sendTransaction(addressTo,amount,keyword,message);
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full max-w-7xl">
        {/* Left Side of the web page */}
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> with ease Across the World
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the potential of blockchain and crypto with our platform
          </p>
          {
            !currentAccount && (
              <button
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] w-[220px]"
            type="button"
            onClick={connectWallet}
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
            )
          }
          {/* {
            currentAccount && (
              <button
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] w-[220px]"
              type="button"
              onClick={disconnectWallet}
            >
              <p className="text-white text-base font-semibold">Disconnect Wallet</p>
            </button>
            )

          } */}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-4 ">
            <div className={`rounded-tl-2xl ${common}`}>
              <GiStrong className="text-3xl text-white mx-1" />
              Reliability
            </div>
            <div className={`${common}`}>
              <RiSecurePaymentFill className="text-4xl text-white mx-1" />
              Security
            </div>
            <div className={`rounded-tr-2xl ${common}`}>
              <SiEthereum className="text-3xl text-white mx-1" />
              Ethereum
            </div>
            <div className={`rounded-bl-2xl ${common}`}>
              <SiWeb3Dotjs className="text-3xl text-white mx-1" />
              WEB 3.0
            </div>
            <div className={`${common}`}>
              <FaMoneyCheckDollar className="text-3xl text-white mx-1" />
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${common}`}>
              <SiHiveBlockchain className="text-3xl text-white mx-1" />
              Blockchain
            </div>
          </div>
        </div>

        {/* Right Side of the web page */}
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 md:ml-10">
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 md:ml-10">
  <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-96 w-full my-5 eth-card white-glassmorphism">
    <div className="flex justify-between flex-col w-full h-full">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
          <SiEthereum className="text-white" fontSize={21} />
        </div>
        <BsInfoCircle className="text-white" fontSize={17} />
      </div>
      <div className="">
        <p className="text-white font-light text-sm">
          {currentAccount ? currentAccount : 'No Account Connected'}
        </p>
        <p className="text-white font-semibold text-lg mt-1">
          Ethereum
        </p>
      </div>
    </div>
  </div>
</div>


          {/* Form */}
          <div className="p-5 ml-10 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder={"Address To"} name={"addressTo"} type={"text"} handleChange={handleChange} />

            <Input placeholder={"Amount (ETH)"} name={"amount"} type={"number"} handleChange={handleChange} />

            <Input placeholder={"Keyword (GIF)"} name={"keyword"} type={"text"} handleChange={handleChange} />

            <Input placeholder={"Enter Message"} name={"message"} type={"text"} handleChange={handleChange} />
            {/* updating each value once*/}
            <div className="h-[1px] w-full bg-gray-600 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#716c6c]">
                  Send Now
              </button>
            )}

          </div>


        </div>
      </div>
    </div>
  );
};

export default Welcome;
