---
layout: default
---
# UBKG Models

Two models are relevant to the UBKG:

1. an **operational model** that describes the function of the UBKG
2. a **data model** that represents a UBKG in a graph database

# Operational Model

The operational model of the UBKG is independent of the knowledge graph database platform.

## Concepts 

Like the UMLS Metathesaurus, the UBKG is structured around _concepts_. 
A concept is a discrete codification of an _idea_–e.g., the idea of "T-lymphocyte". 
Concepts are encoded with unique alphanumeric identifiers (referred to as _Concept Unique Identifiers_, or _CUIs_, in UMLS): 
e.g., the "T-lymphocyte" concept has identifier **C0039194**. 
An idea in the UBKG concept structure is considered generic–-it is not associated exclusively with any particular 
data source imported into the UBKG.

## Codes
Data sources such as vocabularies or ontologies can also represent discrete ideas, using _codes_. 
For example, the idea of “Heart” is represented in SNOMEDCT_US with the code **80891009**.

## Concept-code association
In the UBKG, every code is associated with a concept through a _code relationship_ (also known as a _coderel_). 
For example, the SNOMEDCT_US code 57184004 ("T-lymphocyte") is associated with the concept with id C0039194.

## Equivalence (synonymy)
An idea represented by a concept may be encoded in multiple data sources. 
When codes in different sources represent the same generic idea, the two codes are _equivalent_ (or _synonyms_). 
In the UBKG, equivalent codes link to the same concept that represents the idea. 

For example, both the SNOMEDCT_US and FMA (_Functional Model Ontology_) sources are equivalent, encoding the idea of "T-lymphocyte". 
The concept **C0039194** ("T-lymphocyte") associates with:
* code **57184004** in the SNOMEDCT_US vocabulary
* code **62870** in the FMA.

### Extension
The UBKG extends the UMLS Metathesaurus equivalence architecture by integrating information from sources outside the UMLS.

For example:
* From the UMLS, UBKG obtains the concept **C0588211** for “Bone structure of distal humerus” and the linked codes **FMA:32826** and **SNOMEDCT_US:118495001**.
* The import of the UBERON source into UBKG adds another concept-code relationship between the concept **C0588211** and code **UBERON:0004404**.
* The code **UBERON:0004404** is thus equivalent to codes **FMA:32826** and **SNOMEDCT_US:118495001**.

## Assertions
An assertion defines a _relationship_ between two _entities_.

The UBKG uses a number of different types of assertions:

### Concept-concept assertions
The UBKG defines two types of assertions between concepts:
1. **Hierarchical** assertions relate concepts in terms of scope of meaning. The primary form of hierarchical assertion in the UKBG is the **_isa_** relationship.
2. **Associative** assertions relate concepts in non-hierarchical ways. An example of an associative assertion is **_located_in_**.

### Concept-code assertions
The UBKG asserts relationships between concepts and codes.

## Terms
Terms are string descriptions for encoded entities. An entity can
associate with terms of different types. 
For example, 
* The concept **C0039194** has a _preferred term_ of "T-Lymophocuyte".
* The code **SNOMEDCT_US:118495001** has a number of terms, including:
  * a _preferred term_ of "Bone structure of distal humerus"
  * _synonyms_ of "distal humerus" and "distal end of humerus""

## Properties
In the UBKG, concepts, codes, and relationships have properties.
Examples of properties include:
* identifiers
* types
* values
* ranges
* definitions
* sources


# Data Model: Dependencies
Unlike the operational model, the data model for a UBKG database depends on:

## Knowledge graph database platform 
Neo4j is the platform of the reference implementations of UBKG. 
The data model uses neo4j elements to represent the entities, relationships, and properties
of the operational model.

## UBKG architecture
The UBKG data model depends on the version of UBKG architecture. 
Because of the significant differences between the two architectures, discussions of 
data models are in the documentation dedicated to architecture.
* [UBKG-CSV](../../ubkg-csv#data_model)
* [UBKG-JKG](../../ubkg-jkg#data_model)