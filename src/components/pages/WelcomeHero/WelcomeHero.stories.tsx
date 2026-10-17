import React from 'react';
import { Meta } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { linkTo } from '@storybook/addon-links';
import WelcomeFoundations from '@pages/WelcomeFoundations/WelcomeFoundations';
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
const openButtonDocs = linkTo('Atoms/Button', 'Docs');
const openSwitchDocs = linkTo('Atoms/Switch', 'Docs');
const openCheckboxDocs = linkTo('Atoms/Checkbox', 'Docs');
const openTitleDocs = linkTo('Atoms/Title', 'Docs');
const openCodeBlockDocs = linkTo('Molecules/CodeBlock', 'Docs');

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
      <WelcomeFoundations
        isDark={isDark}
        onThemeChange={onThemeChange}
        onOpenButtonDocs={openButtonDocs}
        onOpenSwitchDocs={openSwitchDocs}
        onOpenCheckboxDocs={openCheckboxDocs}
        onOpenTitleDocs={openTitleDocs}
        onOpenCodeBlockDocs={openCodeBlockDocs}
      />
    </>
  );
};
LivePreview.parameters = { controls: { disable: true } };
