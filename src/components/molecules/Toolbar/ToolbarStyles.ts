
const getItemBorder = (index: number) => (
  `${index === 0 ? '' : 'border-l border-blue-200 dark:border-gray-700'}`
);

export const toolbarStyles = (rounded?: string, ) => {
  let roundedStyle = rounded === 'default' ? 'rounded' : `rounded-${rounded}`;
  roundedStyle = !rounded || rounded === 'none' ? '' : roundedStyle;
  const shadow = 'shadow-sm dark:shadow-none dark:border dark:border-gray-700';

  const baseStyles = {
    itemBorder: (index: number) => '',
    toolbar: `toolbar flex bg-white dark:bg-gray-900 relative px-1 ${roundedStyle} ${shadow}`,
  };

  return baseStyles;
};

export const toolbarItemStyles = (menuPosition: 'top' | 'bottom') => {
  const top = menuPosition === 'top' ? 'lz-menu-top' : '';
  const paddingY = menuPosition === 'top' ? 'pb-2' : 'pt-2';

  const styles = {
    toolbarItem:`text-gray-700 dark:text-blue-200 cursor-pointer`,
    menuIcon: "ml-1",
    menuContainer: `absolute z-10 inline-block outline-none ${paddingY} ${top}`,
    itemContainer: "py-2 px-1 flex items-center",
  };

  return styles;
};
