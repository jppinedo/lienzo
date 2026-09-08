export const buttonStyles = {
  default: {
    solid: 'bg-gray-100 hover:bg-blue-200 text-gray-700',
    outline: 'text-gray-700 border-gray-300 border-2 bg-transparent hover:bg-gray-opacity-14 dark:text-blue-200',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-opacity-14 dark:text-blue-200',
  },
  green: {
    solid: 'bg-green hover:bg-green-bright text-white',
    outline: 'text-green border-green border-2 bg-transparent hover:bg-green-opacity-14',
    ghost: 'text-green bg-transparent hover:bg-green-opacity-14',
  },
  yellow: {
    solid: 'bg-yellow hover:bg-yellow-bright text-yellow-dark',
    outline: 'text-yellow-dark border-yellow hover:bg-yellow-ghost border-2 bg-transparent dark:text-yellow',
    ghost: 'text-yellow-dark bg-transparent hover:bg-yellow-ghost',
  },
  red: {
    solid: 'bg-red hover:bg-red-bright text-white',
    outline: 'text-red border-red border-2 bg-transparent hover:bg-red-opacity-14',
    ghost: 'text-red bg-transparent hover:bg-red-opacity-14',
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
    outline: 'text-green',
    ghost: 'text-green',
  },
  yellow: {
    solid: 'text-yellow-dark',
    outline: 'text-yellow-dark dark:text-yellow',
    ghost: 'text-yellow-dark dark:text-yellow',
  },
  red: {
    solid: 'text-white',
    outline: 'text-red',
    ghost: 'text-red',
  }
}