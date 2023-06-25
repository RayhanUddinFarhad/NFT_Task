import React from 'react';
import avatar1 from '../../../assets/Images/Avatar1.png'
import avatar2 from '../../../assets/Images/Avatar2.png'
import avatar3 from '../../../assets/Images/Avatar3.png'
import avatar4 from '../../../assets/Images/Avatar4.png'
import checkIcon from '../../../assets/Images/Icons/CheckIcon.png'


const TopCollectionOver = () => {
    return (
        <div>
            <p className='uppercase font-extrabold'>Top Collections Over</p>
            <p className='text-[#3D00B7]'>Last 7 days</p>


            <div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td  className='relative'>
            <img className='w-14' src= {avatar1} alt="" />
            <img className='absolute top-1 right-2' src= {checkIcon} alt="" />
        </td>
        <td className=''> <p className='text-sm font-bold'>CryptoFunks</p>
        <p className='text-xs'>19,769.39</p>
        </td>
        <td className='text-[#14C8B0] font-bold'>+26.52%</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>
            <img className='w-14' src= {avatar2} alt="" />
        </td>
        <td className=''> <p className='text-sm font-bold'>Cryptix</p>
        <p className='text-xs'>2,769.39</p>
        </td>
        <td className='text-[#FF002E] font-bold'>+10.52%</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>
            <img className='w-14' src= {avatar3} alt="" />
        </td>
        <td className=''> <p className='text-sm font-bold'>Frensware</p>
        <p className='text-xs'>9,232.39</p>
        </td>
        <td className='text-[#14C8B0] font-bold'>+2.52%</td>
      </tr>

      <tr>
        <th>4</th>
        <td className='relative'>
            <img className='w-14' src= {avatar4} alt="" />
            <img className='absolute top-1 right-2' src= {checkIcon} alt="" />

        </td>
        <td className=''> <p className='text-sm font-bold'>PunkArt</p>
        <p className='text-xs'>3,769.39</p>
        </td>
        <td className='text-[#14C8B0] font-bold'>+1.52%</td>
      </tr>


      <tr>
        <th>5</th>
        <td>
            <img className='w-14' src= {avatar2} alt="" />
        </td>
        <td className=''> <p className='text-sm font-bold'>Art Crypto</p>
        <p className='text-xs'>10,769.39</p>
        </td>
        <td className='text-[#FF002E] font-bold'>+2.52%</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>
        </div>
    );
};

export default TopCollectionOver;