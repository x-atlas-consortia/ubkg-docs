---
layout: default
---
# UBKG-JKG

---

The **UBKG-JKG** version of the [UBKG system](../about/system) is the
version deployed in [implementations](../about/implementations) of UBKG starting in 2027.

The UBKG-JKG system is based on a [JKG JSON](/about/glossary/#jkg-json) file that conforms to the 
[JSON Knowledge Graph](https://github.com/x-atlas-consortia/json-knowledge-graph) (JKG) schema.

# UBKG-JKG, JKG, and UMLS
---

JKG is a generic JSON specification for representing knowledge graph databases. A JKG JSON can be generated from 
any [seed source](/about/glossary/#seed-source) of assertions.

A UBKG-JKG instance is an implementation of JKG that uses the [UMLS](/about/glossary/#umls) as a seed source.
UBKG-JKG differs from [UBKG-CSV](/ubkg-csv) in that UBKG-CSV _must_ start with the UMLS as a seed source.

# GitHub repositories
---
The components of the UBKG-JKG system are distributed among a number of 
GitHub repositories.

| Component              | Sub-component | Repository                                                                        |
|------------------------|---------------|-----------------------------------------------------------------------------------|
| JSON specification     |               | [json-knowledge-graph](https://github.com/x-atlas-consortia/json-knowledge-graph) |
| ETL workflow           | UMLS ETL      | [ubkg-jkg-umls](https://github.com/x-atlas-consortia/ubkg-jkg-umls)               |
|                        | non-UMLS ETL  | [ubkg-jkg-generation](https://github.com/x-atlas-consortia/ubkg-jkg-generation)   |
| Distribution workflows |               | [jkg-neo4j](https://github.com/x-atlas-consortia/jkg-neo4j)                       |

<br>

# Data Model
---
The JKG data model implements the [UBKG operational model](/about/models/#operational-model) using nodes, relationships, and properties. 
The data model is described in detail in the [json-knowledge-graph repository](https://github.com/x-atlas-consortia/json-knowledge-graph#jkg-data-model).

## Differences from UBKG-CSV data model
The JKG data model differs substantially from the UBKG-CSV data model. 

| element       | data model | representation                                                                                                                                       |
|---------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| code          | UBKG-CSV   | independent node                                                                                                                                     |
|               | UBKG-JKG   | set of properties of a [CODE relationship](https://github.com/x-atlas-consortia/json-knowledge-graph#concept-term-code) between a Concept and a Term |
| code link     | UBKG-CSV   | CODE relationship with a Concept node                                                                                                                |
|               | UBKG-JKG   | CODE relationship between a Concept and a Term                                                                                                       |
| definition    | UBKG-CSV   | independent node linked to Concept node via DEF relationship                                                                                         |
|               | UBKG-JKG   | property of Concept node                                                                                                                             |
| semantic type | UBKG-CSV   | independent node linked to Concept via STY relationship                                                                                              |
|               | UBKG-JKG   | alternate label for Concept node                                                                                                                     |

<br>

### Concept subgraph
In the **UBKG-CSV** data model, the set of codes, terms, definitions, and semantic types that associate with a Concept node 
comprise a concept subgraph. Concept subgraphs in the UBKG-JKG are much simpler, because many of the elements that were represented as
independent nodes in UBKG-CSV are properties in UBKG-JKG.

### Attributes
Both the UBKG-CSV and UBKG-JKG data models recognize properties of edges and nodes related to evidence class.
However, the UBKG-JKG structures these properties as an [attribute](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/Optional%20relationship%20attributes.md).

# Extraction, Transformation, and Load (ETL) Workflows
---
The general explanation of UBKG ETL workflows can be found [here](/about/etl).
## [UMLS ETL workflow](https://github.com/x-atlas-consortia/ubkg-jkg-umls)
## [non-UMLS ETL workflow](https://github.com/x-atlas-consortia/ubkg-jkg-generation)
<br>

# Distribution Workflows
---
The general explanation of UBKG distribution workflows can be found [here](/about/distribution).
## [Build workflow](https://github.com/x-atlas-consortia/jkg-neo4j/blob/main/docs/BUILD_INSTRUCTIONS.md)
## [Deployment workflow](https://github.com/x-atlas-consortia/jkg-neo4j/blob/main/docs/DEPLOYMENT_INSTRUCTIONS.md)

