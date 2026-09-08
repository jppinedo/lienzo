import React from "react";

export interface TabButton {
    id: string;
    label: React.ReactNode;
    active: boolean;
    onClick: (id: string) => void;
}

const TabButton: React.FC<TabButton> = ({ id, label, active, onClick }) => {

  return (
    <li role="presentation" key={id} className="relative">
      <button
        role="tab"
        id={`tab-${id}`}
        aria-controls={`tabpanel-${id}`}
        aria-selected={active}
        className='py-2 px-6 block outline-none opacity-80 hover:opacity-100 text-gray-900 dark:text-blue-200'
        onClick={() => onClick(id)}
      >
        {label}
      </button>
      <div 
        className={`absolute bottom-0 left-0 h-0.5 bg-green-bright transition-all duration-200 ${active ? 'w-full' : 'w-0'}`}
      ></div>
    </li>
  )
}

export default TabButton;