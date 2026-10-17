import React from 'react';
import { Meta } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { linkTo } from '@storybook/addon-links';
import WelcomeHero from './WelcomeHero';

export default {
  title: 'Pages/WelcomeHero',
  component: WelcomeHero,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
} as Meta;

const openPlayground = linkTo('Molecules/LineChart', 'Docs');

const useStorybookTheme = () => {
  const [globals, updateGlobals] = useGlobals();
  const isDark = (globals.theme as string) === 'dark';
  const onThemeChange = (active: boolean) => {
    updateGlobals({ theme: active ? 'dark' : 'light' });
  };
  return { isDark, onThemeChange };
};

export const Default = () => {
  const { isDark, onThemeChange } = useStorybookTheme();
  return <WelcomeHero isDark={isDark} onThemeChange={onThemeChange} onOpenPlayground={openPlayground} />;
};
Default.tags = ['!dev'];

export const LivePreview = () => {
  const { isDark, onThemeChange } = useStorybookTheme();

  return (
    <>
      <WelcomeHero isDark={isDark} onThemeChange={onThemeChange} onOpenPlayground={openPlayground} />
      <section
        id="welcome-foundations"
        className="w-full min-h-[240px] px-8 py-16 bg-pio-bg-light dark:bg-gray-900 border-t border-pio-grid dark:border-gray-700"
        aria-label="Colors and typography"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair italic text-3xl text-pio-text dark:text-blue-200 m-0">
            Colors & typography
          </h2>
          <p className="font-jakarta text-pio-text-muted dark:text-blue-200/70 mt-3 mb-0 max-w-lg">
            Foundations section placeholder — tokens and type scale coming next.
          </p>
        </div>
      </section>
    </>
  );
};
LivePreview.parameters = { controls: { disable: true } };
