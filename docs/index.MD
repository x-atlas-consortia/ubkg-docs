---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG)

---
# Introduction

The **Unified Biomedical Knowledge Graph (UBKG)** specifies a system that can be used to build and use a [knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) of information consolidated from a variety of biomedical sources. 

An instance of a knowledge graph database in UBKG format combines information from the National Library of Medicine's [Unified Medical Language System](https://www.nlm.nih.gov/research/umls/index.html) (UMLS) with sets of assertions maintained by the vocabularies of other organizations, including:

* ontology files published in references such as [NCBO Bioportal](https://bioportal.bioontology.org/) and the [OBO Foundry](https://obofoundry.org/)
* public reference databases and biomedical vocabularies available via file transfer or API
* custom ontologies or sets of assertions produced by laboratories or data providers

Goals of the UBKG include:
* to identify _equivalence_ (or synonymy) for concepts that are shared by multiple vocabularies 
* to aid in the identification of connections that may exist between different sets of assertions

# Version history 
There are two different versions of the UBKG. Although the different versions share similar representations of biomedical data, they have different data models and solution architectures.

## [UBKG-JKG](/ubkg-jkg)
The current version of UBKG is built around a JSON source file in [JSON Knowledge Graph (JKG)](https://github.com/x-atlas-consortia/json-knowledge-graph) format.

## [UBKG-CSV](/ubkg-csv)
The original version of UBKG was built around a set of CSV extracts of UMLS data.
This version is no longer being enhanced. 

### Citations
This documentation site has been cited by a number of publications. Unless otherwise specified, citations from publications dated before 2027
refer to the UBKG-CSV.

# Getting Started
* To use an existing instance of a UBKG database, refer [to these instructions](/using#using-an-existing-instance-of-ubkg).
* To build a new instance of UBKG, refer [to these instructions](/using#building-a-new-instance-of-ubkg).
