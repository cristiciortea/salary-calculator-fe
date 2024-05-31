import { MouseEventHandler, useEffect, useRef, useState } from 'react';

interface DropdownMenuProps {
  menuTitle: string;
  activeItems: string[];
  disabledItems: string[];
}

function DropdownMenu({ menuTitle, activeItems, disabledItems }: DropdownMenuProps) {
  return (
    <div className="dropdown dropdown-bottom relative">
      <div
        tabIndex={0}
        role="button"
        className="hover:bg-emerald-800 rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
      >
        {menuTitle}
        <ul className="dropdown-content z-[2] menu p-2 rounded-box w-52 bg-[#0a493a] absolute">
          {activeItems.map((item, index) => (
            <li key={index}>
              <a>{item}</a>
            </li>
          ))}
          {disabledItems.map((item, index) => (
            <li key={index} className="text-gray-500">
              <a className="hover:cursor-not-allowed">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
