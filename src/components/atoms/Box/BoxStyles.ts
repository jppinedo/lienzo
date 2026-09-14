export const boxStyles = {
  default: [
    'bg-pio-bg',
    'p-1',
    'rounded-3xl',
    'overflow-hidden',
    'text-black',
    'dark:bg-gray-800',
    'dark:text-blue-200',
  ].join(' '),
  glass: [
    'bg-white-opacity-14',
    'border',
    'border-gray-100',
    'dark:border-gray-600',
    'dark:bg-gray-opacity-14',
    'rounded-lg',
    'p-3',
    'dark:text-white',
  ].join(' '),
};

// Inner content area: lighter background, rounded (sits inside main container 2px padding)
export const boxContentArea = [
  'bg-pio-bg-light',
  'rounded-3xl',
  'overflow-hidden',
  'dark:bg-gray-900',
].join(' ');

export const boxHeader = 'px-5 pt-5 pb-2';
export const boxHeaderOutside = 'px-3 py-3';
export const boxContent = 'p-5';
// px-6 = outer p-1 + inner px-5 so footer aligns with header/content
export const boxFooter = 'px-5 py-3';
