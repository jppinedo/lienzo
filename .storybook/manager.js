import { addons } from '@storybook/manager-api';

addons.setConfig({
  showPanel: false,
  sidebar: {
    filters: {
      hideHiddenStories: (item) => {
        if (item.type && item.type !== 'story') return true;
        if (item.tags?.includes('!dev')) return false;
        const isAtomic =
          item.title?.startsWith('Atoms/') || item.title?.startsWith('Molecules/');
        if (isAtomic && item.name === 'Default') return false;
        return true;
      },
    },
  },
});
