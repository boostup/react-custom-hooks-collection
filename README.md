[![NPM](https://img.shields.io/npm/v/@boostup/react-custom-hooks-collection.svg)](https://www.npmjs.com/package/@boostup/react-custom-hooks-collection) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# It is all in the name of the package baby !

## Demos on CodeSandbox

- [useToggle](https://codesandbox.io/s/boostupreact-custom-hooks-collectionusetoggledemo-kvkwd)

#### Note:

All demos are available inside the `/example` directory of this repository — ;)

Here is the [README](https://github.com/boostup/react-custom-hooks-collection/blob/master/example/README.md) for the `example` subproject.

## React hook resources

- [Home-baked Hooks](https://react.christmas/2019/13)

- [streamich/react-use: React Hooks — 👍](https://github.com/streamich/react-use)

- [gragland/usehooks: Easy to understand React Hook code recipes](https://github.com/gragland/usehooks#post-index)

- [react-hook-form - npm](https://www.npmjs.com/package/react-hook-form)

## Videos to learn about hooks

- [90% Cleaner React With Hooks](https://www.youtube.com/watch?v=wXLf18DsV-I)

## Install

```bash
npm install --save @boostup/react-custom-hooks-collection
```

## Usage

```jsx
import React from 'react'
import { useToggle } from '@boostup/react-custom-hooks-collection'

function App() {
  const [isHappy, setIsHappy] = useToggle(true)
  const [isHeartBroken, setIsHeartBroken] = useToggle(false)
  const [isBanana, setIsBanana] = useToggle(true)

  return (
    <div>
      <h2>useToggle Demo</h2>
      <h1 onClick={setIsHappy}>{isHappy ? '😀' : '😡'}</h1>
      <h1 onClick={setIsHeartBroken}>{isHeartBroken ? '💔' : '💓'}</h1>
      <h1 onClick={setIsBanana}>{isBanana ? '🍌' : '🍏'}</h1>
    </div>
  )
}

export default App
```

## About this NPM package

This package was generated thanks to the [create-react-library NPM package](https://www.npmjs.com/package/create-react-library#creating-a-new-module).

### [Development](https://www.npmjs.com/package/create-react-library#development)

Local development is broken into two parts (ideally using 2 terminal windows or tabs).

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the example/ create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

## Troubleshooting while developping with this package

If you use VS Code on linux, you might get the following error after a little while once both `npm start` commands are running:

> Visual Studio Code is unable to watch for file changes in this large workspace (error ENOSPC)

This would show as a nice little snackbar popup. [So, here goes the solution](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc), but copying it below just in case this link disappears:

> When you see this notification, it indicates that the VS Code file watcher is running out of handles because the workspace is large and contains many files. The current limit can be viewed by running:

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

> The limit can be increased to its maximum by editing /etc/sysctl.conf and adding this line to the end of the file:

```bash
fs.inotify.max_user_watches=524288
```

> The new value can then be loaded in by running sudo sysctl -p. Note that Arch Linux works a little differently, See Increasing the amount of inotify watchers for details.
> While 524,288 is the maximum number of files that can be watched, if you're in an environment that is particularly memory constrained, you may wish to lower the number. Each file watch takes up 1080 bytes, so assuming that all 524,288 watches are consumed, that results in an upper bound of around 540 MiB.
> Another option is to exclude specific workspace directories from the VS Code file watcher with the files.watcherExclude setting. The default for files.watcherExclude excludes node_modules and some folders under .git, but you can add other directories that you don't want VS Code to track.```

```json
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

## [License](https://github.com/boostup/react-custom-hooks-collection/blob/master/LICENSE)

GNUv3 © [boostup](https://github.com/boostup)
