# Getting started

## Requirements

- **Node.js**: Prefer **Node 20 LTS**. The project may specify a version in `.nvmrc`; if you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root.
- On **Node 23+**, the project uses patched dependencies so the dev server can start. Those patches are applied automatically after `npm install` via the `postinstall` script.

## Setup

From the project root:

```bash
npm install
```

This installs all dependencies and runs `patch-package` (postinstall), which applies any dependency patches needed for newer Node versions.

## Development

To run Storybook locally:

```bash
npm run storybook
```

Storybook starts at **http://localhost:6006/**.

## Build

To build the static Storybook for deployment:

```bash
npm run build-storybook
```

Output is written to the `storybook-static/` folder.

## Troubleshooting

### "Too many open files" on macOS

If you see `EMFILE: too many open files` from the file watcher, raise the open-file limit:

```bash
ulimit -n 10240
```

Then run `npm run storybook` again. You can add this command to your shell profile (e.g. `~/.zshrc`) if you need it every time.
