import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import './../../styles/navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const items = [
    {
      label: (
        <Button link className="navbar-btn">
          EMPLOYERS
        </Button>
      ),
    },
    {
      label: (
        <Button link className="navbar-btn">
          HEALTH PLANS
        </Button>
      ),
    },
    {
      label: (
        <Button link className="navbar-btn">
          PROVIDERS
        </Button>
      ),
    },
    {
      label: (
        <Link to={'/login'}>
          <Button link className="navbar-btn">
            LOGIN
          </Button>
        </Link>
      ),
    },
  ];

  const start = (
    <Link to={'/'}>
      <Image src="img/logo.svg" alt="Image" height="40" className="mr-2" />
    </Link>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Link to={'/Signup'}>
        <Button
          style={{
            color: 'rgba(60, 134, 142, 1)',
            backgroundColor: 'rgba(179, 236, 242, 1)',
          }}
          size="small"
          className="border-none"
        >
          <span className="font-medium ">Get Started</span>
        </Button>
      </Link>
    </div>
  );

  return (
    <div className="mx-4">
      <Menubar id="navbar-body" model={items} start={start} end={end} />
    </div>
  );
}
