---
layout: default
---
# Unified Biomedical Knowledge Graph 
# Glossary

---

# Scope of this glossary

This is a working glossary, and not a formal or exhaustive terminology.

When the discussion of a term in the glossary refers to another term in the glossary, the other term will be in **_bold italic_**.

---

## Assertion
An assertion establishes a **_relationship_** between two **_entities_**.
For example, one can assert that 

**sky** _has_color_ **blue**

where **sky** and **blue** are entities and _has_color_ is a relationship.

## BioPortal
A repository of biomedical ontologies maintained by [NCBO](https://bioportal.bioontology.org/). 

Although many of the ontologies published in BioPortal follow **_OBO principles_**, compliance is optional.

## Code
The discrete representation of a **_concept_** in a **_source_** **_vocabulary_** or **_ontology_** in the UBKG. 
A code is unique in the UBKG.

For example, both the SNOMED_CT and the NCI Thesaurus vocabularies have different codes to represent the **_concept_** of “kidney”.

## Concept
As with the UMLS, a concept in the UBKG is the discrete representation of an idea, process, characteristic, or item. Examples include:
* "breast cancer"
* "blue"
* "tomography"

A Concept is a type of **_entity_** in the UBKG data model, represented with a type of **_node_** in a UBKG database.

## Concept Unique Identifier (CUI)
A unique identifier for a **_concept_** in the UBKG. For example, the CUI _C0678222_ identifies the "breast cancer" concept in the UMLS.

## Cross-reference (dbxref)
A link between a **_code_** from a **_source_** and another **_entity_**.

Types of cross-references are:
- **concept-code** between a **_code_** in a **_source_** and a **_concept_**. For example, the **_code_** 254838004 (Carcinoma of breast) in SNOMED has a code reference to the **_concept_** with **_CUI_** C0678222.
- **equivalence** between a code in one source and a code in another source. For example, the **code** UBERON:0005047 (mucosa of vocal fold) is cross-referenced to the code FMA:64017 (Mucosa of vocal fold).

## Edge
A synonym for a **_relationship_**, used primarily for **_knowledge graphs_**.

## Encode
To represent a **_concept_** in an **_source_** with a **_code**_. 

## Entity
An entity represents a member of an **_ontology_**. Entities associate with other entities in an ontology via **_relationships_**.

In a **_knowledge graph_** database, an **_entity_** is represented by a **_node_**.

## Equivalence (synonymy)
When multiple codes share a concept-code cross-reference to a concept, the two codes are equivalent, or synonyms, and the two codes
may be described as _equivalence_classes_. 

Equivalence is a fundamental feature of both the UMLS and the UBKG, for it establishes synonymy between sources. 

For example, the concept for "breast cancer"

## Ingest files
A set of files that describe the entities and relationships of an ontology that is to be integrated into the UBKG.

##  Inverse relationship

A **_relationship_** in an **_ontology_** has a direction: it starts with one node and “goes toward” another–e.g., 

(_5'-AMP-activated protein kinase subunit gamma-1_)→**isa**→(_protein_)

A relationship is considered the **inverse** of another relationship if it can be used to link the same nodes of the relationship in the opposite direction. For example, the _inverse_isa_ relationship for a concept can be used to identify those concepts that have an _isa_ relationship with the concept.

(_protein_)←**inverse_isa**←(_5'-AMP-activated protein kinase subunit gamma-1_) 

Inverse relationships can be ambiguously named: for example, the inverse relationship of _has_gene_product_ is not _inverse_has_gene_product_, but _gene_product_of_. To obtain inverse relationships that are ambiguously named, the UBKG refers to the **_RO_**.

## IRI
In an **_OWL file_**, an **_entity_** or a **_relationship_** can be described with an **International Resource Indicator** (IRI). An IRI is a PURL (Permanent Uniform Resource Locator) that refers to a published online resource.

UBKG recognizes entity IRIs in format _OBO PURL_/_ontology identifier___code in ontology_.
For example, the IRI for a protein entity in PR is http://purl.obolibrary.org/obo/PR_Q68D20.

UBKG recognizes relationship IRIs formatted in the same manner as for entities, provided that the OBO PURL is from the **_Relationship Ontology_** (RO)--e.g., http://purl.obolibrary.org/obo/RO_0002160.

## Knowledge Graph (database)
A knowledge graph is a representation of information characterized by the **_relationships_** between a set of **_entities_**. Whereas relational databases organize information into tables, rows, and fields, knowledge graph databases organize information into **_nodes_** (representing entities) and **_edges_** (representing relationships).

## NCBO
The National Center for Biomedical Ontology (NCBO) maintains [BioPortal](https://bioportal.bioontology.org/), a repository of biomedical ontologies.

## neo4j
The UBKG database is deployed in instances of the [neo4j](https://neo4j.com/) graph data platform. “A neo4j” or “the neo4j” is equivalent to “an instance of the UBKG database hosted in a neo4j server”.

## Node
A synonym for an **_entity_**, used primarily in **_knowledge graphs_**.

## Ontology
For the purposes of the UBKG, an ontology is the representation of a set of **_entities_** and the **_relationships_** between them. 

## OLS 
The Ontology Lookup Service [OLS](https://www.ebi.ac.uk/ols/index) is a repository of biomedical **_ontologies_**. The OLS allows for searches of relationship properties (**_relationships_**), including those from the **_RO_**.

## OBO Foundry
The Open Biological and Biomedical Ontology Foundry [OBO](https://obofoundry.org/) is a community that maintains a set of “interoperable ontologies for the biomedical sciences”, as well as a set of [principles](https://obofoundry.org/principles/fp-000-summary.html)–i.e., best practices and standards for representing ontologies in OWL.

Many of the ontologies published in BioPortal follow OBO principles.

## OWL files
The **Web Ontology Language** [OWL](https://www.w3.org/OWL/) is a language for representing **_ontologies_** in a standard format that can be interpreted by software applications. Biomedical ontologies can be published as OWL files in reference sites such as the **_NCBO BioPortal_** and the **_OBO Foundry_**.

## Relationship
A relationship is an association between two **_entities_** in an **_ontology_**.

### Types of relationships
Most of the relationships in biomedical ontologies can be characterized with one of two types:
- _hierarchical_ (e.g., _5'-AMP-activated protein kinase subunit gamma-1_ **isa** _protein_)
- _non-hierarchical_ (e.g., _protein PMS2CL (human)_ **gene_product_of** _PMS2CL gene_)

In a **_knowledge graph_**, a relationship corresponds to an **_edge_** between two **_nodes_**.

## Relationship Ontology (RO)
The Relationship Ontology (RO) is an **_ontology_** of the **_relationships_** that are used in other ontologies–i.e., how relationships themselves relate to one another. 

A relationship between relationships that is important in the UBKG is the **_inverse relationship_**. 

Relationships in RO can be reviewed in a number of ways, including:
- By searching the **_OLS_**
- [this JSON file](https://raw.githubusercontent.com/oborel/obo-relations/master/ro.json)

## Source
A collection of **_assertions_** maintained by an organization.

## SAB
The UBKG adopts the UMLS practice of identifying source ontologies with a **Source Abbreviation** (SAB). Examples of UMLS SABs include SNOMED_CT and UBERON. UBKG uses published acronyms for ontologies when possible–e.g., PATO.

## Term (preferred, synonym)
A usually short text identifier for a **_code_** in an **_ontology**_. For example, a term for code 64033007 in SNOMED_CT is “kidney”.

A term can be a _preferred term_ or a _synonym_.

## Triple
A triple **_asserts_** a **_relationship**_ between two **_entities_** (nodes) in an **_ontology_**.

A triple is in the format
_subject_ _predicate_	_object_

_subject_ and _object_ are both entities (nodes). _predicate_ is a relationship (edge).

## Vocabulary
For the purposes of the UBKG, a vocabulary is similar to an **_ontology_**. Some vocabularies (e.g., SNOMED_CT) are also ontologies.

## UMLS
The Unified Medical Language System [UMLS](https://www.nlm.nih.gov/research/umls/index.html) consolidates a number of different biomedical **_ontologies_**, **_vocabularies_**, and standards. 

The UBKG represents UMLS and other concept data with a set of **_nodes_** and **_edges_**, including nodes for 
- the **_code_** for the concept in its originating ontology
- the **_CUI_** for the code in the UBKG
- **_terms_** for the concept, both for preferred terms and synonyms
- definitions of the concept

![image](https://user-images.githubusercontent.com/10928372/202926462-2075143e-1fcb-476d-adca-b256874c0987.png)

