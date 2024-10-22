import React from 'react'
import menus from '../src/assets/menus_icon.png'
import sort from '../src/assets/sort_icon.png'
import menu from '../src/assets/menu_icon.png'
import moon from '../src/assets/moon_icon.jpg'

function Body() {
    return (
        <div className='w-[46%] border-r-2'>

            <div className='flex mt-6'>
                <div className='flex w-[100px] h-[30px] justify-around items-center ml-4'><img className='w-[22px] h-[22px]' src={menus} alt="" /><h1 className='text-[20px] font-bold'>Inbox</h1></div>
                <div className='flex ml-[580px] w-[70px] h-[30px] justify-around items-center'>
                    <img className='w-[22px] h-[22px]' src={sort} alt="" /> 
                    <img className='w-[22px] h-[22px] ' src={menu} alt="" />
                </div>
            </div>
            <div className='w-[730px] h-11 ml-6 mt-8 bg-[rgb(248,248,248)] rounded-md overflow-hidden'>
                <input className='w-[653px] h-11 ml-3 bg-[rgb(248,248,248)] outline-none' type="text" placeholder='Add task' />
                <button className='w-16 h-11 text-[rgb(177,147,147)]'>Add</button>
            </div>
            <div className='flex  flex-col justify-center items-center mt-60'>
                <img className='w[80px] h-[80px]' src={moon} alt="" />
                <h1 className='mt-9 font-bold'>No tasks</h1>
                <p className='text-[rgb(177,147,147)] text-[13px]'>captures all your tasks and ideas</p>
            </div>
        </div>
    )
}

export default Body
