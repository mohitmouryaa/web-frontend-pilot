import { Menu } from 'primereact/menu';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function MenuContainer({ sideBarMenu, setHeader }) {
  const navigate = useNavigate();
  const handleMenuItemClick = ({ event, path }) => {
    setHeader(event?.item?.label);
    navigate(path);
  };
  // useEffect(() => {
  //   const arr = doctorData.name.split(' ');
  //   const doctorName = arr[0] + ' ' + arr[1];
  //   sideBarMenu[0].label = `${doctorName} Profile`;
  //   handleMenuItemClick({
  //     event: { item: { label: `${doctorName} Profile` } },
  //     path: 'profile',
  //   });
  // }, []);
  const items = sideBarMenu.map(
    ({ icon, label, path, relativePath }, index) => ({
      label: label,
      icon: `pi ${icon}`,
      command: (event) => handleMenuItemClick({ event, path }),
    }),
  );
  return (
    <div>
      <Menu model={items} className="border-none bg-cyan-100 w-full" />
    </div>
  );
}
