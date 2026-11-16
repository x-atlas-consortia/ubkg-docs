---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG)

---
# Introduction

The **Unified Biomedical Knowledge Graph (UBKG)** is a system to 
build and use a [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) of biomedical [assertions](/about/glossary#assertion).

An instance of UBKG combines information from the vocabularies managed by the 
**Unified Medical Language System** ([UMLS](https://www.nlm.nih.gov/research/umls/index.html)) 
with sets of assertions from other _sources_. 

## UMLS information
Information from the UMLS includes:
+ A concept model similar to that of the [Metathesaurus](https://www.ncbi.nlm.nih.gov/books/NBK9684/)
+ Semantic types from the [Semantic Network](https://www.ncbi.nlm.nih.gov/books/NBK9679/)

## Non-UMLS information
Examples of data sources that are not in the UMLS include:
+ ontology files available from registries such as [OBO Foundry](https://obofoundry.org/
) and [NCBO BioPortal](https://bioportal.bioontology.org/)
+ ontology files available from GitHub repositories
+ exports from public data sources, such as [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/), [UniProt](https://www.uniprot.org/), and [GENCODE](https://www.gencodegenes.org/)
+ custom data sources

## Goals
Goals of the UBKG include:
* to extend the [UMLS operational model](/about/models/#operational_model) to non-UMLS data
* to identify [equivalence](/about/glossary#equivalence-synonymy) between different biomedical sources for shared concepts 
* to aid in the identification of connections that may exist between different sets of assertions

# Version history 
There are two different versions of the UBKG. Although the different versions share similar representations of biomedical data, they have different data models and solution architectures.

## [UBKG-JKG](/ubkg-jkg)
The current version of UBKG is built around a JSON source file in [JSON Knowledge Graph (JKG)](https://github.com/x-atlas-consortia/json-knowledge-graph) format.

## [UBKG-CSV](/ubkg-csv)
The original version of UBKG was built around a set of CSV extracts of UMLS data.
This version is no longer being enhanced.

# Getting Started
* To use an existing instance of a UBKG database, refer [to these instructions](/using#using-an-existing-instance-of-ubkg).
* To build a new instance of UBKG, refer [to these instructions](/using#building-a-new-instance-of-ubkg).

# Citations
Unless otherwise specified, citations pointing to this website from publications dated before 2027
refer to the [UBKG-CSV](/ubkg-csv) architecture.