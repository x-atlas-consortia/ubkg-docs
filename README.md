# SenNet Docs
## Usage
- Save your documentation files in the `docs/` directory.
- Properly name the documents and directories as path names are used to automatically generate the `Breadcrumbs`
- Properly use H headings, in their correct rankings as these are pulled from the documents to automatically generate the `Table of Contents`

## Contents
- `/src/`- Any source code used to generate the hosted documents (not directly published)
- `/docs/` - Contains the markdown files that are hosted as html by GitHub Pages.
- `/docker/` - The files to create a docker image which can be run locally to test the site. This image is built and available from DockerHub as hubmap/github-pages-server


## Development
### Install 
```bash
cd documentation
npm i .
```

### Run Dev Server
```bash
npm start
```
Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.
### CSS 
```
npm run css # watch and build stylus files
```

### Build
```
npm run build
```
Serve `docs` folder locally.   
Should have `serve` module installed after running `npm i .`
```
serve ./docs 
```
## Coding Conventions
- Do use dash casing to separate words for directories in `docs`:
  - correct: `foo-who/` , incorrect: `foo_who/`
- Please set up prettier in your IDE to keep code formatting consistent or just follow the prettier rules as described in `./package.json`
- Do follow any additional code formatting and styles as seen in the project

## Mimicking GitHub Pages Locally
The docker image built out of the `/docker` directory provides a local server to mimic the GitHub Pages server. This image has been built and pushed to DockerHub. 
To run it you must mount a local copy of the `/documentation/` repo as a volume in the container as the volume `/software-docs/` and expose port `4000` locally. 
The `runlocal.sh` script is provided to help with this. You must have docker installed and running.

To test this repository locally using the docker image execute the `runlocal.sh` script included in this directory like:

`sh ./runlocal.sh /full/absolute/path/to/the/downloaded/repository`
When the container is running correctly you'll be able to navigate to https://localhost:4000/ in a local browser.