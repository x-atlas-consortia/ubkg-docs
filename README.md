<<<<<<< HEAD
# ubkg-docs
Unified Biomedical Knowledge Graph (UBKG) Documentation

## Usage
- Save your documentation files in the `docs/` directory.
- Properly name the documents and directories as path names are used to automatically generate the `Breadcrumbs`
- Properly use H headings, in their correct rankings as these are pulled from the documents to automatically generate the `Table of Contents`
- For convenience, within `docs/lang/en.json`, you are free to change the text:  
  - And links of the `menu` property without having to rebuild the html files. The `menu` property is an array of objects in format of `{name: "Link name", href: "/link-url"}`
  - Of the `breadcrumbRoot` property without having to rebuild the html files. The change here will appear on the `Breadcrumbs` component. If you remove this property, no root will be included.

## Contents
- `/src/`- Any source code used to generate the hosted documents (not directly published)
- `/docs/` - Contains the markdown files that are hosted as html by GitHub Pages.
- `/docker/` - The files to create a docker image which can be run locally to test the site. This image is built and available from DockerHub as `hubmap/github-pages-server`


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
*Note:* This is only for viewing the styles, layouts and JS functionality generated through `/src` changes, ideally should set up the docker server for mimicking of GitHub pages to test fully.  
[See Below: Mimicking GitHub Pages Locally](#mimicking-github-pages-locally)
### CSS 
```
npm run css # builds CSS files to `/docs/css/main.css` and copies to `./docs/_site` GitHub build folder
```

### JS
```
npm run js # builds Js files to `/docs/js/main.js` and copies to `./docs/_site` GitHub build folder
```

### html
```
npm run html # builds the PUG layout and pages to `/docs[/_layouts]`
```

### Build All 
```
npm run build # builds all of the above
```
Serve `docs` folder locally.   
Should have `serve` module installed after running `npm i .`  
*Note:* This is only for viewing the styles, layouts and JS functionality generated through `/src` changes, ideally should set up the docker server for mimicking of GitHub pages to test fully.  
[See Below: Mimicking GitHub Pages Locally](#mimicking-github-pages-locally)
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
=======
# UBKG
The **Unified Biomedical Knowledge Graph (UBKG)** is a [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) database that represents a set of interrelated concepts from biomedical ontologies and vocabularies. The UBKG combines information from the National Library of Medicine's [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) (UMLS) with [_assertions_](https://www.w3.org/TR/owl2-syntax/#Assertions) from “non-UMLS” ontologies or vocabularies, including:
- Ontologies published in references such as the [NCBO Bioportal](https://bioportal.bioontology.org/) and the [OBO Foundry](https://obofoundry.org/).
- Custom ontologies derived from data sources such as [UNIPROTKB](https://www.uniprot.org/).
- Other custom ontologies, such as those for the [HuBMAP](https://hubmapconsortium.org/) platform.

An important goal of the UBKG is to establish connections between ontologies. For example,if information on the relationships between _proteins_ and _genes_ described in one ontology can be connected to information on the relationships between _genes_ and _diseases_ described in another ontology, it may be possible to identify previously unknown relationships between _proteins_ and _diseases_.

## UBKG Components
The primary components of the UBKG are:

- a graph database, deployed in [neo4j](https://neo4j.com/)
- a [REST API](https://restfulapi.net/) that provides access to the information in the graph database

## UBKG Data Sources
The assertion data in the UBKG database is created from a load of a set of CSV files, using [neo4j-admin import](https://neo4j.com/docs/operations-manual/current/tutorial/neo4j-admin-import/). 
The set of CSV import files is the product of two frameworks:
- a _source framework_ that extracts data obtained from a release of the UMLS
- a _generation framework_ that appends to the UMLS data assertions from other data sources


### Source framework
The [**source framework**] is a combination of manual and automated processes that obtain the base set of nodes (entities) and edges (relationships) of the UBKG graph.

The source framework is also known as the **UMLS-Graph**.

- Information on the concepts in the ontologies and vocabularies that are integrated into the UMLS Metathesaurus can be downloaded using the [MetamorphoSys](https://www.ncbi.nlm.nih.gov/books/NBK9683/#:~:text=MetamorphoSys%20is%20the%20UMLS%20installation,to%20create%20customized%20Metathesaurus%20subsets.) application. MetamorphoSys can be configured to download subsets of the entire UMLS.
- Additional semantic information related to the UMLS can be downloaded manually from the [Semantic Network](https://lhncbc.nlm.nih.gov/semanticnetwork/). 

The result of the Metathesaurus and Semantic Network downloads is a set of files in [Rich Release Format](https://www.ncbi.nlm.nih.gov/books/NBK9685) (RRF). The RRF files contain information on source vocabularies or ontologies, codes, terms, and relationships both with other codes in the same vocabularies and with UMLS concepts.

The RRF files are loaded into a data mart. A python script then executes SQL scripts that perform Extraction, Transformation, and Loading of the RRF data into a set of twelve temporary tables. These tables are exported to CSV format in files that become the **UMLS CSVs**.

![Source_framework](https://user-images.githubusercontent.com/10928372/202307155-5bfd7a77-e858-4e5c-89a1-a42d964b871d.jpg)

### Generation framework
The UMLS CSVs can be loaded into neo4j to build a graph version of the UMLS, including concepts and relationships from over 150 vocabularies and ontologies that are integrated into the UMLS, such as SNOMED CT, ICD10, NCI, etc.. 

The UBKG extends the UMLS graph by integrating additional assertions from sources outside of the UMLS, including a number of standard biomedical ontologies that are published in NCBO BioPortal, including:

Ontology or Source | Description
--- | ---
[PATO](https://bioportal.bioontology.org/ontologies/PATO) | Phenotypic Quality Ontology
[UBERON](https://bioportal.bioontology.org/ontologies/UBERON) | Uber Anatomy Ontology 
[CL](https://bioportal.bioontology.org/ontologies/CL) | Cell Ontology
[DOID](https://bioportal.bioontology.org/ontologies/DOID) | Human Disease Ontology
[OBI](https://bioportal.bioontology.org/ontologies/OBI)| Ontology for Biomedical Investigations
[OBIB](https://bioportal.bioontology.org/ontologies/OBIB) | Ontology for Biobanking
[EDAM](https://bioportal.bioontology.org/ontologies/EDAM) | EDAM
[HSAPDV](https://bioportal.bioontology.org/ontologies/HSAPDV) | Human Developmental Stages Ontology
[SBO](https://bioportal.bioontology.org/ontologies/SBO) | Systems Biology Ontology
[MI](https://bioportal.bioontology.org/ontologies/MI) |Molecular Interactions
[CHEBI](https://bioportal.bioontology.org/ontologies/CHEBI) | Chemical Entities of Biological Interest Ontology
[MP](https://bioportal.bioontology.org/ontologies/MP) | Mammalian Phenotype Ontology
[ORDO](https://bioportal.bioontology.org/ontologies/ORDO) | Orphan Rare Disease Ontology
[UO](https://bioportal.bioontology.org/ontologies/UO)|Units of Measurement Ontology
[UNIPROTKB](https://www.uniprot.org/uniprotkb/?query=*)|Protein-gene relationships from UniProtKB
[HRAVS](https://bioportal.bioontology.org/ontologies/HRAVS) | Human Reference Atlas Value Set
[HUBMAP](https://hubmapconsortium.org/)|the application ontology supporting the infrastructure of the HuBMAP Consortium
[CCF](https://bioportal.bioontology.org/ontologies/CCF)|Human Reference Atlas Common Coordinate Framework Ontology
[MONDO](https://bioportal.bioontology.org/ontologies/MONDO)|MONDO Disease Ontology
[EFO](https://bioportal.bioontology.org/ontologies/EFO)|Experimental Factor Ontology
[SENNET](https://sennetconsortium.org/)|the application ontology supporting the infrastructure of the SenNet Consortium
[AZ](https://azimuth.hubmapconsortium.org/)|Azimuth cell annotations mapped to Cell Ontology terms

The scripts in the generation framework:
- extract information on assertions (also known as _triples_, or _subject-predicate-object_ relationships) found in ontologies or derived from other sources
- iteratively add assertion information to the base set of UMLS CSVs to create a set of **ontology CSVs**.

Once a set of ontology CSVs is ready, they can be imported into a neo4j database to form a new instance of the UBKG.

The generation framework can work with:
- data from ontologies published in [Web Ontology Language](https://www.w3.org/OWL/) (OWL) files that conform to the [principles](https://obofoundry.org/principles/fp-000-summary.html) of the OBO Foundry
- data from private or custom ontologies that are in the SimpleKnowledge format. (SimpleKnowledge is a lightweight ontology editor based on spreadsheets developed by Pitt UBMI.)
- assertion data that conforms to the _UBKG Edge/Node format_.

### PheKnowLator and OWLNETS
The generation framework obtains assertion data from OWL files with scripts that are based on the [Phenotype Knowledge Translator](https://github.com/callahantiff/PheKnowLator) (PheKnowLator) application. PheKnowLator converts information from an OWL file into the [OWL-NETS](https://github.com/callahantiff/PheKnowLator/wiki/OWL-NETS-2.0) (OWL NEtwork Transformation for Statistical learning) format.


![generation_framework](https://user-images.githubusercontent.com/10928372/202308840-1abc0684-684d-476a-8ed5-1a1b4118ffc6.jpg)
>>>>>>> e09ea06 (Initial commit)
