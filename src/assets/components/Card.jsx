import React from 'react';

function BudgetCard() {
    return ( 
        <div className='flex flex-col text-left justify-between font-raleway w-1/2 p-10 bg-white rounded-lg shadow-lg'>
            <h2 className='font-normal text-xl mb-4'>Budget</h2>
            <input className='p-4 border-2 rounded-lg' type="number" placeholder='Enter Total Amount'/>
            <br />
            <button type='button' className='w-1/3 p-2 text-white bg-blue-700 rounded-md'>Set Budget</button>
        </div>
     );
}

export default BudgetCard