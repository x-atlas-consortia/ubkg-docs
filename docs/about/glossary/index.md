---
layout: default
---
# Unified Biomedical Knowledge Graph 
# Glossary

---


## Assertion
An assertion establishes a [relationship](#relationship) between two [entities](#entity).

For example, one can assert that 

**sky** _has_color_ **blue**

where **sky** and **blue** are entities and _has_color_ is a relationship.

## BioPortal
A repository of biomedical ontologies maintained by [NCBO](https://bioportal.bioontology.org/). 

Although many of the ontologies published in BioPortal follow [OBO principles](https://obofoundry.org/principles/fp-000-summary.html), including the use of [IRIs](#iri),  compliance is optional.

## Code
The discrete representation of a [concept](#concept) in a [source](#source) in the UBKG. 
For example, SNOMED represents the concept of "breast cancer" (UMLS:C0678222) with code 254838004.
Codes are unique in the UBKG.

## Concept
As with the UMLS, a concept in the UBKG is the discrete representation of an idea, process, characteristic, finding, or physical item. 
Examples include:
* "breast cancer"
* "blue"
* "tomography"

A concept is a type of [entity](#entity) in the UBKG data model, represented with a type of [node](#node) in a UBKG database.

## Concept subgraph
In the UBKG-CSV data model, a concept subgraph is a subgraph of Code, Term, Definition, and Semantic Type nodes that link to a Concept node. 

## Concept Unique Identifier (CUI)
A unique identifier for a [concept](#concept) in the UBKG. For example, the CUI _C0678222_ identifies the concept for "breast cancer" in the UMLS.

## Cross-reference
A link between a [code](#code) from a [source](#source) and another [entity](#entity). 

In a [node file](#node-file), cross-references are in the _node_dbxrefs_ column.

Types of cross-references are:
- **concept-code** between a code in a source and a concept. For example, the code 254838004 (Carcinoma of breast) in SNOMED has a code reference to the concept with CUI C0678222.
- **equivalence** between a code in one source and a code in another source. For example, the code UBERON:0005047 (mucosa of vocal fold) is cross-referenced to the code FMA:64017 (Mucosa of vocal fold).

## Edge
A synonym for the [relationship](#relationship) of an [assertion](#assertion). In the UBKG, "edge" is used to identify the entities in an [edge file](#edge-file).

## Edge file
A source's edge file asserts [relationships](#relationship) between [codes](#code). 
Edge files conform to the UBKG Edge Node format (link to page).

## Encode
To represent a [concept](#concept) in a [source](#source) with a discrete [code](#code). 
For example, the SNOMED source encodes the UMLS concept of C0678222 (breast cancer) with code 254838004.

## Entity
An entity represents an element of an [ontology](#ontology) that participates in a [relationship](#relationship). 

In a [knowledge graph database](#knowledge-graph-database), an entity is represented by a [node](#node).

## Equivalence (synonymy)
When multiple codes share a concept-code [cross-reference](#cross-reference) to a concept, the two codes are _equivalent_, or synonyms, and the two codes
may be described as _equivalence_classes_. 

Equivalence is a fundamental feature of both the UMLS and the UBKG, because it identifies possible synonymy between sources. 

For example, the concept for "breast cancer" (UMLS:C0678222) has concept-code [cross-references](#cross-reference-dbxref) to codes in a number of sources, including:
* SNOMEDCT_US:254838004 
* CHV:0000042783
* HPO:0003002
* CHV:0000052645
* NCI:C4872
* MEDCIN:232274

Because of the equivalence between the concepts, it may be possible to replace a code from one source in a relationship defined by another source.

##  Inverse relationship

A [relationship](#relationship) in a [source](#source) has a direction: it starts with one node and “goes toward” another. 
For example, in the assertion

**X** _located_in_ **Y**

the _located_in_ relationship starts with the concept X and ends with the concept Y. 

A relationship is considered the _inverse_ of another relationship if it can be used to link the same nodes of the relationship in the opposite direction. 

For example, the _located_in_ relationship may have _location_of_ as an inverse:

**Y** _location_of_ **X**

Inverse relationships can be ambiguously named: for example, the inverse relationship of _has_gene_product_ is _gene_product_of_. 
To obtain inverse relationships that are ambiguously named, the UBKG refers to the [Relationship Ontology](#relationship-ontology-ro).

Inverse relationships are primarily a feature of the UBKG-CSV architecture. The UBKG-JKG architecture does not add inverse relationships explicitly.

## IRI
A [source file](#source-files) may identify an entity or a relationship with an _International Resource Indicator_ (IRI). 
An IRI is a _PURL_ (Permanent Uniform Resource Locator) that refers to a published online resource.

The UBKG system recognizes entity IRIs in format 
_OBO PURL_/_source identifier___code in source_.

For example, the IRI for UBERON:0000344 (vocal fold mucosa) is
http://purl.obolibrary.org/obo/UBERON_0000344

UBKG recognizes relationship IRIs formatted in the same manner as for entities, provided that the OBO PURL is from the [Relationship Ontology (RO)](#relationship-ontology-ro)--e.g., http://purl.obolibrary.org/obo/RO_0002160.

## Knowledge Graph (database)
A knowledge graph is a representation of information characterized by the [relationships](#relationship) between a set of [entities](#entity). 
Whereas relational databases (RDBMS) organize information into tables, rows, and fields, knowledge graph databases organize information into [nodes](#node) and [edges](#edge).

In a strict knowledge graph, properties of entities and relationships are also represented by assertions, unlike a [property graph](#property-graph).

## NCBO
The National Center for Biomedical Ontology (NCBO) maintains [BioPortal](https://bioportal.bioontology.org/), a repository of biomedical ontologies.

## neo4j
The UBKG database is deployed in instances of the [neo4j](https://neo4j.com/) graph data platform. “A neo4j” or “the neo4j” is equivalent to “an instance of the UBKG database hosted in a neo4j server”.

## Node
A synonym for [entity](#entity). 

Nodes are defined in a [node file](#node-file) and represented as node objects in the UBKG database.

## Node file
A node file describes [entities](#entity) used by a source in its [assertions](#assertion).
Node files conform to the UBKG Edge Node format (link to page).

## Ontology
For the purposes of the UBKG, an ontology is the representation of a set of entities and the relationships between them. 

## OLS 
The Ontology Lookup Service [OLS](https://www.ebi.ac.uk/ols/index) is a repository of biomedical [ontologies](#ontology). The OLS allows for searches of relationship properties, including those from the [Relationship Ontology](#relationship-ontology-ro).

## OBO Foundry
The Open Biological and Biomedical Ontology Foundry [OBO](https://obofoundry.org/) is a community that maintains a set of “interoperable ontologies for the biomedical sciences”, as well as a set of [principles](https://obofoundry.org/principles/fp-000-summary.html)–i.e., best practices and standards for representing ontologies in OWL.

Many of the ontology sources in UBKG follow OBO principles.

## OWL files
The **Web Ontology Language** [OWL](https://www.w3.org/OWL/) is a language for representing [ontologies](#ontology) in a standard format that can be interpreted by software applications. 
Biomedical ontologies can be published as OWL files in reference sites such as the [NCBO BioPortal](#ncbo) and the [OBO Foundry](#obo-foundry).

## Predicate
Synonym for [relationship](#relationship) used in source [edge files](#edge-file).

## Property graph
A property graph database is related to a [knowledge graph database](#knowledge-graph-database) in that a property graph database also models relationships between entities. 
A property graph database differs from a knowledge graph database in that properties of the entities and relationships of the graph can be assigned directly to the entities or relationships, instead of needing to be represented as assertions.

## Relationship
A relationship can be: 
* an association between two [entities](#entity) in a [source](#source), such as an ontology.
* a link between two node objects in a UBKG database. (In neo4j, a relationship is often described as a _rel_.)

### Types of relationships
#### Ontological
Most of the relationships in biomedical ontologies are one of two types:
- **hierarchical**, linking concepts of different scope--e.g., **_isa_** in
    
   **UBERON:0015458** (_mediastinal fat pad_) _**isa**_ **UBERON:0003593** (_fat pad_)

- **non-hierarchical**--e.g., **_located_in_** in the assertion

   **UBERON:0018395** (_cardiac baroreceptor_) **_located_in_** **UBERON:0000948** (_heart_)

#### Graph (UBKG-CSV)
The nodes of a UBKG database in UBKG-CSV format can have a variety of other relationships that represent node properties in a [concept subgraph](#concept-subgraph).

## Relationship Ontology (RO)
The Relationship Ontology (RO) is an [ontology](#ontology) of discrete [relationships](#relationship) that are used in other ontologies. 
The Relationship Ontology describes how relationships themselves relate to one another--e.g., when one relationship is considered to be the [inverse](#inverse-relationship) of another relationship.

Relationships in RO can be reviewed in a number of ways, including:
- By searching the [Ontology Lookup Service (OLS)](#ols-)
- [this JSON file](https://raw.githubusercontent.com/oborel/obo-relations/master/ro.json)

## SAB
The UBKG adopts the UMLS practice of identifying each [source](#source) with an acronym called the _Source ABbreviation_ (SAB). 

Examples of UMLS SABs include SNOMED_CT and UBERON. 
For sources outside of UMLS (such as ontologies), UBKG uses published acronyms when possible–e.g., PATO, UBERON.

## Semantic Type
A concept category defined in the [UMLS Semantic Network](https://www.nlm.nih.gov/research/umls/knowledge_sources/semantic_network/index.html).

* UBKG-CSV represents semantic types as distinct Semantic Type nodes, linked to Concept nodes via relationships.
* UBKG-JKG represents semantic types as node labels on Concept nodes.

## Source
A collection of [assertions](#assertion) maintained by an organization.

Types of source organizations include:
* ontology authorities (e.g., Uberon)
* reference database publishers (e.g. UniProt)
* laboratories (e.g., the Jackson Lab)

Types of assertion sources for the UBKG include:
* [OWL files](#owl-files)
* databases
* [vocabularies](#vocabulary)
* [source files](#source-files)

## Source files
A set of two files that describe the [assertions](#assertion) of a [source](#source) that is to be integrated into the UBKG. 
The source files are the [edge file](#edge-file) and the [node file](#node-file).

## Term
A short text descriptor for a [code](#code) in an [source](#source). For example, a term for code 64033007 in SNOMED_CT is “kidney”.

# Term Type
A term category from the UMLS. Term types include _Preferred_Term_ (PT) and _Synonym_ (SY). 

## Triple
A triple is the recognized form of an [assertion](#assertion) in a source [edge file](#edge-file).

A triple uses the format
_subject_ _predicate_	_object_

where
* _subject_ and _object_ are both entities (nodes). 
* _predicate_ is a relationship (edge).

## Vocabulary
For the purposes of the UBKG, a vocabulary is similar to an [ontology](#ontology). Some vocabularies (e.g., SNOMED_CT) are also ontologies.

## UMLS
The Unified Medical Language System [UMLS](https://www.nlm.nih.gov/research/umls/index.html) consolidates a number of different biomedical [ontologies](#ontology), [vocabularies](#vocabulary), and standards. 


