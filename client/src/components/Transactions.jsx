/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

import dummyData from "../utils/dummy"

import useGify from '../hook/useGify'

const TransactionCard = ({keyword,url,addressTo,message, timestamp,addressFrom,amount}) => {
  const gifUrl=useGify({keyword})
  return (
    <div className='bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm-max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-5 '>
        <div className='flex flex-col justify-start w-full mb-2 p-6'>
          <p className='text-white text-base'>
            From: <span className='text-gray-400'>{addressFrom.substring(0, 15)}.....{addressFrom.substring(35)}
            </span>
          </p>
          <p className='text-white text-base'>
            To: <span className='text-gray-400'>{addressTo.substring(0, 15)}.....{addressTo.substring(35)}
            </span>
          </p>
          <p className='text-white text-base'>Amount: <span className='text-gray-400'>
            {amount}
          </span></p>
          {message && (
            <>
            <br/>
            <p
              className='text-white text-base'>Message: <span className='text-gray-400'>{message}</span>
            </p>
            </>

          )}

          <img src={gifUrl || url} alt="gif" className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover'/>

          <div className='bg-black px-5  p-1 w-max rounded-3xl -mt-4 shadow-2xl'>
            <p className='text-[#37c7da] font-bold'>
              {timestamp}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

const Transactions = () => {

  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount && (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        )}
        {!currentAccount && (
          <h3 className='text-white text-3xl text-center my-2'>Connect Account to Track  Transactions</h3>
        )}

        {
          currentAccount && (
            <div className='flex flex-wrap justify-center items-center mt-10 text-white'>
          {
            dummyData.reverse().map((data, index) => (
              <TransactionCard key={index} {...data} />
            ))
          }
        </div>
          )
        }

      </div>
    </div>
  )
}

export default Transactions
