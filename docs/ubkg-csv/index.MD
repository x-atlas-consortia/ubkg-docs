---
layout: default
---
# UBKG-CSV

---

The **UBKG-CSV** version of the [UBKG system](../about/system) was the original 
version deployed in [implementations](../about/implementations) such as the [CFDE Data Distillery](/about/implementations)
and Petagraph. 

Releases of UBKG implementations in UBKG-CSV format include:
* the [Petagraph](../#petagraph) project in 2024
* releases of the CFDE [Data Distillery](../#cfde-data-distillery) in 2024 and 2025
* the [HuBMAP/SenNet application ontology](../#hubmapsennet-ontology)

The UBKG-CSV system is based on a set of CSV files of data extracted from a 
release of the UMLS. Data from non-UMLS sources is appended to the CSV files. The
CSV files are imported into a neo4j graph database.

# Currency
The UBKG-CSV system supported implementations of the UBKG prior to 2027.
Implementations of the UBKG from 2027 are based on the [UBKG-JKG](/ubkg-jkg) version of the UBKG System.

The source code and documentation for the UBKG-CSV version of the UBKG System will not be enhanced.
Because the terminology used to describe the UBKG has evolved over time, documentation used in
files such as README files of the GitHub repositories will reflect an earlier state.

# GitHub repositories
The components of the UBKG-CSV system are distributed among a number of 
GitHub repositories.

| Component                                                      | GitHub repository                                             |
|----------------------------------------------------------------|---------------------------------------------------------------|
| [ETL workflows](../about/system/#umls-translation)             | [ubkg-etl](https://github.com/x-atlas-consortia/ubkg-etl)     |
| [Distribution workflows](../about/system/#deployment-workflow) | [ubkg-neo4j](https://github.com/x-atlas-consortia/ubkg-neo4j) |
| [API](../about/system/#apis)                                   | [ubkg-api](https://github.com/x-atlas-consortia/ubkg-api)     |
| [Guesdt](../about/system/#guesdt)                              | [Guesdt](https://github.com/x-atlas-consortia/Guesdt)         |

# Data Model
A UBKG database can be considered a _[knowledge graph](../about/glossary/#knowledge-graph-database)_ for which 
* Nodes and edges are annotated with a constrained set of important properties.
* Some properties are represented as nodes.

A UBKG database is thus primarily a knowledge graph with some characteristics of a _[property graph](../about/glossary/#property-graph-database)_.

## Concept subgraphs
The [UBKG operational model](../about/models/#operational-model) features
a set of entities, releationships, and properties. 

The UBKG-CSV data model emulates the UMLS model in which all elements are discretely encoded, including
properties. UBKG-CSV represents some properties as nodes linked to other nodes via special relationships between 
"property" nodes and other nodes. As a result, each concept will have one or more [concept subraphs](concept_subgraph).
