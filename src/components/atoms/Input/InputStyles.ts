import { RoundedSizes } from '@interfaces/sizes';

export const inputRounded: Record<RoundedSizes, string> = {
  none: 'rounded-none',
  default: 'rounded',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

const InputStyles = {
  default: {
    solid: {
      container: 'bg-gray-opacity-14 hover:bg-gray-opacity-20 border-2 px-2',
      focused: 'border-gray-300',
      unfocused: 'border-transparent',
      icon: 'text-gray-300',
      hint: 'text-gray-300',
      input: 'placeholder:text-gray-300 text-gray-700 dark:text-blue-200',
    },
    outline: {
      container: 'bg-transparent border hover:bg-gray-opacity-14 px-3',
      focused: 'border-pio-teal-dark',
      unfocused: 'border-pio-grid',
      icon: 'text-pio-text-muted',
      hint: 'text-pio-text-muted',
      input: 'placeholder:text-pio-text-muted text-pio-text dark:text-blue-200',
    },
    ghost: {
      container: 'bg-transparent hover:bg-gray-opacity-14 border-2 px-2',
      focused: 'border-gray-300',
      unfocused: 'border-transparent',
      icon: 'text-gray-300',
      hint: 'text-gray-300',
      input: 'placeholder:text-gray-300 text-gray-700 dark:text-blue-200',
    },
  },
  red: {
    solid: {
      container: 'bg-red-opacity-14 hover:bg-red-opacity-20 border-2 px-2',
      focused: 'border-red',
      unfocused: 'border-transparent',
      icon: 'text-red-300',
      hint: 'text-red-300',
      input: 'placeholder:text-red-300 text-red-dark',
    },
    outline: {
      container: 'bg-transparent border hover:bg-red-opacity-14 px-3',
      focused: 'border-red',
      unfocused: 'border-red-300',
      icon: 'text-red-300',
      hint: 'text-red-300',
      input: 'placeholder:text-red-300 text-red-dark',
    },
    ghost: {
      container: 'bg-transparent hover:bg-red-opacity-14 border-2 px-2',
      focused: 'border-red',
      unfocused: 'border-transparent',
      icon: 'text-red-300',
      hint: 'text-red-300',
      input: 'placeholder:text-red-300 text-red-dark',
    },
  },
  green: {
    solid: {
      container: 'bg-green-opacity-14 hover:bg-green-opacity-20 border-2 px-2',
      focused: 'border-green',
      unfocused: 'border-transparent',
      icon: 'text-green-300',
      hint: 'text-green-300',
      input: 'placeholder:text-green-300 text-green',
    },
    outline: {
      container: 'bg-transparent border hover:bg-green-opacity-14 px-3',
      focused: 'border-green',
      unfocused: 'border-green-300',
      icon: 'text-green-300',
      hint: 'text-green-300',
      input: 'placeholder:text-green-300 text-green',
    },
    ghost: {
      container: 'bg-transparent hover:bg-green-opacity-14 border-2 px-2',
      focused: 'border-green',
      unfocused: 'border-transparent',
      icon: 'text-green-300',
      hint: 'text-green-300',
      input: 'placeholder:text-green-300 text-green',
    },
  },
  label: 'text-gray-700 dark:text-blue-200',
  container: 'input-group flex items-center gap-2',
  input: 'flex-grow bg-transparent py-2 outline-none min-w-0',
};

export default InputStyles;
