import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft} from "react-icons/hi";
import { HiUsers} from "react-icons/hi";
import CategoryIcon from '@material-ui/icons/Category';





export const SidebarData = [
  {
    title: 'Users',
    path: '/users',
    icon: <HiUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Category Expense',
    path: '/categoryexpense',
    icon: <CategoryIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Category Income',
    path: '/categoryincome',
    icon: <CategoryIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Expense',
    path: '/expense',
    icon: <HiArrowNarrowRight />,
    cName: 'nav-text'
  },
  {
    title: 'Income',
    path: '/income',
    icon: <HiArrowNarrowLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Weekly Reports',
    path: '/weeklyreports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Monthly Reports',
    path: '/monthlyreports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Yearly Reports',
    path: '/yearlyreports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
