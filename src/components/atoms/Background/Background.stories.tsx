import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Background, {BackgroundProps} from './Background';
import Title from '@atoms/Title/Title';
import { Cpu, Eye, Box } from 'react-feather';
import Button from '@atoms/Button/Button';
// import '@css/fullHeightCanvas.css';

export default {
  title: 'Atoms/Background',
  component: Background,
  argTypes: {
    color1: { control: 'color' },
    color2: { control: 'color' },
    color3: { control: 'color' },
    color4: { control: 'color' },
    color5: { control: 'color' },
    isHexColors: { control: 'boolean' },
    rounded: { control: 'boolean' },
  } as unknown, // Change the type of argTypes to unknown
} as Meta;

type ExtendedBackgroundProps = BackgroundProps & {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
};

const Template: StoryFn<ExtendedBackgroundProps> = ({ color1, color2, color3, color4, color5, ...args }) => {
  const colors = [color1, color2, color3, color4, color5];

  return(
    <div className='p-3 h-full'>
      <Background colors={colors} {...args}>
        <div className="py-20 px-4 flex flex-col justify-center items-center w-full h-full">
          <div className='text-red mb-3'><Cpu size={64} /></div>
          <Title size='xxl'>Something is coming</Title>
          <p className='text-white text-lg w-2/5 text-center mt-3 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at pellentesque aliquet nisl.
          </p>
          <Button label='Learn more' type='red' onClick={() => console.log("click")} />
        </div>
      </Background>
    </div>
  );
}
export const Default = Template.bind({});
Default.args = {
  color1: '#ff8077',
  color2: '#ffc9c4',
  color3: '#ffc076',
  color4: '#fb9eb7',
  color5: '#ff8077',
  isHexColors: true,
  rounded: true,
};

export const ExampleBackgroundOne = () => {
  const colors = ['#c9ffe9', '#5cbeff', '#9f75ff', '#d498ff', '#ffffff'];
  return (
    <div className='p-3 h-full'>
      <Background colors={colors} isHexColors rounded>
        <div className="py-20 px-4 flex flex-col justify-center items-center w-full h-full">
          <div className='text-white mb-3'><Eye size={64} /></div>
          <Title size='xxl'>Keep your eyes open</Title>
          <p className='text-white text-lg w-2/5 text-center mt-3 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at pellentesque aliquet nisl.
          </p>
          <Button label='Learn more' type='default' onClick={() => console.log("click")} />
        </div>
      </Background>
    </div>
  )
};

export const ExampleBackgroundTwo = () => {
  const colors = ['#e1ffb5', '#b7d669', '#77cd8f', '#67ff9f', '#e1ffb5'];
  return (
    <div className='p-3 h-full'>
      <Background colors={colors} isHexColors rounded>
        <div className="py-20 px-4 flex flex-col justify-center items-center w-full h-full">
          <div className='text-white mb-3'><Box size={64} /></div>
          <Title size='xxl'>Think outside the box</Title>
          <p className='text-white text-lg w-2/5 text-center mt-3 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at pellentesque aliquet nisl.
          </p>
          <Button label='Learn more' type='green' onClick={() => console.log("click")} />
        </div>
      </Background>
    </div>
  )
};