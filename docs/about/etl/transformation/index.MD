---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# UBKG Extraction, Transformation, and Load (ETL): Transformation
---

The source data for the UBKG varies considerably. ETL workflows must 
* standardize representation of entity codes
* standardize representation of relationship predicates
* address issues of data quality

# Code standardization 
---

In the UBKG, the colon is a reserved character, used to delimit SAB from code in the identifier of a code.

## UMLS codes
A small number of vocabularies from the UMLS have default code formats that either include the name of the vocabulary 
in the code or contain a colon. These vocabularies and their formats include:

| SAB                 | default format             |
|---------------------|----------------------------|
| HGNC                | HGNC HGNC:x                |
| GO                  | GO GO:x                    |
| HPO                 | HPO HP:x                   |
| HCPCS (Level codes) | HCPCS Level n: Exxx-E-xxxx |

UBKG ETL framework scripts reformat codes from
the UMLS to the [CURIE](/about/glossary/#curie) format _SAB:CODE_. HPO codes are standardized to **HP** as the SAB.

## non-UMLS codes
ETL workflows standardize code identifiers to the CURIE format (_SAB:CODE_).

# Relationship standardization
---

ETL workflows standardize labels used for relationships.
## neo4j format
To eliminate the need for backticks in Cypher queries, ETL workflows format relationship labels as follows:
* Label strings contain only alphanumeric characters or the underscore.
* Labels do not start with digits.

## Inverse relationships for non-UMLS sources
The UMLS uses [bidirectional links](/about/glossary/#bidirectional-link) between concepts in which each relationship has an [inverse](/about/glossary#inverse-relationship).
The [edge files](/about/glossary/#edge-file) of non-UMLS sources, in contrast, only specify relationships in one direction.

### UBKG-CSV
In the UBKG-CSV version of the UBKG System, ETL workflows establish bidirectional links between concepts by 
defining inverse relationships. ETL workflows use the [Relations Ontology](/about/glossary/#relationship-ontology-ro) 
to identify labels for inverse relationships.

### UBKG-JKG
The UBKG-JKG version of the UBKG System does not define inverse relationships for concepts from non-UMLS SABs.

# Synonym standardization
---
UBKG-JKG ETL workflows standardize term synonyms for nodes to remove special characters.

# Code relationships
---

## Equivalence algorithm
In the UBKG [operational model](/about/models/#operational-model), each [code](/about/glossary/#code) is linked 
to at least one [concept](/about/glossary/#concept).
ETL workflows apply an [equivalence algorithm](#/about/glossary/#equivalence) to [nodes](/about/glossary/#node) in the 
[node file](/about/glossary/#node-file) to identify and rank the [cross-references](/about/glossary/#cross-reference) for nodes.

The best explanation of the equivalence algorithm can be found in documentation for the
[UBKG-JKG](/ubkg-jkg) version of the UBKG System. The documenation is [here](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/UBKG-JKG%20equivalence%20algorithm.md#equivalence) repository.

## Assignment algorithm
After identifying the concepts that _could possibly_ have a code link with a node's code, ETL workflows 
apply an [assignment algorithm](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/UBKG-JKG%20equivalence%20algorithm.md#assigned-concept-assignment) to identify the node's [assigned concept](/about/glossary/#assigned-concept)--i.e., 
the single concept that _will_ have a code link with the node's code.

The intent of the assigned algorithm is to mitigate the risk of Cartesian duplication in Cypher queries that link codes to concepts.

The result of the assignment algorithm differs based on the version of the UBKG system.
### UBKG-CSV
In a UBKG-CSV instance, the assigned concept is identified in the [concept subgraph](/about/glossary/#concept-subgraph).
Term nodes that link to a Code node have a _CUI_ property that identifies the assigned concept.

### UBKG-JKG
In a UBKG-JKG instance, only the assigned concept has CODE relationships with Term nodes.

# Concept identifiers
If a node's code does not have a [cross-reference](/about/glossary/#cross-reference), the ETL workflow will [mint](/about/glossary/#mint) a new concept identifier that corresponds
to the code. The format of the minted concept identifier depends on the version of the UBKG system:
* In UBKG-CSV, the format is _CUI_ _code_--i.e., the minted identifier has a _CUI_ prefix.
* In UBKG-JKG, the format of a minted identifier is identical to the code.

# Data Quality
In addition to standardizing codes, relationships, and synonyms, ETL workflows resolve issues of data quality in 
both UMLS and non-UMLS sources.

### Self-referential edges
ETL workflows remove self-referential edges--assertions that start and end with the same concept.
The [ubkg-jkg-generation repository](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/Self-referential%20edges.md) explains self-referential edges.

### Obsolete UMLS CUIs
As the UMLS evolves, concepts become obsolete.
The [UBKG-JKG ETL workflows](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/Obsolete%20Concepts.md) do not reify obsolete UMLS CUIs; instead, if a code's default assignment is to an obsolete CUI,
the workflow will instead mint a new concept identifier.
