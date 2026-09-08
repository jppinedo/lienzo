// ToolbarItem.tsx
import React, { useEffect, useRef } from 'react';
import Menu, { MenuProps} from '@components/molecules/Menu/Menu';
import { ChevronDown } from 'react-feather';
import { toolbarItemStyles } from './ToolbarStyles';

export interface ToolbarItemType {
  item: string | React.ReactElement;
  menu?: MenuProps;
  onClick: () => void;
  id?: string;
}

export interface ToolabarItemProps {
  item: ToolbarItemType;
  open: boolean;
  setOpen: (status: boolean) => void;
  menuPosition?: 'top' | 'bottom';
  type?: 'button' | 'label';
}

const ToolbarItem: React.FC<ToolabarItemProps> = ({ 
  item, 
  menuPosition = 'bottom', 
  open, 
  setOpen,
  type = 'label'
}) => {
  const itemRef = useRef(null);
  const menuRef = useRef(null);
  const styles  = toolbarItemStyles(menuPosition)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.menu) {
      setOpen(!open);
    }
    item.onClick();
  };

  // useEffect(() => {
  //   if (open && menuRef.current) {
  //     const itemWidth = itemRef.current.clientWidth;
  //     const itemheight = itemRef.current.clientHeight;
  //     const menuWidth = menuRef.current.clientWidth;
  //     const menuHeight = menuRef.current.clientHeight;
      
  //     const translateX = itemWidth > menuWidth ? `${(itemWidth/2) + (menuWidth/2) *-1}px` : `${(itemWidth/2) - (menuWidth/2)}px`;
  //     const translateY = menuPosition === 'top' ? `-${menuHeight + itemheight + 10}px` : '10px';
  //     menuRef.current.style.transformOrigin = 'center';
  //     menuRef.current.style.transform = `translateX(${translateX}) translateY(${translateY})`;
  //     menuRef.current.focus();
  //   }
  // }, [open, itemRef, menuRef, menuPosition]);

  return (
    <div className={styles.toolbarItem} onClick={handleClick}>
      <div className={styles.itemContainer} ref={itemRef}>
        {item.item}
        {item.menu && <div className={styles.menuIcon}><ChevronDown size={16}/></div>}
      </div>
      {item.menu && open && (
        <div id="menu" className={styles.menuContainer} ref={menuRef}>
          <Menu 
            {...item.menu} 
            pointer={menuPosition === 'bottom' ? 'top' : 'bottom'}
            onClickOutside={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ToolbarItem;