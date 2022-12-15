# SenNet Docs

## Install 
```bash
cd documentation
npm i .
```

## Development 
### Run Dev Server
```bash
npm start
```
Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.
### CSS 
```
npm run css # watch and build stylus files
```

## Build
```
npm run build
```
Serve `docs` folder locally.   
Should have `serve` module installed after running `npm i .`
```
serve ./docs 
```

## Contents
- `/src/`- any source code used to generate the hosted documents (not directly published)
- `/docs/` - The complete site for distribution, currently being served for GitHub Pages
  - `md/` - Contains the markdown files that are hosted as html by GitHub Pages.
  - `lang/` - Can set language files to serve the site in another language but English

## Coding Conventions
- Do use dash casing to separate words for directories in `docs/md`:  
  - correct: `foo-who/` , incorrect: `foo_who/`
- Please set up prettier in your IDE to keep code formatting consistent or just follow the prettier rules as described in `./package.json` 
- Do follow any additional code formatting and styles as seen in the project

## Usage 
- Save your documentation files in the `md/` directory. 
- Properly name the documents and directories as path names are used to automatically generate the `Breadcrumbs`
- Properly use H headings, in their correct rankings as these are pulled from the documents to automatically generate the `Table of Contents`

