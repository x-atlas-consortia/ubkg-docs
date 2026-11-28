---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG)
# UBKG-CSV Concept Subgraph Model

---

In the UBKG [operational model](../../about/models/#operational-model), an idea in the UBKG can be considered on 
two levels of knowledge:
+ _generally_ in terms of a [concept](../../about/glossary/#concept) (e.g., _cell_)
+ _specifically_ in terms of how the idea is encoded in a particular [source](../../about/glossary/#source) (e.g., code **4421005** in the SNOMEDCT_US vocabulary, which is part of the UMLS content)

The UBKG supports both levels of knowledge by representing each concept with a _concept subgraph_ that associates the concept with 
the [equivalent](../../about/glossary#equivalence-synonymy) [encodings](../../about/glossary/#encoding) of different data sources.

A concept subgraph thus represents both a concept and all the ways that the concept can be represented in the UBKG.
Because the UBKG-CSV represents some properties of concepts and codes as nodes, a concept subgraph
will include "property nodes".

The following image illustrates the general form of a concept subgraph. 
The image illustrates the encoding of a 
concept in a single data source for clarity.

<img src="../../images/ubkg-csv/concept_subgraph.png" alt="Relationships in different sources">

A concept subgraph features both nodes and edges (relationships).

## Nodes (entities) of a concept subgraph
### Concept node
A **Concept** node is the originating node of a concept’s subgraph. 

Each Concept node has a property representing the _Concept Unique Identifier_ (CUI) for the concept.
CUIs for concepts imported from the UMLS are alphanumeric strings starting with “C”–e.g., _C007634_.
If a code from a non-UMLS data source cannot be associated with a UMLS concept, the UBKG generation framework will 
create a Concept node for the code with a CUI that has format _Code in vocabulary_ CUI–e.g., **SNOMEDCT_US:4421005 CUI**.

### Code node
A **Code** node represents the codification of a concept in a data source. For example, the SNOMEDCT_US vocabulary uses 
code **4421005** to represent the concept of _cell_; 
the associated concept has CUI **C007634**. 

Each Code node has the following properties:
+ **SAB** - an identifier for the data source, such as a vocabulary, ontology, or custom source. The acronym SAB is borrowed from the UMLS _Source ABbreviation_. The UMLS defines SABs for the data sources that it contains; the UBKG defines custom SABs for non-UMLS data sources.
+ **CODE** - the code in the data source
+ **CodeId** - the combination of SAB and CODE, formatted as SAB:CODE.

### Term node
A **Term** node represents a term that can be associated with either a code or concept.
Both Code nodes and Concept nodes can have multiple terms associated with them–-
e.g., preferred terms, synonyms, etc.

(_Term_ synonymy is different from the _code_ synonymy, or equivalence.)

The only property of a Term node is **name**.

### Definition node
A **Definition** node represents a definition of a concept. 
Although a source (e.g, a vocabulary) assigns a definition to a code, the UBKG links the Definition node to the 
Concept node associated with the Code node from the source. 

The Definition node has three properties:
+ **ATUI** - the ATtribute Unique Identifier
+ **DEF** – the definition string
+ **SAB** – the source that provided the definition

## Semantic node
Concepts from the UMLS are associated with Semantic nodes. 
Semantic nodes are translations of the [Semantic Network](https://www.nlm.nih.gov/research/umls/knowledge_sources/semantic_network/index.html) types for concepts.

The Semantic node has three properties:
+ **STN**: the “tree number” identifying the semantic type in the Semantic Network’s [isa hierarchy](https://uts.nlm.nih.gov/uts/umls/semantic-network/root)
+ **TUI**:  the Type Unique Identifier for the semantic type
+ **name**: text of the semantic type

# Relationships in the Concept subgraph
A concept subgraph contains relationships; however, the relationships of a concept 
subgraph are different from relationships that are in assertions 
in that they link concepts with the metadata nodes of type **Code**,
**Term**, **Definition**, and **Semantic**.

In each concept subgraph,
+ The Concept node has:
  + a CODE relationship with one or more Code nodes
  + an optional PREF_TERM relationship with a Term node
  + optional DEF relationships with one or more Definition nodes
  + an optional STY relationship with a Semantic node 
+ The Code node has optional relationships with one or more Term nodes

## Term type relationships
In the UMLS, terms are categorized by _term type_: 
e.g., PT (for preferred term); SY (for synonym); etc. 

The UBKG translates term types into relationships (edges). 
For example, in the UMLS, the preferred term for a code is the term 
with term type **PT**; in the UBKG, the preferred term is the Term node 
that has a relationship of **PT** with the code node.

## PT and PREF_TERM relationships
The preferred term for a Code has a term type of PT. 
The preferred term for a Concept has a term type of PREF_TERM. 
A term can be both the PT for a Code and the PREF_TERM for a Concept.

# Business rules of the concept subgraph
## PT_SAB
A number of non-UMLS sources define relationships between entities in another source–e.g., 
UBERON defines relationships between entities in PATO, CL, etc. 

A source may define a preferred term for a code in another source 
that is different from the preferred term used by the source that 
is the _steward_ of the code: e.g., UBERON might define the 
preferred term for a PATO code as “cells” instead of “cell”.

The UBKG reserves the PT (preferred term) relationship for the 
preferred term for a code defined by the steward of the code: 
e.g., only UBERON can define the preferred term for a UBERON code. 

If a source defines a preferred term for a code from another source and 
either the other source had not been ingested into the UBKG prior to the 
ingestion of the source or the preferred term for the code in the 
source is different than that defined by the other source, 
the UBKG assigns that Term a relationship of PT_SAB, 
where SAB is for the source that is not the steward of the code.

## Preferred Concept
Ideally, each Code node would associate with only one 
Concept node in the UBKG. However, some codes are associated with 
multiple concepts--both in the data exported from the UMLS and 
in non-UMLS sources. 

The UBKG associates each Code with all Concepts that are specified by 
data sources.

However, to mitigate duplicate references, the UBKG attempts to 
find a single preferred concept for each code. 
The UBKG identifies the preferred concept for a code by means of the 
CUI property of the relationships between the Code node and its preferred term node: the CUI property of the Term with relationship PT is the 
CUI of the preferred concept.

# Assertion (Concept-Concept Relationship) model

In the UBKG, the assertions that data sources state between codes 
are represented in the UBKG as relationships between the concepts 
with which codes associate. 

The UBKG represents each assertion that a data source makes 
involving a code with a relationship that involves the Concept node 
of the code’s associated concept subgraph. 
The original code from the data source can be resolved from the 
code’s concept subgraph.

## Inverse assertions and the Relations Ontology (RO)
The UBKG represents each assertion from a data source as a pair of 
bi-directional relationships between two concepts:
+ The _forward relationship_ represents the predicate of the original assertion, between the subject and object.
+ The _inverse relationship_ represents the predicate from the object of the original assertion to the subject.

The UBKG derives inverse assertions when importing from data sources; 
in fact, the edge file from a data source should only contain forward assertions. 

When deriving inverse assertions, the UBKG refers to the [Relations Ontology](https://www.ebi.ac.uk/ols4/ontologies/ro), 
which defines a large number of bidirectional pairs of assertion predicates. 

+ If the term for an assertion matches a relationship in RO, the UBKG will use the relationship’s corresponding inverse to derive the inverse assertion. For example, the inverse relationship for **[has_part](https://www.ebi.ac.uk/ols4/ontologies/ro/properties/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FBFO_0000051)** in RO is **part_of**.
+ If the predicate of an assertion cannot be found in RO, the UBKG generates the default inverse assertion by prepending **inverse_** to the forward assertion.

In a previous example, the concept of _cat_ was the subject of two assertions–**_isa_** and **_chases_**. 
The UBKG might represent the bidirectional sets of assertions as follows:

<img src="../../images/ubkg-csv/bidirectional_assertions.png" alt="Relationships in different sources">

## Concept subgraph properties
The majority of the properties in the UBKG support concept subgraphs. These node and edge
properties were discussed previously:

| Element                 | Property | Description                   |
|-------------------------|----------|-------------------------------|
| Concept node            | CUI      | Concept Unique Identifier     |
| Code node               | SAB      | Source ABbreviation           |
|                         | CODE     | Code in the SAB               |
|                         | CodeID   | Concatenation of SAB and CODE |
| Term node               | name     | Text of term                  |
| Definition node         | SAB      | Source ABbreviation           |
|                         | DEF      | Text of definition            |
|                         | ATUI     | Attribute Unique Identifier   |
| Semantic node           | STN      | Semantic Tree Number          |
|                         | TUI      | Type Unique Identifier        |
|                         | name     | Text for semantic type        |
| Code:Term relationships | CUI      | Concept Unique Identifier     |

###  Node properties

The UBKG generation framework allows data sources to define the following properties 
for a node in the node file:
+ **value**
+ **lowerbound**
+ **upperbound**
+ **unit**

### Edge properties
The UBKG generation framework allows data sources to define a property named **evidence_class** for an assertion in the edge file.

### Assertion relationship properties
When the UBKG creates an assertion relationship between concepts, it assigns to the **SAB** property 
of the relationship the SAB for the data source. For example, the _**isa**_ relationships asserted by the 
UBERON ontology have the **SAB** value UBERON.

