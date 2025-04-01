---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG)
---

The **Unified Biomedical Knowledge Graph (UBKG)** is a  [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) infrastructure that represents a set of interrelated concepts from biomedical ontologies and vocabularies. 

The UBKG infrastructure involves...
- the application of a **methodology**...
- that uses a set of **tools**...
- and sets of **assertion data**...
- to be deployed to an **environment**...
- and abstracted by means of an **API**.


The UBKG combines information from the National Library of Medicine's [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) (UMLS) with sets of [_assertions_](https://www.w3.org/TR/owl2-syntax/#Assertions) (also known as _triples_, or _subject-predicate-object_ relationships) from ontologies or vocabularies outside the UMLS, such as:
- Ontology files published in references such as the [NCBO Bioportal](https://bioportal.bioontology.org/) and the [OBO Foundry](https://obofoundry.org/).
- Reference information
- Custom ontologies/sets of assertions

An important goal of the UBKG is to establish connections _between_ sets of assertions. 
For example, if information on the relationships between _proteins_ and _genes_ described in one set of assertions can be connected to information on the relationships between _genes_ and _diseases_ described in another set of assertions, it may be possible to identify previously unknown relationships between _proteins_ and _diseases_.

# Introduction to assertions

An assertion is the statement of a relationship between two entities. 
If you are new to assertions, consult the [Basics](/basics) page.

# Components of the UBKG
The primary components of an instance of the UBKG are:

- a **source context**--a collection of sets of assertions from a group of sources (**SABs**)
- a **source framework** of scripts that obtains information from the UMLS to generate a set of **UMLS CSVs**
- a **generation framework** of scripts that appends to the UMLS CSVs data from a source context to create a set of **ontology CSVs**
- an **ontology knowledge graph database** instance, deployed as a [neo4j](https://neo4j.com/) in a Docker container, that includes scripts to import a set of ontology CSVs
- a [REST API](https://restfulapi.net/) that provides access to the information in the ontology knowledge graph database

## Sources and Source Abbreviations (SABs)

The publisher (also known as the owner or steward) of a set of assertions is identified with a **Source Abbreviation** (SAB). 

Examples of SABs include:
 - UBERON
 - CHEBI
 - PUBCHEM

## Source Contexts
The content of an instance of the UBKG depends directly on the assertion information that is imported into the instance of the ontology knowledge graph database.
The **source context** (or just **context**) for an instance of the UBKG describes a collection of sets of assertions, each of which is identified by SAB.

The [Contexts](/contexts) page describes of a number of UBKG contexts.

## UBKG Source framework
The **UBKG source framework** is a combination of manual and automated processes that obtain the base set of nodes (entities) and edges (relationships) that comprise the UMLS CSVs.
The UMLS CSVs can be loaded into neo4j to populate a UMLS context of the UBKG (UMLS-Graph).

- Information on the entities and relationships in the ontologies and vocabularies that are integrated into the UMLS Metathesaurus can be downloaded using the [MetamorphoSys](https://www.ncbi.nlm.nih.gov/books/NBK9683/#:~:text=MetamorphoSys%20is%20the%20UMLS%20installation,to%20create%20customized%20Metathesaurus%20subsets.) application. MetamorphoSys can be configured to download subsets of the entire UMLS.
- Additional semantic information related to the UMLS can be downloaded manually from the [Semantic Network](https://lhncbc.nlm.nih.gov/semanticnetwork/). 

The result of the Metathesaurus and Semantic Network downloads is a set of files in [Rich Release Format](https://www.ncbi.nlm.nih.gov/books/NBK9685) (RRF). The RRF files contain information on source vocabularies or ontologies, codes, terms, and relationships both with other codes in the same vocabularies and with UMLS concepts.

The RRF files can be loaded into tables in a data mart. (The University of Pittsburgh's manages its UMLS content in its **Neptune** data mart.)

A python script then executes SQL scripts that perform Extraction, Transformation, and Loading (ETL) of the RRF data into a set of twelve temporary tables. These tables are exported to CSV format in files that become the **UMLS CSVs**.
### Solution Architecture

The following diagram illustrates the source framework workflow.

![Source_framework](https://user-images.githubusercontent.com/10928372/202307155-5bfd7a77-e858-4e5c-89a1-a42d964b871d.jpg)

## UBKG Generation framework

The **UBKG generation framework** extends the UMLS context by integrating additional assertions from sources outside the UMLS.

Scripts in the generation framework:
- extract information on assertions found in ontologies or derived from other sources
- iteratively append assertion information to set of UMLS CSVs to create a set of **ontology CSVs**.

Once the generation framework compiles a set of ontology CSVs for a UBKG context, the CSVs can be imported into a neo4j database to populate an instance of the UBKG.

The generation framework accepts assertion files in a number of formats. 
The [Formats](/formats) page specifies formats that the generation scripts accept.

###  PheKnowLator and OWLNETS
When the assertion data source is an OWL file, the generation framework uses the [Phenotype Knowledge Translator](https://github.com/callahantiff/PheKnowLator) (PheKnowLator) package. 
PheKnowLator converts information from an OWL file into the [OWL-NETS](https://github.com/callahantiff/PheKnowLator/wiki/OWL-NETS-2.0) (OWL NEtwork Transformation for Statistical learning) format.

###  Solution Architecture
The generation framework is a parameterized ETL script that:
- extracts assertion information from a data source
- transforms assertion information into the format of the UMLS CSVs
- appends assertions to the UMLS CSVs to create the ontology CSVs

The following diagram illustrates the basic workflow, showing four cases:
1. The OWLNETS script that uses PheKnowLator to work with OWL files
2. A custom script (shown here is a script that works UniProtKB)
3. The SKOWLNETS script that works with SimpleKnowledge data sources
4. Files in the UBKG edges/nodes format

![generation_framework](https://user-images.githubusercontent.com/10928372/202308840-1abc0684-684d-476a-8ed5-1a1b4118ffc6.jpg)

## UBKG API
It is possible to obtain information from an instance of the UBKG ontology graph databse by executing Cypher queries. 
However, the complexity and likely size of a UBKG neo4j instance requires both knowledge of the UBKG schema and caution to avoid problems such as runaway queries.

The UBKG API is a REST API with endpoints that abstract common types of queries that can be executed against a instance of the UBKG neo4j knowledge graph database.

A description of the UBKG API can be found [here](https://smart-api.info/ui/96e5b5c0b0efeef5b93ea98ac2794837).

# Source repositories

The source for the infrastructure components of the UBKG (i.e., everything except assertion data from the UMLS and other SABs) is stored in public GitHub repositories in the [x-atlas-consortia](https://github.com/x-atlas-consortia) organization.

| Repository                                                              | Components                             | Description                                                                                 |
|-------------------------------------------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| [ubkg-etl](https://github.com/x-atlas-consortia/ubkg-etl)               | generation framework; source framework | ETL scripts to build sources that are imported into a UBKG neo4j instance                   |
| [ubkg-neo4j](https://github.com/x-atlas-consortia/ubkg-neo4j)           | UBKG neo4j                             | Tools to build and deploy a Docker container hosting a neo4j instance populated with a UBKG |
| [ubkg-api](https://github.com/x-atlas-consortia/ubkg-api)               | UBKG API                               | REST API to query a UBKG instance                                                           |
| [ubkg-docs](https://github.com/x-atlas-consortia/ubkg-docs)             | documentation                          | Source used to generate the content on this GitHub Docs site.                               |
| [SimpleKnowledge](https://github.com/x-atlas-consortia/SimpleKnowledge) | a spreadsheet format for UBKG sources  |                                                                                             |

# Deployments
A description of deployment options can be found [here](https://ubkg.docs.xconsortia.org/deployment/).