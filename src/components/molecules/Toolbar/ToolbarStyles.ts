
const getItemBorder = (index: number) => (
  `${index === 0 ? '' : 'border-l border-gray-300 dark:border-gray-700'}`
);

// Class names are the Tailwind v4 equivalents of the v3 radii for each public prop value.
const toolbarRoundedClass: Record<string, string> = {
  default: 'rounded-sm',
  sm: 'rounded-xs',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const toolbarStyles = (rounded?: string) => {
  const roundedStyle = !rounded || rounded === 'none' ? '' : (toolbarRoundedClass[rounded] ?? '');
  const shadow = 'shadow-xs dark:shadow-none dark:border dark:border-gray-700';

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
    menuContainer: `absolute z-10 inline-block outline-hidden ${paddingY} ${top}`,
    itemContainer: "py-2 px-1 flex items-center",
  };

  return styles;
};
