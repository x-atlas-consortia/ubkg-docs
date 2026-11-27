---
layout: default
---
# Unified Biomedical Knowledge Graph 
<br>

# Glossary

---

## Assertion
An assertion establishes a [relationship](#relationship) between two [entities](#entity).

For example, one can assert that 

**sky** _has_color_ **blue**

where **sky** and **blue** are entities and _has_color_ is a relationship.

## Assigned concept
In general, a [code](#code) in an instance of the UBKG can be assigned to more than one
[concept](#concept). To mitigate the risk of duplication in queries involving codes,
the UBKG designates one [code link](#code-link) as the "assigned" or "preferred" code link.

The form of assignment is specific to the version of the UBKG system.

## Bare-metal distribution
A [UBKG distribution](#ubkg-distribution) that runs directly on the local machine, using an instance of neo4j installed directly on the machine.

## Bidirectional link
A set of relationships between two concepts in which each relationship is the [inverse](#inverse-relationship) of the other.

## BioPortal
A repository of biomedical ontologies maintained by [NCBO](https://bioportal.bioontology.org/). 

Although many of the ontologies published in BioPortal follow [OBO principles](https://obofoundry.org/principles/fp-000-summary.html), including the use of [IRIs](#iri),  compliance is optional.

## Code
An entity in the UBKG that [encodes](#encode) an [idea](#idea) in a [source vocabulary](#source).
A code is _specific_ to a source vocabulary, but is not _generic_ in the UBKG--i.e., a code does not have an exclusive relationship with 
an idea in the UBKG.

For example, the idea of "breast cancer" is represented with code **254838004** in the 
SNOMEDCT source vocabulary, but also with code **0003002** in the HPO source vocabulary.

## Code link
Each [code](#code) in the UBKG is linked to at least one [concept](#concept).
In the UBKG data model, the code link is implemented with a _code relationship_ (or _coderel_)--
a relationship with the label "CODE".

Although a code may have more than one code link, one link is designated the [assigned concept](#assigned-concept) for the code.

## Concept
An entity in the UBKG's [concept hierarchy](#concept-hierarchy) that [encodes](#encode) an [idea](#idea).
A concept is _generic_ in the UBKG--i.e., it is not associated exclusively with a source vocabulary.
For example, the concept with CUI C0678222 encodes the idea of "breast cancer".

## Concept hierarchy
As with the [UMLS Metathesaurus](https://www.nlm.nih.gov/research/umls/knowledge_sources/metathesaurus/index.html), the UBKG relies on a hierarchy of generic [concepts](#concept). [Codes](#code) associate
with concepts via [code links](#code-link). 

The UBKG concept hierarchy can be considered as a "metavocabulary", in which the concepts are like the codes of a source vocabulary.

## Concept subgraph
In the [UBKG-CSV data model](../../ubkg-csv#data-model), a concept subgraph is a subgraph of Code, Term, Definition, and Semantic Type nodes that link to a Concept node. 

## Concept Unique Identifier (CUI)
A unique identifier for a [concept](#concept) in the UBKG. 

The UBKG extends the UMLS use of CUI to non-UMLS vocabularies. In particular,
if a code in a non-UMLS source vocabulary does not have a cross-reference to a UMLS CUI, the UBKG translation workflow will
[mint](#mint) a new CUI for the code. The format of minted CUIs depends on the version of the [UBKG system](#ubkg-system).

For example, the CUI **C0678222** identifies the concept for "breast cancer".

## Context 
A UBKG _context_ (or _source context_) is a collection of sets of [assertions](#assertion) from different [sources](#source).

Examples of [contexts](../../about/contexts) include:
* the UMLS context
* the base context (which appends to the UMLS context)
* the Data Distillery context (which appends to the base context)

## Cross-reference
A link between a [code](#code) from a [source](#source) and another [entity](#entity). 

In a [node file](#node-file), cross-references are in the _node_dbxrefs_ column.

Types of cross-references are:
- **concept-code** between a code in a source and a concept. For example, the code 254838004 (Carcinoma of breast) in SNOMED has a code reference to the concept with CUI C0678222.
- **equivalence** between a code in one source and a code in another source. For example, the code UBERON:0005047 (mucosa of vocal fold) is cross-referenced to the code FMA:64017 (Mucosa of vocal fold).

## CURIE
A _Compact Uniform Resource Identifier_ is a shortened identifer for an entity in an ontology that can be expanded 
to an [IRI](#iri). The CURIE format is _namespace_:_identifier_, where _namespace_ corresponds to a [SAB](#sab).

## Edge
A synonym for the [relationship](#relationship) of an [assertion](#assertion). In the UBKG, "edge" is used to identify the entities in an [edge file](#edge-file).

## Edge file
A source's edge file asserts [relationships](#relationship) between [codes](#code). 
Edge files are in [Edge Node format](#edgenode-format).

## Edge/Node format
The triple-based format used for [source files](#source-files).

* In the UBKG-CSV architecture, the format is known as the _UBKG Edge/Node format_.
* In the UBKG-JKG architecture, the format is known as the _JKG Edge/Node format_, or **JKGEN**.

## Encode
To represent an [idea](#idea) with a discrete identifier.
For example,
* The SNOMED source vocabulary encodes the idea of "breast cancer" with [code](#code) **254838004**.
* The UBKG concept hiearchy encodes the idea of "breast cancer" with [concept](#concept) **C0678222**.

## Entity
An entity represents an element of an [ontology](#ontology) that participates in a [relationship](#relationship). 

In a [knowledge graph database](#knowledge-graph-database), an entity is represented by a [node](#node).

## Equivalence (synonymy)
When multiple codes have [code links](#code-link) to the same [concept](#concept), the two codes are _equivalent_ (or _synonyms_), and the two codes
may be described as _equivalence_classes_. 

Equivalence is a fundamental feature of both the UMLS and the UBKG, because it identifies possible synonymy between sources. 

For example, the concept for "breast cancer" (UMLS:C0678222) has code links with codes in a number of source vocabularies, including:
* SNOMEDCT_US:254838004 
* CHV:0000042783
* HPO:0003002
* CHV:0000052645
* NCI:C4872
* MEDCIN:232274

Because of the equivalence between the codes from different sources, it may be possible to substitute a code from one source in a relationship defined by another source.

## External bind mount
In a [turnkey distribution](#turnkey-distribution), the set of files comprising the UBKG neo4j database that resides on the local machine, used by the 
distribution's Docker container.

## Framework
In a [UBKG System](#ubkg-system), a _framework_ is a set of interrelated shell scripts, Python scripts, and resource files used to execute a function in the system.

## Idea
A "meaning" (or _semiotic unit_) that can be represented with a discrete identifier. 
Examples of biomedical ideas found in the UBKG are "heart" and "diabetes".
In the UBKG, ideas are encoded with both [concepts](#concept) and [codes](#code).

## Import file(s)
The files used by the [UBKG System](#ubkg-system) to import data into a neo4j graph database. The form of import file depends on the 
version of the UBKG architecture:
* The UBKG-CSV import files are a set of 12 [ontology CSVs](#ontology-csvs).
* The UBKG-JKG import file is a JSON that conforms to the [JKG Schema](https://github.com/x-atlas-consortia/json-knowledge-graph/blob/main/JKG_Schema.json).

## Inverse relationship
A [relationship](#relationship) in a [source](#source) has a direction: it starts with one node and “goes toward” another. 
For example, in the assertion

**X** _located_in_ **Y**

the _located_in_ relationship starts with the concept X and ends with the concept Y. 

A relationship is considered the _inverse_ of another relationship if it can be used to link the same nodes of the relationship in the opposite direction. 

For example, the _located_in_ relationship may have _location_of_ as an inverse:

**Y** _location_of_ **X**

Inverse relationships can be ambiguously named: for example, the inverse relationship of _has_gene_product_ is _gene_product_of_. 
To obtain inverse relationships that are ambiguously named, the UBKG refers to the [Relationship Ontology](#relationship-ontology-ro).

Inverse relationships are primarily a feature of the [UBKG-CSV](/ubkg-csv) architecture. The [UBKG-JKG](../../ubkg-jkg) architecture does not add inverse relationships explicitly.

## IRI
A [source file](#source-files) may identify an entity or a relationship with an _International Resource Indicator_ (IRI). 
An IRI is a _PURL_ (Permanent Uniform Resource Locator) that refers to a published online resource.

The UBKG system recognizes entity IRIs that conform to [OBO Prinicple 3](#obo-principles)--i.e.,
_OBO PURL_/_source identifier___code in source_. For example, the IRI for UBERON:0000344 (vocal fold mucosa) is [http://purl.obolibrary.org/obo/UBERON_0000344](#http://purl.obolibrary.org/obo/UBERON_0000344).

UBKG recognizes relationship IRIs formatted in the same manner as for entities, provided that the OBO PURL is from the [Relationship Ontology (RO)](#relationship-ontology-ro).
An example of a relationship IRI is 
[http://purl.obolibrary.org/obo/RO_0002160](#http://purl.obolibrary.org/obo/RO_0002160).

## JKGEN
A format for [source files](#source-files) in the [UBKG-JKG](/ubkg-jkg) version of the [UBKG system](#ubkg-system).

## JSON Knowledge Graph (JKG)
The [JSON schema](https://github.com/x-atlas-consortia/json-knowledge-graph) of the [import file](#import-files) for the [UBKG-JKG](/ubkg-jkg) version of the [UBKG system](#ubkg-system).

## Knowledge Graph (database)
A knowledge graph is a representation of information characterized by the [relationships](#relationship) between a set of [entities](#entity). 
Whereas relational databases (RDBMS) organize information into tables, rows, and fields, knowledge graph databases organize information into [nodes](#node) and [edges](#edge).

In a strict knowledge graph, properties of entities and relationships are also represented by assertions, unlike a [property graph](#property-graph).

## License key
A string (such as a UUID) that allows the presenting user access to licensed content.

## MetamorphoSys
The application provided as part of the UMLS that builds a [UMLS distribution](#umls-distribution).

## Mint
When a [UBKG translation workflow](#../../system#translation-workflows) creates a new [CUI](#concept-unique-identifier-cui) for a [code](#code) that does not have a [cross-reference](#cross-reference) to a UMLS CUI.

## NCBO
The National Center for Biomedical Ontology (NCBO) maintains [BioPortal](https://bioportal.bioontology.org/), a repository of biomedical ontologies.

## neo4j
The UBKG database is deployed in instances of the [neo4j](https://neo4j.com/) graph data platform. “A neo4j” or “the neo4j” is equivalent to “an instance of the UBKG database hosted in a neo4j server”.

## Node
A synonym for [entity](#entity). 

Nodes are defined in a [node file](#node-file) and represented as node objects in the UBKG database.

## Node file
A node file describes [entities](#entity) used by a source in its [assertions](#assertion).
Node files should be in [Edge/Node format](#edgenode-format)

## Ontology
For the purposes of the UBKG, an ontology is the representation of a set of [entities](#entity) and the [relationships](#relationship) between them. 

## Ontology CSVs
In the UBKG-CSV version of the UBKG system, the [UBKG import files](#import-files) are in the form of 12 CSV files. The format of the ontology 
CSVs are optimized for import into neo4j via the neo4-admin's CLI function.

## OLS 
The Ontology Lookup Service [OLS](https://www.ebi.ac.uk/ols/index) is a repository of biomedical [ontologies](#ontology). The OLS allows for searches of relationship properties, including those from the [Relationship Ontology](#relationship-ontology-ro).

## OBO Foundry
The Open Biological and Biomedical Ontology Foundry [OBO](https://obofoundry.org/) is a community that maintains a set of “interoperable ontologies for the biomedical sciences”, as well as a set of [principles](https://obofoundry.org/principles/fp-000-summary.html)–i.e., best practices and standards for representing ontologies in OWL.

## OBO Principles
[Guidelines](https://obofoundry.org/principles/fp-000-summary.html) that the [OBO Foundry](#obo-foundry) recommends for [OWL files](#owl-files). 
Of particular relevance to the UBKG is [OBO Principle 3](https://obofoundry.org/principles/fp-003-uris.html), which recommends the use of [IRIs](#iri) for namespaces.

## OWL files
The **Web Ontology Language** [OWL](https://www.w3.org/OWL/) is a language for representing [ontologies](#ontology) in a standard format that can be interpreted by software applications. 
Biomedical ontologies can be published as OWL files in reference sites such as the [NCBO BioPortal](#ncbo) and the [OBO Foundry](#obo-foundry).

## Predicate
Synonym for [relationship](#relationship) used in source [edge files](#edge-file).

## Preferred term (pref_term)
The recognized [term](#term) for a code or concept. The UMLS uses _pref_term_ to identify the preferred term of a Concept.

## Property graph
A property graph database is related to a [knowledge graph database](#knowledge-graph-database) in that a property graph database also models relationships between entities. 
A property graph database differs from a knowledge graph database in that properties of the entities and relationships of the graph can be assigned directly to the entities or relationships, instead of needing to be represented as assertions.

## Relationship
A relationship can be: 
* an association between two [entities](#entity) in a [source](#source), such as an ontology.
* a link between two node objects in a UBKG database. (In neo4j, a relationship is often described as a _rel_.)

### Types of relationships
#### Ontological
Most of the relationships in biomedical ontologies are one of two types, similar to the [UMLS](https://pmc.ncbi.nlm.nih.gov/articles/PMC308795/#sec1):

##### hierarchical
A hierarchical (or _taxonomic_) relationship links entities of different scope. 
For example, the **_isa_** relationship is hierarchical in the assertion
**UBERON:0015458** (_mediastinal fat pad_) _**isa**_ **UBERON:0003593** (_fat pad_)

##### associative 
An associative (non-hierarchical) relationship describes a non-hierarchical functional link between two entities.
An example is the **_located_in_** relationship in the assertion
**UBERON:0018395** (_cardiac baroreceptor_) **_located_in_** **UBERON:0000948** (_heart_)

#### Graph (UBKG-CSV)
The nodes of a UBKG database in the UBKG-CSV architecture can have a variety of other relationships that represent node properties in a [concept subgraph](#concept-subgraph).

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

* [UBKG-CSV](../../ubkg-csv) represents semantic types as distinct Semantic Type nodes, linked to Concept nodes via relationships.
* [UBKG-JKG](../../ubkg-jkg) represents semantic types as node labels on Concept nodes.

## Source
A collection of [assertions](#assertion) maintained by a [steward](#steward). Also known as a _source vocabulary_.

### Source types
Types of sources include:
1. **Ontology** data, such as that extracted from OWL files published in sources such as the NCBO BioPortal or the OBO Foundry.
2. **Reference** data extracted from public sources such as UniProtKB.
3. **Result** Summarized experimental result data 

### Source forms
Forms of assertion sources include:
* [OWL files](#owl-files)
* databases
* [vocabularies](#vocabulary)
* [source files](#source-files)

## Source files
A set of two files that describe the [assertions](#assertion) of a [source](#source) that is to be integrated into the UBKG. 
The source files are the [edge file](#edge-file) and the [node file](#node-file).

## Steward
Authority that maintains a [source](#source).

Types of stewards include:

* ontology authorities (e.g., Uberon)
* reference database publishers (e.g. UniProt)
* laboratories (e.g., the Jackson Lab)

## Term
A short text descriptor for a [code](#code) in an [source](#source). For example, a term for code 64033007 in SNOMED_CT is “kidney”.

## Term Type
A term category from the UMLS. Term types include _Preferred_Term_ (PT) and _Synonym_ (SY). 

## Translator script
In a UBKG ETL workflow, a translator is a [framework](#framework) that 
* extracts assertion [triples](#triple) from a non-UMLS source 
* writes assertion triples into files in [Edge/Node format](#edgenode-format)

## Triple
A _triple_ is the recognized form of an [assertion](#assertion) in a source [edge file](#edge-file).

A triple uses the format
**subject** _predicate_	**object**

where
* **subject** and **object** are both [entities](#entity) (nodes). 
* _predicate_ is a [relationship](#relationship) (edge).

## Turnkey distribution
A [UBKG distribution](#ubkg-distribution) in the form of a Zip archive file. The distribution contains:
* a Bash Shell script that builds a local Docker container
* files that will become the external bind mount of the local Docker container
* a configuration file

A turnkey distribution requires a few simple steps to build a local containerized instance of UBKG.

## UBKG Distribution
An archive file that can be used to build an instance of UBKG.

Distributions of known [implementations](/about/implementations) are available on the [UBKG Download site](#ubkg-download-site).

### Zip distributions
Implementations of [UBKG-CSV](/ubkg-csv) and [UBKG-JKG](/ubkg-jkg) are distributed in the form of Zip archive files. 
Types of Zip distributions include:
* a **turnkey distribution** that build a local Docker container running an instance of neo4j populated with a UBKG database
* a **import file distribtion** that contains the [import files](#import-files) that can be used to build an instance of neo4j populated with a UBKG database
### neo4j database dumps
The [Petagraph implementation of UBKG](/about/implementations/#petagraph) is distributed as a neo4j dump file.

## UBKG Download site
The University of Pittsburgh DBMI maintains a [public site](https://ubkg-downloads.xconsortia.org/) from which to obtain [UBKG distributions](#ubkg-distribution).

Users must have a [UMLS user license](https://uts.nlm.nih.gov/uts/?_gl=1*bpmx4o*_ga*MTc3MTg2Nzg2MS4xNzgxNTMwMDgx*_ga_P1FPTH9PL4*czE3OTU1MzIxMTkkbzg1JGcwJHQxNzk1NTMyMTE5JGo2MCRsMCRoMA..*_ga_7147EPK006*czE3OTU1MzIxMTkkbzg1JGcwJHQxNzk1NTMyMTE5JGo2MCRsMCRoMA..) to download distributions from the site.

## UBKG Implementation
A "standard" [UBKG context](#context).

## UBKG System
The [UBKG System](../system) comprises a set of components that support the construction, deployment, and use of a UBKG knowledge graph database.

## UMLS
The Unified Medical Language System [(UMLS)](https://www.nlm.nih.gov/research/umls/index.html) consolidates a number of different biomedical [ontologies](#ontology), [vocabularies](#vocabulary), and standards. 

## UMLS distribution
A subset of files exported from [MetamorphoSys](#metamorphosys) that correspond to the [Metathesaurus](https://www.nlm.nih.gov/research/umls/knowledge_sources/metathesaurus/index.html) and the [Semantic Network](https://www.nlm.nih.gov/research/umls/knowledge_sources/semantic_network/index.html).

## Vocabulary
For the purposes of the UBKG, _vocabulary_ is a generic term to describe an organization of [assertions](#assertion) from a [source](#source). 

## Workflow
In a [UBKG System](#ubkg-system), a workflow is a set of tasks executed in a specific order that employ [frameworks](#framework).
