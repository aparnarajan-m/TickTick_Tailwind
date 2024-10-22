import React from 'react'
import user from '../src/assets/user_icon.png'
import check from '../src/assets/check_icon.png'
import calendar from '../src/assets/calendar_icon.png'
import search from '../src/assets/search_icon.png'
import sync from '../src/assets/sync_icon.png'
import Notification from '../src/assets/Notification_icon.png'
import more from '../src/assets/more_icon.png'

function Sidebar() {
  return (
    <div className='w-[3.5%] h-[100%] border-r-2 flex-col flex justify-between bg-slate-50'>

    <div className='h-[27%] w-[100%] flex justify-around items-center flex-col mt-2'>
      <img className='w-[35px] h-[35px]' src={user} alt="" />
      <img className='w-[27px] h-[27px]' src={check} alt="" />
      <img className='w-[27px] h-[27px]' src={calendar} alt="" />
      <img className='w-[27px] h-[27px]' src={search} alt="" />
    </div>
    <div className='h-[21%] w-[100%] flex justify-around items-center flex-col mb-3 '>
        <img className='w-[23px] h-[23px]' src={sync} alt="" />
        <img className='w-[28px] h-[28px]' src={Notification} alt="" />
        <img className='w-[23px] h-[23px]' src={more} alt="" />
    </div>

  </div>
  )
}

export default Sidebar