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
      focused: 'border-gray-600',
      unfocused: 'border-gray-300',
      icon: 'text-gray-300',
      hint: 'text-gray-300',
      input: 'placeholder:text-gray-300 text-gray-700 dark:text-blue-200',
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
      container: 'bg-pio-coral-opacity-14 hover:bg-pio-coral-opacity-20 border-2 px-2',
      focused: 'border-pio-coral',
      unfocused: 'border-transparent',
      icon: 'text-pio-coral-muted',
      hint: 'text-pio-coral-muted',
      input: 'placeholder:text-pio-coral-muted text-pio-coral-dark',
    },
    outline: {
      container: 'bg-transparent border hover:bg-pio-coral-opacity-14 px-3',
      focused: 'border-pio-coral',
      unfocused: 'border-pio-coral-muted',
      icon: 'text-pio-coral-muted',
      hint: 'text-pio-coral-muted',
      input: 'placeholder:text-pio-coral-muted text-pio-coral-dark',
    },
    ghost: {
      container: 'bg-transparent hover:bg-pio-coral-opacity-14 border-2 px-2',
      focused: 'border-pio-coral',
      unfocused: 'border-transparent',
      icon: 'text-pio-coral-muted',
      hint: 'text-pio-coral-muted',
      input: 'placeholder:text-pio-coral-muted text-pio-coral-dark',
    },
  },
  green: {
    solid: {
      container: 'bg-pio-teal-dark-opacity-14 hover:bg-pio-teal-dark-opacity-20 border-2 px-2',
      focused: 'border-pio-teal-dark',
      unfocused: 'border-transparent',
      icon: 'text-pio-teal-dark-muted',
      hint: 'text-pio-teal-dark-muted',
      input: 'placeholder:text-pio-teal-dark-muted text-pio-teal-dark',
    },
    outline: {
      container: 'bg-transparent border hover:bg-pio-teal-dark-opacity-14 px-3',
      focused: 'border-pio-teal-dark',
      unfocused: 'border-pio-teal-dark-muted',
      icon: 'text-pio-teal-dark-muted',
      hint: 'text-pio-teal-dark-muted',
      input: 'placeholder:text-pio-teal-dark-muted text-pio-teal-dark',
    },
    ghost: {
      container: 'bg-transparent hover:bg-pio-teal-dark-opacity-14 border-2 px-2',
      focused: 'border-pio-teal-dark',
      unfocused: 'border-transparent',
      icon: 'text-pio-teal-dark-muted',
      hint: 'text-pio-teal-dark-muted',
      input: 'placeholder:text-pio-teal-dark-muted text-pio-teal-dark',
    },
  },
  label: 'text-gray-700 dark:text-blue-200',
  container: 'input-group flex items-center gap-2',
  input: 'flex-grow bg-transparent py-2 outline-none min-w-0',
};

export default InputStyles;
