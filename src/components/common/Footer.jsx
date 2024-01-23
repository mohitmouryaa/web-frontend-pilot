import React from 'react';
import '../../styles/footer.scss';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { footerRoutes } from './footerData';

function MyFooter() {
  return (
    <footer className="footer">
      <div className="flex" id="subFooter">
        <div className="footer1 flex-1">
          <Link to={'/'}>
            <Image
              src="img/logo.svg"
              alt="Image"
              height="40"
              className="mr-2"
            />
          </Link>
        </div>
        <div className='footerMenu'style={{flex:3, flexWrap:'wrap', display:'flex'}}>
            {footerRoutes.map((routes) => {
              return <div>{routes.name}</div>;
            })}
        </div>

        <div className="footer2 flex-1">
          <ul>
            <li>About</li>
            <li>Employers</li>
            <li>Health plans</li>
          </ul>
        </div>
      </div>
      <div
        className="flex flex-row mx-5"
        style={{ justifyContent: 'space-between' }}
      >
        <div className="flex flex-row footerlastMenu">
          <div>privacy policy</div>
          <div>terms of use</div>
          <div>accessibility notice</div>
        </div>
        <div className="copyright mx-5">
          @MobilityZ Health all rights reserved
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
