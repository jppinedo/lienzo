export const buttonStyles = {
  default: {
    solid: 'bg-gray-100 hover:bg-gray-opacity-30 text-gray-700',
    outline: 'text-gray-700 border-gray-300 border-2 bg-transparent hover:bg-gray-opacity-14 dark:text-blue-200',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-opacity-14 dark:text-blue-200',
  },
  green: {
    solid: 'bg-pio-teal-dark hover:bg-pio-teal-dark-hover text-white',
    outline: 'text-pio-teal-dark border-pio-teal-dark border-2 bg-transparent hover:bg-pio-teal-dark-opacity-14',
    ghost: 'text-pio-teal-dark bg-transparent hover:bg-pio-teal-dark-opacity-14',
  },
  yellow: {
    solid: 'bg-pio-amber hover:bg-pio-amber-hover text-pio-amber-dark',
    outline: 'text-pio-amber-dark border-pio-amber hover:bg-pio-amber-opacity-14 border-2 bg-transparent dark:text-pio-amber',
    ghost: 'text-pio-amber-dark bg-transparent hover:bg-pio-amber-opacity-14',
  },
  red: {
    solid: 'bg-pio-coral hover:bg-pio-coral-hover text-white',
    outline: 'text-pio-coral border-pio-coral border-2 bg-transparent hover:bg-pio-coral-opacity-14',
    ghost: 'text-pio-coral bg-transparent hover:bg-pio-coral-opacity-14',
  },
  mode: {
    default: 'px-3 py-1 rounded-xl flex items-center justify-center',
    tool: 'items-center flex flex-col text-xs py-2 px-3 rounded-md',
  }
};

export const iconStyles = {
  default: {
    solid: 'text-gray-300',
    outline: 'text-gray-300',
    ghost: 'text-gray-300',
  },
  green: {
    solid: 'text-white',
    outline: 'text-pio-teal-dark',
    ghost: 'text-pio-teal-dark',
  },
  yellow: {
    solid: 'text-pio-amber-dark',
    outline: 'text-pio-amber-dark dark:text-pio-amber',
    ghost: 'text-pio-amber-dark dark:text-pio-amber',
  },
  red: {
    solid: 'text-white',
    outline: 'text-pio-coral',
    ghost: 'text-pio-coral',
  }
}
