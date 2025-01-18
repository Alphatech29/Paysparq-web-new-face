import React from 'react'
import { Avatar, Dropdown } from "flowbite-react";
import { logout } from '../../superBase/auth/signIn';

function Header() {
  return (
    <div className='w-full bg-primary-600 px-14 py-20 h-16 flex items-center justify-between'>
      <div><img src="/image/footer-logo.png" alt=""  className='h-12 pl-9'/></div>
      <div className='flex items-center justify-center gap-3'>
        <Avatar img="/images/people/profile-picture-5.jpg" className='pr-9' />
      <Dropdown label="CEO Alphatech" inline className='!mr-3 !pr-9 text-white text-base'>
      <Dropdown.Item>profile</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </Dropdown>
      </div>
    </div>
  )
}

export default Header