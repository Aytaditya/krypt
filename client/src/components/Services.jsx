/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl w-[500px] ">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className='ml-5 flex flex-col flex-1'>
        <h1 className='mt-2 text-white text-lg'>{title}</h1>
        <p className='mt-2 text-[#8f8d8d] text-sm md:w-9/12'>{subtitle}</p>
      </div>

    </div>
  )
}

const Services = () => {
  return (
    <div className='flex w-full md:flex-row flex-col items-center justify-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start '>
          <h1 className='text-white text-3xl sm:text-5xl text-gradient'>
            Services that we
            <br />
            continue to provide
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center '>
        <ServiceCard color="bg-[#2952E3]" title="Security Garuntee"
          icon={<BsShieldFillCheck size={21} className=' text-white' />}
          subtitle="We provide a secure platform for all your transactions"
        />

        <ServiceCard color="bg-[#8945F8]" title="Best Exchange Rates"
          icon={<BiSearchAlt size={21} className=' text-white' />}
          subtitle="We provide the best exchange rates for all your transactions"
        />

        <ServiceCard color="bg-[#F84550]" title="Fastest Trasactions"
          icon={<RiHeart2Fill size={21} className=' text-white' />}
          subtitle="We provide the fastest transactions for all your transactions"
        />

      </div>
    </div>
  )
}

export default Services
