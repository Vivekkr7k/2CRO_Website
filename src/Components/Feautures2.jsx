import React from 'react'

const Feautures2 = () => {
  return (
    <div>
       <div class=" flex h-auto items-center  rounded-md bg-zinc-800 flex-col p-4 shadow-xl shadow-pink-500/50 mt-6 hover:bg-stone-900 text-white m-5">
            <h1 className="text-2xl font-bold text-blue-700">Total Supply</h1>
            <p>
              We have fixed the total supply to
            </p>
            <p className='text-2xl font-bold text-gray-400'>4,10,00,000</p>
          </div>
       <div class=" flex h-auto items-center  rounded-md bg-zinc-800 flex-col p-4 shadow-xl shadow-white-500/50 mt-6 hover:bg-stone-900 text-white m-5">
            <h1 className="text-3xl font-bold">Lock period </h1>
            <p>
            A token with a 1-year lock-in period refers to a restriction placed on the transferability or sale of a token for a period of one year from the date of issuance. During this period, the token holder is not allowed to sell or transfer the token to another party.
            </p>
            <h1 className='text-3xl from-neutral-50 font-bold mt-4'>Benefits</h1>
            <p className='mt-3'><span className='text-2xl '>Stability: </span> A lock-in period can help create a stable market for the token, as it prevents sudden sell-offs and price fluctuations caused by panic selling.</p>
            <p className='mt-3'><span className='text-2xl '>Trust: </span> Investors may be more likely to invest in a token that has a lock-in period, as it demonstrates the commitment of the team behind the token to its long-term success.</p>
          
            <p className='mt-3'><span className='text-2xl'>Reduced risk: </span> The lock-in period reduces the risk of market manipulation and pump-and-dump schemes, as token holders are unable to sell their tokens for a fixed period of time.</p>


        
          </div>
    </div>
  )
}

export default Feautures2
