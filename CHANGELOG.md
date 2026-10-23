# Changelog

All notable changes to this project are documented in this file.

## Unreleased

### Changed

- **WeekCalendar**: default `layout` is now `'auto'`. Narrow containers (below `autoBreakpoint`, default 640px) switch to a mobile day or agenda view instead of horizontally scrolling the week grid. To keep the previous always-week behavior, pass `layout="week"`.

### Added

- **WeekCalendar**: `day` and `agenda` layouts, container-width auto switching, selected-day API, swipe between days, agenda empty-day options, and optional event `meta` badges.
- **Hooks**: `useContainerWidth`, `useControllableState` (public package exports).
