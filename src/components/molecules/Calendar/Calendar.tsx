import React, { useCallback } from 'react';
import {
  DayPicker,
  type DateRange,
  type DayPickerProps,
} from 'react-day-picker';
import 'react-day-picker/style.css';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { calendarClassNames } from './CalendarStyles';
import './Calendar.css';

export interface CalendarProps {
  /** Selection mode: single day or date range */
  mode?: 'single' | 'range';
  /** Selected date (single mode) or range (range mode) */
  selected?: Date | DateRange | undefined;
  /** Called when selection changes */
  onSelect?: (value: Date | DateRange | undefined) => void;
  /** Initial month to display */
  defaultMonth?: Date;
  /** Title shown in the caption (e.g. "Calendar"). Defaults to "Calendar". */
  caption?: string;
  /** Extra class name for the root element */
  className?: string;
  /** Disabled dates (passed to DayPicker) */
  disabled?: DayPickerProps['disabled'];
  /** Show days from adjacent months */
  showOutsideDays?: boolean;
  /** Animate month transitions */
  animate?: boolean;
}

function LienzoChevron(
  props: React.ComponentPropsWithoutRef<'svg'> & {
    orientation?: 'left' | 'right' | 'up' | 'down';
    disabled?: boolean;
    size?: number;
    className?: string;
  }
) {
  const { orientation = 'left', disabled, size = 24, className, ...rest } = props;
  const iconProps = { size, className, ...rest };
  if (orientation === 'left') {
    return <ChevronLeft {...iconProps} aria-hidden />;
  }
  if (orientation === 'right') {
    return <ChevronRight {...iconProps} aria-hidden />;
  }
  return null;
}

const Calendar: React.FC<CalendarProps> = ({
  mode = 'single',
  selected,
  onSelect,
  defaultMonth,
  caption,
  className,
  disabled,
  showOutsideDays = true,
  animate = true,
}) => {
  const handleSelectSingle = useCallback(
    (value: Date | undefined) => {
      onSelect?.(value);
    },
    [onSelect]
  );

  const handleSelectRange = useCallback(
    (value: DateRange | undefined) => {
      onSelect?.(value);
    },
    [onSelect]
  );

  const captionLabel = caption ?? 'Calendar';
  const formatCaption = useCallback(() => captionLabel, [captionLabel]);
  const formatters = { formatCaption };

  if (mode === 'range') {
    return (
      <DayPicker
        mode="range"
        selected={selected as DateRange | undefined}
        onSelect={handleSelectRange}
        defaultMonth={defaultMonth}
        classNames={calendarClassNames}
        components={{
          Chevron: LienzoChevron,
        }}
        formatters={formatters}
        showOutsideDays={showOutsideDays}
        animate={animate}
        disabled={disabled}
        className={className}
        navLayout="around"
        captionLayout="label"
      />
    );
  }

  return (
    <DayPicker
      mode="single"
      selected={selected as Date | undefined}
      onSelect={handleSelectSingle}
      defaultMonth={defaultMonth}
      classNames={calendarClassNames}
      components={{
        Chevron: LienzoChevron,
      }}
      formatters={formatters}
      showOutsideDays={showOutsideDays}
      animate={animate}
      disabled={disabled}
      className={className}
      navLayout="around"
      captionLayout="label"
    />
  );
};

export default Calendar;
