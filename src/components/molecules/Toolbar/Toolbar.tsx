import React, { useState } from 'react';
import ToolbarItem, { ToolbarItemType } from './ToolbarItem';
import {toolbarStyles } from './ToolbarStyles'
import { RoundedSizes } from '@interfaces/sizes';

export interface ToolbarProps {
  items: ToolbarItemType[];
  menuPosition?: 'top' | 'bottom';
  type?: 'button' | 'label';
  rounded?: RoundedSizes;
}

const Toolbar: React.FC<ToolbarProps> = ({ 
  items, 
  menuPosition = 'bottom', 
  type = 'label',
  rounded = 'default'
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const styles = toolbarStyles(rounded);
  
  return (
    <ul className={styles.toolbar}>
      {items.map((item, index) => (
        <li className={`${styles.itemBorder(index)} ${styles}`} key={index}>
          <ToolbarItem 
            item={item}
            open={item.id === openItem} 
            setOpen={() => setOpenItem(item.id === openItem ? null : item.id)} 
            menuPosition={menuPosition}
            type={type}
          />
        </li>
      ))}
    </ul>
  );
};

export default Toolbar;