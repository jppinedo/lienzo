const InputStyles = {
  default: {
    container: 'bg-gray-opacity-14 hover:bg-gray-opacity-20',
    input: 'bg-transparent border-none placeholder:text-gray-300 text-gray-700 dark:text-blue-200',
    focused: 'border-gray-300',
    icon: 'text-gray-300',
    hint: 'text-gray-300'
  },
  red: {
    container: 'bg-red-opacity-14 hover:bg-red-opacity-20',
    input: 'bg-transparent border-none placeholder:text-red-300 text-red-dark',
    focused: 'border-red',
    icon: 'text-red-300',
    hint: 'text-red-300'
  },
  green: {
    container: 'bg-green-opacity-14 hover:bg-green-opacity-20',
    input: 'bg-transparent border-none placeholder:text-green-300 text-green',
    focused: 'border-green',
    icon: 'text-green-300',
    hint: 'text-green-300'
  },
  label: 'text-gray-700 dark:text-blue-200',
  container: 'input-group flex rounded-lg items-center border-2',
  input: 'flex-grow bg-transparent p-2 rounded outline-none',
};

export default InputStyles;