import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from '../../atoms/Badge/Badge';
import Label from '../../atoms/Label/Label';
import WeekCalendar, {
  type WeekCalendarEvent,
  type WeekCalendarProps,
} from './WeekCalendar';

/** Fixed Wednesday in the story week so current-day styling stays stable. */
const STORY_TODAY = new Date(2025, 9, 15, 10, 30, 0);
/** Any date in the Mon–Sun week that contains STORY_TODAY (weekStartsOn=1). */
const STORY_WEEK_START = new Date(2025, 9, 13);

const day = (offsetFromMonday: number, hours = 0, minutes = 0) =>
  new Date(2025, 9, 13 + offsetFromMonday, hours, minutes, 0);

const timedEvents: WeekCalendarEvent[] = [
  {
    id: 'mon-standup',
    date: day(0),
    start: '09:00',
    end: '09:30',
    title: 'Team standup',
    subtitle: 'Morning',
    tone: 'teal',
  },
  {
    id: 'mon-design',
    date: day(0),
    start: '11:00',
    end: '12:30',
    title: 'Design review',
    subtitle: 'Workshop',
    body: 'Review layout options',
    tone: 'coral',
  },
  {
    id: 'tue-focus',
    date: day(1),
    start: '10:00',
    end: '12:00',
    title: 'Focus block',
    subtitle: 'Deep work',
    tone: 'amber',
  },
  {
    id: 'tue-overlap-a',
    date: day(1),
    start: '14:00',
    end: '15:00',
    title: 'Sync A',
    tone: 'teal',
  },
  {
    id: 'tue-overlap-b',
    date: day(1),
    start: '14:30',
    end: '15:30',
    title: 'Sync B',
    tone: 'coral',
  },
  {
    id: 'wed-all-day',
    date: day(2),
    title: 'Office hours',
    subtitle: 'All day',
    tone: 'neutral',
  },
  {
    id: 'wed-demo',
    date: day(2),
    start: '10:00',
    end: '11:00',
    title: 'Product demo',
    subtitle: 'Live',
    body: 'Share progress with stakeholders',
    tone: 'coral',
    onClick: () => undefined,
  },
  {
    id: 'wed-lunch',
    date: day(2),
    start: '12:30',
    end: '13:30',
    title: 'Lunch & learn',
    tone: 'amber',
  },
  {
    id: 'thu-planning',
    date: day(3),
    start: '09:30',
    end: '11:00',
    title: 'Sprint planning',
    subtitle: 'Team',
    tone: 'teal',
  },
  {
    id: 'fri-retro',
    date: day(4),
    start: '15:00',
    end: '16:00',
    title: 'Retro',
    subtitle: 'Wrap-up',
    tone: 'neutral',
  },
  {
    id: 'sat-muted',
    date: day(5),
    start: '11:00',
    end: '12:00',
    title: 'Optional meetup',
    subtitle: 'Community',
    tone: 'muted',
    status: 'Tentative',
  },
  {
    id: 'sun-rest',
    date: day(6),
    title: 'Rest day',
    subtitle: 'Personal',
    tone: 'muted',
    status: 'Blocked',
  },
];

const listEvents: WeekCalendarEvent[] = [
  {
    id: 'l-mon-1',
    date: day(0),
    title: 'Morning brief',
    subtitle: 'Ops',
    tone: 'teal',
  },
  {
    id: 'l-mon-2',
    date: day(0),
    title: 'Inbox zero',
    subtitle: 'Admin',
    tone: 'neutral',
  },
  {
    id: 'l-tue-1',
    date: day(1),
    title: 'Client check-in',
    subtitle: 'Calls',
    body: '30 min',
    tone: 'coral',
  },
  {
    id: 'l-tue-2',
    date: day(1),
    title: 'Notes sync',
    tone: 'amber',
  },
  {
    id: 'l-wed-1',
    date: day(2),
    title: 'Ship checklist',
    subtitle: 'Release',
    tone: 'teal',
  },
  {
    id: 'l-wed-2',
    date: day(2),
    title: 'Draft update',
    tone: 'coral',
  },
  {
    id: 'l-wed-3',
    date: day(2),
    title: 'Waiting on review',
    tone: 'muted',
    status: 'Pending',
  },
  {
    id: 'l-thu-1',
    date: day(3),
    title: 'Workshop prep',
    tone: 'amber',
  },
  {
    id: 'l-fri-1',
    date: day(4),
    title: 'Weekly wrap',
    subtitle: 'Summary',
    tone: 'neutral',
  },
];

const meta: Meta<typeof WeekCalendar> = {
  title: 'Molecules/WeekCalendar',
  component: WeekCalendar,
  decorators: [
    (Story) => (
      <div className="p-4 max-w-6xl mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showHours: { name: 'Show hours', control: 'boolean' },
    weekStartsOn: {
      name: 'Week starts on',
      control: 'radio',
      options: [0, 1],
    },
    weekStart: { control: false, table: { disable: true } },
    events: { control: false, table: { disable: true } },
    visibleDays: { control: false, table: { disable: true } },
    hourRange: { control: false, table: { disable: true } },
    today: { control: false, table: { disable: true } },
    renderEvent: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof WeekCalendar>;

const baseArgs: WeekCalendarProps = {
  weekStart: STORY_WEEK_START,
  today: STORY_TODAY,
  events: timedEvents,
  showHours: true,
  weekStartsOn: 1,
  hourRange: [6, 22],
};

export const Default: Story = {
  args: { ...baseArgs },
  tags: ['!dev'],
};

export const WithHours: Story = {
  args: { ...baseArgs },
  parameters: { controls: { disable: true } },
};

export const WithoutHours: Story = {
  args: {
    ...baseArgs,
    showHours: false,
    events: listEvents,
  },
  parameters: { controls: { disable: true } },
};

export const WorkingDays: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-jakarta text-pio-text-muted dark:text-blue-200/70">
          Monday–Friday
        </p>
        <WeekCalendar
          weekStart={STORY_WEEK_START}
          today={STORY_TODAY}
          events={timedEvents}
          visibleDays={[1, 2, 3, 4, 5]}
          showHours
          hourRange={[6, 22]}
        />
      </div>
      <div>
        <p className="mb-3 text-sm font-jakarta text-pio-text-muted dark:text-blue-200/70">
          Custom set: Mon / Wed / Fri
        </p>
        <WeekCalendar
          weekStart={STORY_WEEK_START}
          today={STORY_TODAY}
          events={listEvents}
          visibleDays={[1, 3, 5]}
          showHours={false}
        />
      </div>
    </div>
  ),
};

export const SundayStart: Story = {
  args: {
    ...baseArgs,
    weekStartsOn: 0,
    weekStart: new Date(2025, 9, 12),
  },
  parameters: { controls: { disable: true } },
};

export const RichContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const events: WeekCalendarEvent[] = [
      {
        id: 'rich-1',
        date: day(2),
        title: 'Design critique',
        subtitle: (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pio-coral text-[10px] font-bold text-white"
              aria-hidden="true"
            >
              JP
            </span>
            <span>Host</span>
          </span>
        ),
        body: <Badge label="Workshop" tone="coral" dot />,
        tone: 'coral',
      },
      {
        id: 'rich-2',
        date: day(2),
        title: 'Writing pass',
        subtitle: <Label text="Docs" />,
        body: <Badge label="In progress" tone="teal" />,
        tone: 'teal',
      },
      {
        id: 'rich-3',
        date: day(3),
        title: 'Launch prep',
        subtitle: 'Milestones',
        body: <Badge label="Amber path" tone="amber" dot />,
        tone: 'amber',
      },
    ];

    return (
      <WeekCalendar
        weekStart={STORY_WEEK_START}
        today={STORY_TODAY}
        events={events}
        visibleDays={[1, 2, 3, 4, 5]}
        showHours={false}
      />
    );
  },
};

export const MutedStatus: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <WeekCalendar
      weekStart={STORY_WEEK_START}
      today={STORY_TODAY}
      showHours={false}
      visibleDays={[1, 2, 3]}
      events={[
        {
          id: 'muted-1',
          date: day(0),
          title: 'Hold for review',
          subtitle: 'Queue',
          body: 'Waiting on external feedback',
          tone: 'muted',
          status: 'Pending',
        },
        {
          id: 'muted-2',
          date: day(1),
          title: 'Paused initiative',
          subtitle: 'Backlog',
          tone: 'muted',
          status: 'On hold',
        },
        {
          id: 'active-1',
          date: day(2),
          title: 'Active session',
          subtitle: 'Today',
          tone: 'teal',
        },
      ]}
    />
  ),
};

export const DarkMode: Story = {
  args: {
    ...baseArgs,
    events: timedEvents,
  },
  parameters: {
    controls: { disable: true },
  },
  globals: {
    theme: 'dark',
  },
};
