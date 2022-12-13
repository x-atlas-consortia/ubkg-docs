## SenNet Docs

### Install 
```bash
npm i .
```

### Development 
#### Run server.
```bash
npm start
```
Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.
#### CSS 
```
npm run css # watch and build stylus files
```

### Build
```
npm run build
```
Serve build folder locally.   
Should have `serve` module installed after running `npm i .`
```
serve ./build 
```

## Contents
- `/src/`- any source code used to generate the hosted documents (not directly published)
- `/build/` - The complete site for distribution, currently being served for GitHub Pages
- `/docs/`  
  - `md/` - Contains the markdown files that are hosted as html by GitHub Pages.
  - `lang/` - Can set language files to serve the site in another language but English


## Usage 
