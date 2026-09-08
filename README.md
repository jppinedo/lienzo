# Lienzo

React component library with Storybook.

For full project documentation (architecture, components, design tokens, Storybook), see the **[Documentation](Documentation/index.md)** folder.

## Requirements

- **Node.js**: Prefer **Node 20 LTS** (see `.nvmrc`). If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root.
- On Node 23+, the project uses patched dependencies so the dev server can start; those patches are applied automatically after `npm install`.

## Setup

```bash
npm install
```

## Development

```bash
npm run storybook
```

Storybook runs at **http://localhost:6006/**.

### "Too many open files" on macOS

If you see `EMFILE: too many open files` from the file watcher, raise the limit:

```bash
ulimit -n 10240
```

Then run `npm run storybook` again. You can add this to your shell profile if needed.

## Build

```bash
npm run build-storybook
```

Output is in `storybook-static/`.
