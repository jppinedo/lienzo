export type TabsVariant = 'underline' | 'pills' | 'segmented';

export const tablistClass: Record<TabsVariant, string> = {
  underline: 'border-b border-gray-300 flex dark:border-gray-700',
  pills: [
    'inline-flex',
    'p-1.5',
    'rounded-full',
    'bg-white',
    'border',
    'border-pio-grid',
    'shadow-sm',
    'flex-wrap',
    'gap-1',
    'max-w-full',
    'overflow-x-auto',
    'list-none',
    'm-0',
    'dark:bg-gray-900',
    'dark:border-gray-700',
  ].join(' '),
  segmented: [
    'inline-flex',
    'p-1',
    'rounded-full',
    'bg-pio-bg-light',
    'border',
    'border-pio-grid',
    'flex-wrap',
    'gap-1',
    'max-w-full',
    'overflow-x-auto',
    'list-none',
    'm-0',
    'dark:bg-gray-800',
    'dark:border-gray-700',
  ].join(' '),
};

export const tabItemClass: Record<TabsVariant, string> = {
  underline: 'relative',
  pills: 'flex-shrink-0 list-none',
  segmented: 'flex-shrink-0 list-none',
};

const underlineButton =
  'py-2 px-6 block outline-none opacity-80 hover:opacity-100 text-gray-900 dark:text-blue-200';

const pillsButton = {
  active:
    'px-4 py-2 rounded-full text-xs font-semibold font-jakarta transition-all duration-200 bg-pio-coral text-white shadow-md',
  inactive: [
    'px-4',
    'py-2',
    'rounded-full',
    'text-xs',
    'font-semibold',
    'font-jakarta',
    'text-pio-text-muted',
    'hover:text-pio-text',
    'hover:bg-pio-border-subtle',
    'transition-all',
    'duration-200',
    'dark:hover:text-white',
    'dark:hover:bg-gray-800',
  ].join(' '),
};

const segmentedButton = {
  active: [
    'px-2.5',
    'py-1.5',
    'rounded-full',
    'text-xs',
    'font-bold',
    'font-jakarta',
    'bg-white',
    'shadow-sm',
    'text-pio-text',
    'text-center',
    'transition-all',
    'duration-200',
    'dark:bg-gray-900',
    'dark:text-white',
  ].join(' '),
  inactive: [
    'px-2.5',
    'py-1.5',
    'rounded-full',
    'text-xs',
    'font-medium',
    'font-jakarta',
    'text-pio-stone',
    'hover:text-pio-text',
    'text-center',
    'transition-all',
    'duration-200',
    'dark:text-gray-300',
    'dark:hover:text-white',
  ].join(' '),
};

export const tabButtonClass = (variant: TabsVariant, active: boolean): string => {
  if (variant === 'pills') {
    return active ? pillsButton.active : pillsButton.inactive;
  }
  if (variant === 'segmented') {
    return active ? segmentedButton.active : segmentedButton.inactive;
  }
  return underlineButton;
};

export const tabUnderlineBar = (active: boolean): string =>
  `absolute bottom-0 left-0 h-0.5 bg-pio-teal-dark transition-all duration-200 ${active ? 'w-full' : 'w-0'}`;
