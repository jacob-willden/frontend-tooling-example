# Frontend Tooling Assignment

## Parcel
- What problem is this tool trying to solve? Parcel is a zero-config build tool for Web apps, meaning it can be used out of the box without any configuration for basic projects. In more advanced cases, minimal configuration may be included.
- How does it solve the problem? AKA, what makes this tool unique? It accomplishes what it does by focusing on what makes starting a Web project easiest, by providing some of the most common built-in features that developers find useful, without including everything that other bundlers like Webpack has. One thing that makes Parcel unique is that it provides built-in image compression.
- When shouldn't you use this tool? When you want your bundled assets to be well organized (as Parcel doesn't sort different file types into seperate folders after building).
- Name two features you find interesting/useful and explain why they are helpful. Parcel provides built-in tree shaking, meaning that it will only import code from dependencies that are needed. Unlike Webpack and Esbuild, Parcel comes with built-in support for preprocessor languages like Sass (no plugin required). 
- What other information should someone know before using this tool? Parcel's first build for a project is slower than later builds, while the speed of Webpack is consistently between Parcel's first and later builds in speed. Over time, Parcel is quicker for developers as a result, over Webpack.

## Webpack
- What problem is this tool trying to solve? Webpack is a "kitchen sink" approach to Web app building, providing just about anything one could want out of bundling. 
- How does it solve the problem? AKA, what makes this tool unique? It is the most customizable, and has the largest support community of the 3 tools.
- When shouldn't you use this tool? You shouldn't use this tool if performance is a top priority, since Webpack is heavier than other build tools like Parcel or Esbuild. It should also be avoided if you don't want to do lots of configuration for a project, which Webpack often requires, particuarly if you're using an older version of Webpack.
- Name two features you find interesting/useful and explain why they are helpful. Webpack allows for sorting bundled assets into separate folders. It also provides lazy code splitting, which means that various parts of your code can be "lazily loaded" as needed after the Web app starts.
- What other information should someone know before using this tool? Like Esbuild, Webpack provides built-in live reloading.

## Esbuild
- What problem is this tool trying to solve? Esbuild strives for maximum bundling performance above all else.
- How does it solve the problem? AKA, what makes this tool unique? As other build tools seek to provide other features besides bundling, Esbuild prioritizes bundling first (meaning it lacks templates for various front-end frameworks). 
- When shouldn't you use this tool? It should be avoided if you want something highly stable, as the tool was still in beta since 2022 (see "Comparing the New Generation of Build Tools" in the sources).
- Name two features you find interesting/useful and explain why they are helpful. One feature is the watch feature, which rebundles the code whenever it's changed. Another feature is running a development server through Esbuild's API which can be requested via JavaScript.
- What other information should someone know before using this tool? It is used to power other bundler tools like Vite. The file sizes of bundled assets are slightly larger than with some other tools like Rollup, since minifying further would require more bundling time. 

## When to Use One Tool Over Another
When just getting started with a simple Web app, I would certainly use Parcel because it's quickest to set up and easiest to use in that circumstance. If I'm working on a larger, corporate-level Web project, it may make more sense to use Webpack to get all the features that may be needed. Esbuild seems generally most effective when combined into other tools like Vite, so I'd be unlikely to use it by itself due to the lack of features without plugins.

## [Sample Repo]()
To deploy the project locally, run `npx parcel src/index.html`. The assets used in the sample repo are for educational uses only.

## Sources:
- [Parcel Website](https://parceljs.org/)
- [Webpack Website](https://webpack.js.org/)
- [Esbuild Website](https://esbuild.github.io/)
- [Parcel vs. Webpack 2021 on Level Up Coding](https://levelup.gitconnected.com/parcel-vs-webpack-2021-64c347bcb31)
- [Comparing the New Generation of Build Tools](https://css-tricks.com/comparing-the-new-generation-of-build-tools/)
- [Code Splitting](https://reactjs.org/docs/code-splitting.html)
- [Parcel vs Webpack on Ecuba](https://www.educba.com/parcel-vs-webpack/)
- [How to Bundle a Web App with Parcel.js](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js)
- [How to compress images via webpack 4](https://stackoverflow.com/questions/50629356/how-to-compress-images-via-webpack-4)