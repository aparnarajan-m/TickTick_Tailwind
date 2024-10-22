import React from 'react'
import calendar1 from '../src/assets/calendar1_icon.png'
import calendartue from '../src/assets/calendarTue_icon.png'
import inbox from '../src/assets/inbox_icon.png'
import byeHand from '../src/assets/byeHand_icon.png'
import trash from '../src/assets/trash_icon.png'
import complete from '../src/assets/complete_icon.png'
import premium from '../src/assets/premium_icon.png'
import greater from '../src/assets/greater_icon.png'
import { Link } from 'react-router-dom'

function Menubar() {
  return (
    <div className='w-[15.5%] h-[100%] border-r-2 font-family: Color Emoji, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'>

      <div className='w-[100%] h-[21%] flex items-center flex-col border-b-2'>
        <Link to='/today' className='w-[95%]'>
          <div className='flex  p-3 w-[95%] rounded-md items-center mt-4 hover:bg-[rgb(248,248,248)]'><img className='w-[18px] h-[18px] ml-2' src={calendar1} alt="" /><h2 className='ml-2'>Today</h2></div>
        </Link>
        <Link to='/next7days' className='w-[95%]'>
          <div className='flex p-3 w-[95%] rounded-md items-center hover:bg-[rgb(248,248,248)]'><img className='w-[18px] h-[18px] ml-2' src={calendartue} alt="" /><h2 className='ml-3'>Next 7 Days</h2></div>
        </Link>
        <Link to='/' className='w-[95%]'>
          <div className='flex bg-[rgb(243,243,243)] p-3 w-[95%] rounded-md items-center'><img className='w-[24px] h-[24px] ml-1' src={inbox} alt="" /><h2 className='ml-2'>Inbox</h2></div>
        </Link>
      </div>

      <div className='w-[100%] h-[45%] flex justify-around flex-col border-b-2 p-5 text-[rgb(195,193,190)] text-[14px]'>
        <h3 className='p-2 hover:bg-[rgb(248,248,248)]'>Lists</h3>
        <div className='flex p-2 hover:bg-[rgb(248,248,248)]'><img className='w-[23px] h-[23px]' src={byeHand} alt="" /> <h1 className='text-slate-950 font-bold ml-2'>Welcome</h1> <h1 className='ml-28'>11</h1></div>
        <h3 className='p-2 hover:bg-[rgb(248,248,248)]'>Filters</h3>
        <p className='bg-slate-50 p-2  hover:bg-[rgb(248,248,248)]'>Display tasks filtered by list ,date,priority,tag and more</p>
        <h3 className='p-2 hover:bg-[rgb(248,248,248)]'>Tags</h3>
        <p className='bg-slate-50 p-2 hover:bg-[rgb(248,248,248)]'>Categorized your tasks with tags.Quickly select a tag by typing "#" when adding a task </p>
      </div>

      <div className='w-[100%] h-[12%] flex justify-around flex-col mt-6'>
        <div className='flex  p-2 hover:bg-[rgb(248,248,248)]'><img className='w-[20px] h-[20px] ml-7' src={complete} alt="" /><h2 className='ml-2'>Completed</h2></div>
        <div className='flex  p-2 hover:bg-[rgb(248,248,248)]'><img className='w-[25px] h-[24px] ml-6' src={trash} alt="" /><h2 className='ml-2'>Trash</h2></div>
      </div>

      <div className='flex items-center mt-28 w-[100%] h-[30px] bg-[rgb(243,243,243)]'><img className='w-[18px] h-[18px] ml-7 opacity-[0.6]' src={premium} alt="" /><p className='ml-3 text-[rgb(167,164,201)] text-[13px] '>Upgrade to premium</p><img className='w-[18px] h-[18px] ml-14' src={greater} alt="" /></div>

    </div>
  )
}

export default Menubar
