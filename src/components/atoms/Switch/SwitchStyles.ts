export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchType = 'default' | 'red' | 'green' | 'yellow';

/**
 * Thumb inset matches stitch `code.html`:
 * `after:top-[2px] after:left-[2px] after:h-4 after:w-4` on an `h-5 w-9` track.
 * Same 2px gap is applied at every size so the white circle sits inside the track.
 */
export const switchSize: Record<
  SwitchSize,
  { container: string; thumb: string; thumbOn: string }
> = {
  sm: {
    container: 'h-3 w-6',
    thumb: 'top-0.5 left-0.5 h-2 w-2',
    thumbOn: 'translate-x-3',
  },
  md: {
    container: 'h-5 w-9',
    thumb: 'top-0.5 left-0.5 h-4 w-4',
    thumbOn: 'translate-x-full',
  },
  lg: {
    container: 'h-6 w-12',
    thumb: 'top-0.5 left-0.5 h-5 w-5',
    thumbOn: 'translate-x-6',
  },
};

/** Off track — warm structural border wash (stitch `bg-lienzo-border`). */
export const switchOff = 'bg-pio-grid dark:bg-gray-600';

export const switchOn: Record<SwitchType, string> = {
  default: 'bg-gray-600 dark:bg-gray-500',
  green: 'bg-pio-teal-dark',
  red: 'bg-pio-coral',
  yellow: 'bg-pio-amber',
};

export const switchThumb =
  'absolute rounded-full bg-white border border-pio-grid dark:border-none transition-transform duration-200 ease-in-out';
