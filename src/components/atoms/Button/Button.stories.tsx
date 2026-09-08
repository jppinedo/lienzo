
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './Button';
import Box from '@atoms/Box/Box';
import { Copy, Crop, Codepen, Codesandbox, Command, Trash2, Bold, Italic, Share2, Airplay, Save, Loader } from 'react-feather';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const DefaultButtons = () => (
  <div className='p-3'>
  <Box className='gap-x-2 flex'>
    <Button 
      label='Red ghost'
      onClick={() => action('Red ghost Button clicked!')}
      ariaLabel='Red ghost Button'
      type='red'
      fill='ghost'
    />
    <Button 
      label='Green ghost' 
      onClick={() => action('Green ghost Button clicked!')} 
      ariaLabel='Green ghost Button' 
      type='green' 
      fill='ghost' 
    />
    <Button 
      label='Yellow ghost' 
      onClick={() => action('Yellow ghost Button clicked!')} 
      ariaLabel='Yellow ghost Button'
      type='yellow' 
      fill='ghost' 
    />
    <Button 
      label='Default ghost' 
      onClick={() => action('Default ghost Button clicked!')} 
      ariaLabel='Default ghost Button'
      type='default' 
      fill='ghost' 
    />
    
  </Box>

  <Box className='gap-x-2 flex mt-2'>
    <Button 
      label='Red Solid'
      onClick={() => action('Red Solid Button clicked!')}
      ariaLabel='Red Solid Button'
      type='red'
      fill='solid'
    />
    <Button 
      label='Green Solid' 
      onClick={() => action('Green Solid Button clicked!')} 
      ariaLabel='Green Solid Button' 
      type='green' 
      fill='solid' 
    />
    <Button 
      label='Yellow Solid' 
      onClick={() => action('Yellow Solid Button clicked!')} 
      ariaLabel='Yellow Solid Button'
      type='yellow' 
      fill='solid' 
    />
    <Button 
      label='Default Solid' 
      onClick={() => action('Default Solid Button clicked!')} 
      ariaLabel='Default Solid Button'
      type='default' 
      fill='solid' 
    />
  </Box>
  <Box className='gap-x-2 flex mt-2'>
    <Button 
      label='Red Outline'
      onClick={() => action('Red Outline Button clicked!')}
      ariaLabel='Red Outline Button'
      type='red'
      fill='outline'
    />
    <Button 
      label='Green Outline' 
      onClick={() => action('Green Outline Button clicked!')} 
      ariaLabel='Green Outline Button' 
      type='green' 
      fill='outline' 
    />
    <Button 
      label='Yellow Outline' 
      onClick={() => action('Yellow Outline Button clicked!')} 
      ariaLabel='Yellow Outline Button'
      type='yellow' 
      fill='outline' 
    />
    <Button 
      label='Default Outline' 
      onClick={() => action('Default Outline Button clicked!')} 
      ariaLabel='Default Outline Button'
      type='default' 
      fill='outline' 
    />
    
  </Box>

  <Box className='gap-x-2 flex mt-2'>
    <Button 
      label='Red Icon'
      onClick={() => action('Red Icon Button clicked!')}
      ariaLabel='Red Icon Button'
      type='red'
      fill='outline'
      icon={<Codepen />}
    />
    <Button 
      label='Green Icon' 
      onClick={() => action('Green Icon Button clicked!')} 
      ariaLabel='Green Icon Button' 
      type='green' 
      fill='solid'
      icon={<Codesandbox />}
    />
    <Button 
      label='Yellow Icon' 
      onClick={() => action('Yellow Icon Button clicked!')} 
      ariaLabel='Yellow Icon Button'
      type='yellow' 
      fill='outline'
      icon={<Command />}
      iconPosition='right'
    />
    <Button 
      label='Default Icon' 
      onClick={() => action('Default Icon Button clicked!')} 
      ariaLabel='Default Icon Button'
      type='default' 
      fill='ghost'
      icon={<Crop />}
      iconPosition='right' 
    />
    
  </Box>
  </div>
);

export const ToolButtons = () => (
  <div className='p-3'>
  <Box className='gap-x-2 flex'>
    <Button 
      label='Copy'
      onClick={() => action('Red Tool Button clicked!')}
      ariaLabel='Copy Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Copy />}
      iconPosition='top'
    />
     <Button 
      label='Bold'
      onClick={() => action('Bold Tool Button clicked!')}
      ariaLabel='Bold Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Bold />}
      iconPosition='top'
    />
    <Button 
      label='Italic'
      onClick={() => action('Italic Tool Button clicked!')}
      ariaLabel='Italic Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Italic />}
      iconPosition='top'
    />
    <Button 
      label='Crop'
      onClick={() => action('Crop Tool Button clicked!')}
      ariaLabel='Crop Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Crop />}
      iconPosition='top'
    />
    <Button 
      label='Delete'
      onClick={() => action('Delete Tool Button clicked!')}
      ariaLabel='Delete Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Trash2 />}
      iconPosition='top'
    />
  </Box>

  <Box type='glass' className='gap-x-2 flex mt-4'>
    <Button 
      label='Share'
      onClick={() => action('Red Tool Button clicked!')}
      ariaLabel='Copy Tool Button'
      mode='tool'
      type='green'
      fill='solid'
      icon={<Share2 />}
      iconPosition='top'
    />
    <Button 
      label='Airplay'
      onClick={() => action('Bold Tool Button clicked!')}
      ariaLabel='Bold Tool Button'
      mode='tool'
      type='red'
      fill='solid'
      icon={<Airplay />}
      iconPosition='top'
    />
    <Button 
      label='Save'
      onClick={() => action('Italic Tool Button clicked!')}
      ariaLabel='Italic Tool Button'
      mode='tool'
      type='yellow'
      fill='solid'
      icon={<Save />}
      iconPosition='top'
    />
    <Button 
      label='Create'
      onClick={() => action('Crop Tool Button clicked!')}
      ariaLabel='Crop Tool Button'
      mode='tool'
      type='default'
      fill='solid'
      icon={<Loader />}
      iconPosition='top'
    />
  </Box>
  <Box type='default' className='gap-x-2 flex mt-4'>
    <Button 
      label='Share'
      onClick={() => action('Red Tool Button clicked!')}
      ariaLabel='Copy Tool Button'
      mode='tool'
      type='green'
      fill='outline'
      icon={<Share2 />}
      iconPosition='top'
    />
    <Button 
      label='Airplay'
      onClick={() => action('Bold Tool Button clicked!')}
      ariaLabel='Bold Tool Button'
      mode='tool'
      type='red'
      fill='outline'
      icon={<Airplay />}
      iconPosition='top'
    />
    <Button 
      label='Save'
      onClick={() => action('Italic Tool Button clicked!')}
      ariaLabel='Italic Tool Button'
      mode='tool'
      type='yellow'
      fill='outline'
      icon={<Save />}
      iconPosition='top'
    />
    <Button 
      label='Create'
      onClick={() => action('Crop Tool Button clicked!')}
      ariaLabel='Crop Tool Button'
      mode='tool'
      type='default'
      fill='outline'
      icon={<Loader />}
      iconPosition='top'
    />
  </Box>
  <Box type='default' className='gap-x-2 flex mt-4'>
    <Button 
      onClick={() => action('Red Tool Button clicked!')}
      ariaLabel='Copy Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Share2 size={18}/>}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Bold Tool Button clicked!')}
      ariaLabel='Bold Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Airplay size={18} />}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Italic Tool Button clicked!')}
      ariaLabel='Italic Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Save size={18} />}
      iconPosition='top'
    />
    <Button 

      onClick={() => action('Crop Tool Button clicked!')}
      ariaLabel='Crop Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Loader size={18} />}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Red Tool Button clicked!')}
      ariaLabel='Copy Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Copy size={18}/>}
      iconPosition='top'
    />
     <Button 
      onClick={() => action('Bold Tool Button clicked!')}
      ariaLabel='Bold Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Bold  size={18}/>}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Italic Tool Button clicked!')}
      ariaLabel='Italic Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Italic size={18}/>}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Crop Tool Button clicked!')}
      ariaLabel='Crop Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Crop size={18} />}
      iconPosition='top'
    />
    <Button 
      onClick={() => action('Delete Tool Button clicked!')}
      ariaLabel='Delete Tool Button'
      mode='tool'
      type='default'
      fill='ghost'
      icon={<Trash2 size={18}/>}
      iconPosition='top'
    />
  </Box>
  </div>
);

const Template: StoryFn<ButtonProps> = (args) => (
  <div className='p-3'><Button {...args} /></div>
);

export const SingleButton = Template.bind({});
SingleButton.args = {
  label: 'Red Solid',
  onClick: () => action('Red Solid Button clicked!'),
  ariaLabel: 'Red Solid Button',
  type: 'red',
  fill: 'solid'
};

const emptyControls = { controls: { disable: true }}
DefaultButtons.parameters = emptyControls;
ToolButtons.parameters = emptyControls