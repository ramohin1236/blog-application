/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import {Link, useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Headers = () => {
    
    const path = useLocation().pathname;

   const {currentUser}=useSelector(state=>state.user);
   console.log(currentUser);

  return (
    <Navbar className="border-b-2">
        <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-black">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Mohin's</span>Blog
        </Link>
        <form >
            <TextInput
            type="text"
            placeholder="Search..."
        rightIcon={AiOutlineSearch}
        className="hidden lg:inline"
            />
        </form>
        {/* small device search button */}
        <Button className="w-12 h-10 lg:hidden" color='gray' pill>
        <AiOutlineSearch/>
        </Button>
    {/* dark mood light mood  */}
         <div className='flex gap-3 md:order-2'>
             <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
                 <FaMoon/>
             </Button>
         
    {/* SignIn   */}
         <Link >
         {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
         </Link>
            <Navbar.Toggle/>
         
         </div>
       {/* menu with responsive for all device */}
         <Navbar.Collapse>
             <Navbar.Link active={path === '/'} as={'div'} className={path === '/' ? 'text-blue-500' : ''}>
                <Link to='/home'>
                    Home 
                </Link>
             </Navbar.Link>
             <Navbar.Link active={path === '/about'} as={'div'} className={path === '/about'? 'text-blue-500' : ''}>
                <Link to='/about'>
                    About 
                </Link>
             </Navbar.Link>
             <Navbar.Link active={path === '/project'} as={'div'} className={path === '/project' ? 'text-blue-500' : ''}>
                <Link to='/project'>
                    Projects 
                </Link>
             </Navbar.Link>
         </Navbar.Collapse>
    </Navbar>
  )
}

export default Headers