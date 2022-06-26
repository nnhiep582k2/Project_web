import { FaRegNewspaper } from 'react-icons/fa';
import { BsBookmark, BsPeople } from 'react-icons/bs';
import { IoIosNotificationsOutline, IoIosLogOut } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';

export const Pages = [
    {
        id: 0,
        name: 'News Feed',
        icon: <FaRegNewspaper />,
    },
    {
        id: 1,
        name: 'Notification',
        icon: <IoIosNotificationsOutline />,
    },
    {
        id: 2,
        name: 'Saved',
        icon: <BsBookmark />,
    },
    {
        id: 3,
        name: 'People',
        icon: <BsPeople />,
    },
    {
        id: 4,
        name: 'Profile',
        icon: <FiUser />,
    },
    {
        id: 5,
        name: 'Settings',
        icon: <AiOutlineSetting />,
    },
    {
        id: 6,
        name: 'Logout',
        icon: <IoIosLogOut />,
    },
];
