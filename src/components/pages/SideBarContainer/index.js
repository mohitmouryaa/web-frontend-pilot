import React, { useState } from 'react';
import LoginHeader from '../../common/LoginHeader';
import SideBar from '../../common/SideBar';
import MenuContainer from '../../common/MenuContainer';
import { sideBarMenu } from '../../../utils/constants';
import { Outlet } from 'react-router';
export default function SideBarContainer() {
  const [header, setHeader] = useState('');
  return (
    <div>
      <LoginHeader {...{ header }} />
      {/* use Toolbar component for header */}
      <div
        className="flex fixed w-full"
        style={{ height: 'calc(100vh - 6rem)' }}
      >
        <div className="w-20rem bg-cyan-100 relative">
          <SideBar>
            <MenuContainer {...{ sideBarMenu, setHeader }} />
          </SideBar>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
