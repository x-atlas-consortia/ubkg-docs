---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# UBKG ETL: non-UMLS source Extraction

---
<br>

# Source files
---

Sources that are not part of the UMLS are available via a variety of [formats](../../format).


# Translation workflows
---
Translation workflows for non-UMLS (SAB) sources involve executing [translator scripts](/about/glossary/#translator-scripts) to produce
source files in Edge/Node format.

# Contexts
---

A UBKG [context](/about/glossary/#context) corresponds to the set of sources used to build an instance of a UBKG database. 

# Generation order
---

A source, such as an ontology, both identifies entities and defines relatinships between entities.
In general, a source may identify entities that are managed by other sources--e.g., UBERON asserts relationships that involve
codes from other ontologies like PATO and GO.

Because the assertions of one source may use entities from another source, the order of import for sources 
is important. The sources of a context should be imported in a particular order to maximize the 
likelihood that the entities to which a source refers in assertions have already been imported. 

For example, because UBERON assertions refer to PATO codes, PATO should be imported before UBERON.

The generation order for the reference implementations of UBKG is described [here](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/contexts.md).




