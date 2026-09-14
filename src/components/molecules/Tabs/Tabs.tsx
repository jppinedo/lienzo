import React, { useState } from 'react';
import TabButton from './TabButton';

export interface TabType {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

export interface TabSystemProps {
  activeTab?: string;
  tabs: TabType[];
}

const TabSystem: React.FC<TabSystemProps> = ({
  activeTab,
  tabs
}) => {
  const [active, setActive] = useState(activeTab || tabs[0].id);

  const handleActiveTab = (tabId: string) => {
    setActive(tabId);
  }

  return (
    <div className="w-full">
      <nav>
        <ul role="tablist" className="border-b border-gray-300 flex dark:border-gray-700">
          {tabs.map((tab: TabType) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              active={active === tab.id}
              onClick={handleActiveTab}
            />
          ))}
        </ul>
      </nav>
      {tabs.map((tab: TabType) => (
        <div
          id={`tabpanel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="py-5"
          hidden={active !== tab.id}
          key={tab.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

export default TabSystem;