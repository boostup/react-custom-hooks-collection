[![NPM](https://img.shields.io/npm/v/@boostup/react-custom-hooks-collection.svg)](https://www.npmjs.com/package/@boostup/react-custom-hooks-collection) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# It is all in the name of the package baby !

[Live Demo](https://boostup.github.io/react-custom-hooks-collection/)

## Install

```bash
npm i @boostup/react-custom-hooks-collection
```

## `useToggle` Example

```jsx
import React from 'react'
import { useToggle } from '@boostup/react-custom-hooks-collection'

function App() {
  const [isHappy, setIsHappy] = useToggle(true)

  return (
    <div>
      <h2>useToggle Demo</h2>
      <h1 onClick={setIsHappy}>{isHappy ? '😀' : '😡'}</h1>
    </div>
  )
}

export default App
```
## Notes

- All demos are available inside the `/example/src/demoComponents` directory 
- All custom hooks are available inside the `/src/hooks` directory

---

## Other React hook resources

- [Home-baked Hooks](https://react.christmas/2019/13)

- [streamich/react-use: React Hooks — 👍](https://github.com/streamich/react-use)

- [gragland/usehooks: Easy to understand React Hook code recipes](https://github.com/gragland/usehooks#post-index)

- [react-hook-form - npm](https://www.npmjs.com/package/react-hook-form)

### Videos to learn about hooks

- [90% Cleaner React With Hooks](https://www.youtube.com/watch?v=wXLf18DsV-I)

---

## About this NPM package

This package was generated thanks to the [create-react-library package](https://www.npmjs.com/package/create-react-library#creating-a-new-module).

---

## Contributing to this package

- [create-react-library documentation](https://www.npmjs.com/package/create-react-library#development)
- to start the dev environment, simply run the command: 
```
npm run dev
``` 

### Local development consists of two parts :

1) Rollup watches the `/src/` directory (where the custom hooks are collected) for any changes in the code and automatically recompiles it into the `/dist/` directory

2) The `/example/` directory is a `create-react-app` app that serves the puropose of demonstrating the use of each of the custom `hooks` collected in `/src/hooks`.  

Anytime changes are made in `/src/` or `/example/src`, they will be live-reloaded, allowing for real-time development of this NPM package.

---

## Dev Troubleshooting

If you use VS Code on linux, you might get the following error after running the `npm run dev` command: 

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
