import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label from '@atoms/Label/Label';
import { ArrowLeft } from 'react-feather';
const tailwindConfig = require('../../tailwind.config.js');
const colors = tailwindConfig.theme.colors;

export default {
  title: 'Colors',
} as Meta;

const Template: StoryFn = () => (
  <>
  <div className='p-4'>
    <div className="flex gap-4">
      <div className="bg-white p-4" title="white"></div>
      <div className="bg-gray-100 p-4" title="gray-100"></div>
      <div className="bg-gray-300 p-4" title="gray-300"></div>
      <div className="bg-gray-600 p-4" title="gray-600"></div>
      <div className="bg-gray-700 p-4" title="gray-700"></div>
      <div className="bg-gray-opacity-14 p-4" title="gray-opacity-14"></div>
      <div className="bg-gray-opacity-20 p-4" title="gray-opacity-20"></div>
      <div className="bg-gray-opacity-30 p-4" title="gray-opacity-30"></div>
      <div className="bg-gray-800 p-4" title="gray-800"></div>
      <div className="bg-gray-900 p-4" title="gray-900"></div>
      <div className="bg-black p-4" title="black"></div>
      <div className="bg-white-opacity-14 p-4" title="white-opacity-14"></div>
      <div className="bg-black-opacity-14 p-4" title="black-opacity-14"></div>
      <div className="bg-black-opacity-20 p-4" title="black-opacity-20"></div>
      <Label text="Gray" type="default" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-blue-200 p-4" title="blue-200"></div>
      <div className="bg-blue-400 p-4" title="blue-400"></div>
      <div className="bg-blue-600 p-4" title="blue-600"></div>
      <Label text="Blue" type="default" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-bg p-4 border border-pio-grid" title="pio-bg"></div>
      <div className="bg-pio-bg-light p-4 border border-pio-grid" title="pio-bg-light"></div>
      <div className="bg-pio-bg-opacity-90 p-4 border border-pio-grid" title="pio-bg-opacity-90"></div>
      <Label text="Pio background" type="default" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-teal-black p-4" title="pio-teal-black"></div>
      <div className="bg-pio-teal-dark p-4" title="pio-teal-dark"></div>
      <div className="bg-pio-teal-dark-hover p-4" title="pio-teal-dark-hover"></div>
      <div className="bg-pio-teal-dark-muted p-4" title="pio-teal-dark-muted"></div>
      <div className="bg-pio-teal-dark-pale p-4" title="pio-teal-dark-pale"></div>
      <div className="bg-pio-teal-dark-opacity-20 p-4" title="pio-teal-dark-opacity-20"></div>
      <div className="bg-pio-teal-dark-opacity-14 p-4" title="pio-teal-dark-opacity-14"></div>
      <Label text="Pio teal dark" type="green" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-coral p-4" title="pio-coral"></div>
      <div className="bg-pio-coral-hover p-4" title="pio-coral-hover"></div>
      <div className="bg-pio-coral-dark p-4" title="pio-coral-dark"></div>
      <div className="bg-pio-coral-muted p-4" title="pio-coral-muted"></div>
      <div className="bg-pio-coral-pale p-4" title="pio-coral-pale"></div>
      <div className="bg-pio-coral-opacity-20 p-4" title="pio-coral-opacity-20"></div>
      <div className="bg-pio-coral-opacity-14 p-4" title="pio-coral-opacity-14"></div>
      <Label text="Pio coral" type="red" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-amber p-4" title="pio-amber"></div>
      <div className="bg-pio-amber-hover p-4" title="pio-amber-hover"></div>
      <div className="bg-pio-amber-dark p-4" title="pio-amber-dark"></div>
      <div className="bg-pio-amber-muted p-4" title="pio-amber-muted"></div>
      <div className="bg-pio-amber-pale p-4" title="pio-amber-pale"></div>
      <div className="bg-pio-amber-opacity-20 p-4" title="pio-amber-opacity-20"></div>
      <div className="bg-pio-amber-opacity-14 p-4" title="pio-amber-opacity-14"></div>
      <Label text="Pio amber" type="yellow" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-stone p-4" title="pio-stone"></div>
      <div className="bg-pio-stone-dark p-4" title="pio-stone-dark"></div>
      <div className="bg-pio-stone-pale p-4" title="pio-stone-pale"></div>
      <div className="bg-pio-stone-opacity-14 p-4" title="pio-stone-opacity-14"></div>
      <Label text="Pio stone" type="default" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-pio-text p-4" title="pio-text"></div>
      <div className="bg-pio-text-muted p-4" title="pio-text-muted"></div>
      <div className="bg-pio-grid p-4" title="pio-grid"></div>
      <Label text="Pio text & grid" type="default" icon={<ArrowLeft />} />
    </div>
    <div className="flex gap-4 mt-4">
      <div className="bg-dark-canvas p-4" title="dark-canvas"></div>
      <div className="bg-light-canvas p-4" title="light-canvas"></div>
      <Label text="Canvas" type="default" icon={<ArrowLeft />} />
    </div>
  </div>
  <div className="flex gap-4 mt-4">
    <svg style={{ width: '100%', height: '100%', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="110%" y2="20%">
          <stop offset="0%" style={{stopColor: colors['pio-coral-dark'].toString()}} />
          <stop offset="15%" style={{stopColor: colors['pio-coral'].toString()}} />
          <stop offset="50%" style={{stopColor: colors['pio-teal-dark'].toString()}} />
          <stop offset="85%" style={{stopColor: colors['pio-amber'].toString()}} />
          <stop offset="100%" style={{stopColor: colors['pio-amber-hover'].toString()}} />
        </linearGradient>
        <filter id="turbulence" x="0" y="0">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <rect x="0" y="0" width="95%" height="70%" fill="url(#gradient)" filter="url(#turbulence)" />
    </svg>
  </div>
  </>
);

export const Default = Template.bind({});
