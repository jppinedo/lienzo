import React, { useEffect, useMemo, useState } from 'react';
import {
  COLUMN_MIN_WIDTH_PX,
  DEFAULT_HOUR_RANGE,
  DEFAULT_VISIBLE_DAYS,
  GUTTER_WIDTH_PX,
  HOUR_HEIGHT_PX,
  MIN_EVENT_HEIGHT_PX,
  eventCardBase,
  eventCardBody,
  eventCardInner,
  eventCardInteractive,
  eventCardStatus,
  eventCardSubtitle,
  eventCardTimed,
  eventCardTitle,
  eventCardTone,
  weekCalendarAllDayStack,
  weekCalendarBody,
  weekCalendarDayColumn,
  weekCalendarDayColumnToday,
  weekCalendarDayHeader,
  weekCalendarDayHeaderLabel,
  weekCalendarDayHeaderLabelToday,
  weekCalendarDayHeaderNumber,
  weekCalendarDayHeaderNumberToday,
  weekCalendarGutter,
  weekCalendarGutterSpacer,
  weekCalendarHeader,
  weekCalendarHourGrid,
  weekCalendarHourLabel,
  weekCalendarHourLine,
  weekCalendarInner,
  weekCalendarListStack,
  weekCalendarNowLine,
  weekCalendarNowMarker,
  weekCalendarRoot,
  weekCalendarScroll,
  weekCalendarTodayAccentBar,
  type WeekCalendarEventTone,
} from './WeekCalendarStyles';
import {
  accessibleDayLabel,
  clampTimeToRange,
  durationToHeightPx,
  formatHourLabel,
  getVisibleDates,
  isSameDay,
  layoutTimedEvents,
  minutesToOffsetPx,
  parseEventDate,
  parseTimeToMinutes,
  shortWeekdayName,
  type Weekday,
} from './WeekCalendarUtils';
import './WeekCalendar.css';

export type { Weekday, WeekCalendarEventTone };

export type WeekCalendarEvent = {
  id: string;
  date: Date | string;
  start?: string;
  end?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: React.ReactNode;
  tone?: WeekCalendarEventTone;
  status?: React.ReactNode;
  onClick?: () => void;
};

export type WeekCalendarProps = {
  weekStart: Date;
  visibleDays?: Weekday[];
  weekStartsOn?: 0 | 1;
  events: WeekCalendarEvent[];
  showHours?: boolean;
  hourRange?: [number, number];
  today?: Date;
  renderEvent?: (event: WeekCalendarEvent) => React.ReactNode;
  className?: string;
};

type ResolvedTimedEvent = {
  event: WeekCalendarEvent;
  startMin: number;
  endMin: number;
};

type DayBuckets = {
  allDay: WeekCalendarEvent[];
  timed: ResolvedTimedEvent[];
};

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

function dayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function EventCard({
  event,
  className,
  style,
}: {
  event: WeekCalendarEvent;
  className?: string;
  style?: React.CSSProperties;
}) {
  const tone: WeekCalendarEventTone = event.tone ?? 'neutral';
  const interactive = typeof event.onClick === 'function';
  const classes = cx(
    eventCardBase,
    eventCardTone[tone],
    interactive && eventCardInteractive,
    className
  );

  const content = (
    <div className={eventCardInner}>
      {event.subtitle != null && (
        <div className={eventCardSubtitle}>{event.subtitle}</div>
      )}
      <div className={eventCardTitle}>{event.title}</div>
      {event.body != null && (
        <div className={eventCardBody}>{event.body}</div>
      )}
      {tone === 'muted' && event.status != null && (
        <div className={eventCardStatus}>{event.status}</div>
      )}
    </div>
  );

  if (interactive) {
    return (
      <button
        type="button"
        className={classes}
        style={style}
        onClick={event.onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={classes} style={style}>
      {content}
    </div>
  );
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({
  weekStart,
  visibleDays = [...DEFAULT_VISIBLE_DAYS],
  weekStartsOn = 1,
  events,
  showHours = true,
  hourRange = DEFAULT_HOUR_RANGE,
  today: todayProp,
  renderEvent,
  className,
}) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (todayProp) return undefined;
    const id = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);
    return () => window.clearInterval(id);
  }, [todayProp]);

  const today = useMemo(
    () => parseEventDate(todayProp ?? now),
    [todayProp, now]
  );

  const [rangeStart, rangeEnd] = hourRange;
  const safeRangeStart = Math.min(Math.max(0, rangeStart), 23);
  const safeRangeEnd = Math.min(24, Math.max(safeRangeStart + 1, rangeEnd));
  const hourCount = safeRangeEnd - safeRangeStart;
  const gridHeight = hourCount * HOUR_HEIGHT_PX;

  const days = useMemo(
    () => getVisibleDates(weekStart, weekStartsOn, visibleDays),
    [weekStart, weekStartsOn, visibleDays]
  );

  const visibleDayKeys = useMemo(() => new Set(days.map(dayKey)), [days]);

  const eventsByDay = useMemo(() => {
    const map = new Map<string, WeekCalendarEvent[]>();
    for (const day of days) {
      map.set(dayKey(day), []);
    }

    for (const event of events) {
      const date = parseEventDate(event.date);
      if (Number.isNaN(date.getTime())) continue;
      const key = dayKey(date);
      if (!visibleDayKeys.has(key)) {
        if (import.meta.env.DEV) {
          console.warn(
            `[WeekCalendar] Event "${event.id}" falls on a hidden day and will not be shown.`,
            event
          );
        }
        continue;
      }
      map.get(key)?.push(event);
    }
    return map;
  }, [events, days, visibleDayKeys]);

  const bucketsByDay = useMemo(() => {
    const map = new Map<string, DayBuckets>();
    for (const day of days) {
      const dayEvents = eventsByDay.get(dayKey(day)) ?? [];
      const allDay: WeekCalendarEvent[] = [];
      const timed: ResolvedTimedEvent[] = [];
      for (const event of dayEvents) {
        const startMin = parseTimeToMinutes(event.start);
        if (startMin == null) {
          allDay.push(event);
          continue;
        }
        const parsedEnd = parseTimeToMinutes(event.end);
        const endMin =
          parsedEnd != null && parsedEnd > startMin ? parsedEnd : startMin + 60;
        timed.push({ event, startMin, endMin });
      }
      map.set(dayKey(day), { allDay, timed });
    }
    return map;
  }, [days, eventsByDay]);

  const hours = useMemo(() => {
    const list: number[] = [];
    for (let h = safeRangeStart; h < safeRangeEnd; h += 1) {
      list.push(h);
    }
    return list;
  }, [safeRangeStart, safeRangeEnd]);

  const indicatorSource = todayProp ?? now;
  const indicatorMinutes =
    indicatorSource.getHours() * 60 + indicatorSource.getMinutes();

  const showNowIndicator =
    showHours &&
    days.some((d) => isSameDay(d, today)) &&
    indicatorMinutes >= safeRangeStart * 60 &&
    indicatorMinutes <= safeRangeEnd * 60;

  const nowOffset = minutesToOffsetPx(
    indicatorMinutes,
    safeRangeStart,
    HOUR_HEIGHT_PX
  );

  const columnTemplate = showHours
    ? `${GUTTER_WIDTH_PX}px repeat(${days.length}, minmax(${COLUMN_MIN_WIDTH_PX}px, 1fr))`
    : `repeat(${days.length}, minmax(${COLUMN_MIN_WIDTH_PX}px, 1fr))`;

  const renderCard = (
    event: WeekCalendarEvent,
    extraClassName?: string,
    style?: React.CSSProperties
  ) => {
    if (renderEvent) {
      return (
        <div key={event.id} className={extraClassName} style={style}>
          {renderEvent(event)}
        </div>
      );
    }
    return (
      <EventCard
        key={event.id}
        event={event}
        className={extraClassName}
        style={style}
      />
    );
  };

  const renderTimedGrid = (day: Date) => {
    const buckets = bucketsByDay.get(dayKey(day)) ?? { allDay: [], timed: [] };
    const layout = layoutTimedEvents(
      buckets.timed.map((t) => ({
        id: t.event.id,
        startMin: t.startMin,
        endMin: t.endMin,
      }))
    );
    const isToday = isSameDay(day, today);

    return (
      <div className={weekCalendarHourGrid} style={{ height: gridHeight }}>
        {hours.map((hour) => (
          <div
            key={hour}
            className={weekCalendarHourLine}
            style={{ top: (hour - safeRangeStart) * HOUR_HEIGHT_PX }}
            aria-hidden="true"
          />
        ))}
        {buckets.timed.map(({ event, startMin, endMin }) => {
          const clampedStart = clampTimeToRange(
            startMin,
            safeRangeStart,
            safeRangeEnd
          );
          const clampedEnd = clampTimeToRange(
            endMin,
            safeRangeStart,
            safeRangeEnd
          );
          if (
            clampedEnd <= safeRangeStart * 60 ||
            clampedStart >= safeRangeEnd * 60
          ) {
            return null;
          }
          const top = minutesToOffsetPx(
            clampedStart,
            safeRangeStart,
            HOUR_HEIGHT_PX
          );
          const height = durationToHeightPx(
            clampedStart,
            clampedEnd,
            HOUR_HEIGHT_PX,
            MIN_EVENT_HEIGHT_PX
          );
          const slot = layout.get(event.id) ?? { column: 0, columnCount: 1 };
          const widthPct = 100 / slot.columnCount;
          const leftPct = slot.column * widthPct;
          const gapPx = 2;

          return renderCard(event, eventCardTimed, {
            top,
            height,
            left: `calc(${leftPct}% + ${gapPx}px)`,
            width: `calc(${widthPct}% - ${gapPx * 2}px)`,
          });
        })}
        {isToday && showNowIndicator && (
          <div
            className={weekCalendarNowLine}
            style={{ top: nowOffset }}
            aria-hidden="true"
          >
            <span className={weekCalendarNowMarker} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cx(weekCalendarRoot, className)}>
      <div className={weekCalendarScroll}>
        <div
          className={weekCalendarInner}
          style={{
            minWidth: showHours
              ? GUTTER_WIDTH_PX + days.length * COLUMN_MIN_WIDTH_PX
              : days.length * COLUMN_MIN_WIDTH_PX,
          }}
        >
          <div
            className={weekCalendarHeader}
            style={{ gridTemplateColumns: columnTemplate }}
          >
            {showHours && (
              <div className={weekCalendarGutterSpacer} aria-hidden="true" />
            )}
            {days.map((day) => {
              const isToday = isSameDay(day, today);
              return (
                <div
                  key={`header-${dayKey(day)}`}
                  className={cx(
                    weekCalendarDayHeader,
                    isToday && weekCalendarDayColumnToday
                  )}
                >
                  {isToday && (
                    <span
                      className={weekCalendarTodayAccentBar}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cx(
                      weekCalendarDayHeaderLabel,
                      isToday && weekCalendarDayHeaderLabelToday
                    )}
                  >
                    {shortWeekdayName(day)}
                  </span>
                  <span
                    className={cx(
                      weekCalendarDayHeaderNumber,
                      isToday && weekCalendarDayHeaderNumberToday
                    )}
                  >
                    {day.getDate()}
                  </span>
                </div>
              );
            })}
          </div>

          {showHours ? (
            <>
              <div
                className={weekCalendarBody}
                style={{ gridTemplateColumns: columnTemplate }}
              >
                <div className={weekCalendarGutter} aria-hidden="true" />
                {days.map((day) => {
                  const isToday = isSameDay(day, today);
                  const allDay =
                    bucketsByDay.get(dayKey(day))?.allDay ?? [];
                  return (
                    <section
                      key={`allday-${dayKey(day)}`}
                      className={cx(
                        weekCalendarDayColumn,
                        isToday && weekCalendarDayColumnToday
                      )}
                      aria-label={`${accessibleDayLabel(day)} all-day`}
                    >
                      <div className={weekCalendarAllDayStack}>
                        {allDay.map((event) => renderCard(event))}
                      </div>
                    </section>
                  );
                })}
              </div>

              <div
                className={weekCalendarBody}
                style={{ gridTemplateColumns: columnTemplate }}
              >
                <div className={weekCalendarGutter} aria-hidden="true">
                  <div
                    className={weekCalendarHourGrid}
                    style={{ height: gridHeight }}
                  >
                    {hours.map((hour) => {
                      const top = (hour - safeRangeStart) * HOUR_HEIGHT_PX;
                      return (
                        <span
                          key={hour}
                          className={weekCalendarHourLabel}
                          style={{
                            top: hour === safeRangeStart ? top + 2 : top,
                            transform:
                              hour === safeRangeStart
                                ? undefined
                                : 'translateY(-50%)',
                          }}
                        >
                          {formatHourLabel(hour)}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {days.map((day) => {
                  const isToday = isSameDay(day, today);
                  return (
                    <section
                      key={`hours-${dayKey(day)}`}
                      className={cx(
                        weekCalendarDayColumn,
                        isToday && weekCalendarDayColumnToday
                      )}
                      aria-label={accessibleDayLabel(day)}
                      aria-current={isToday ? 'date' : undefined}
                    >
                      {renderTimedGrid(day)}
                    </section>
                  );
                })}
              </div>
            </>
          ) : (
            <div
              className={weekCalendarBody}
              style={{ gridTemplateColumns: columnTemplate }}
            >
              {days.map((day) => {
                const isToday = isSameDay(day, today);
                const dayEvents = eventsByDay.get(dayKey(day)) ?? [];
                return (
                  <section
                    key={dayKey(day)}
                    className={cx(
                      weekCalendarDayColumn,
                      isToday && weekCalendarDayColumnToday
                    )}
                    aria-label={accessibleDayLabel(day)}
                    aria-current={isToday ? 'date' : undefined}
                  >
                    <div className={weekCalendarListStack}>
                      {dayEvents.map((event) => renderCard(event))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;
