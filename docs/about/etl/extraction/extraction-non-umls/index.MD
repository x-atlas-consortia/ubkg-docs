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

# Translation workflows
---
Translation workflows for non-UMLS (SAB) sources involve executing [translator scripts](/about/glossary/#translator-script) to produce
source files in Edge/Node format.

## UBKG-CSV

In [UBKG-CSV](/ubkg-csv), the set of translation workflows for SABs is called the [generation framework](https://github.com/x-atlas-consortia/ubkg-etl/blob/main/generation_framework/README.md).

The **build_csv** script of the generation framework executes _translator scripts_ that
* obtain assertion data from sources
* write to files in [Edge/Node format](/about/glossary/#edgenode-format)

<img src="https://user-images.githubusercontent.com/10928372/202733307-d9a7c76d-8a0a-401f-a0e2-011d8449ac41.jpg" alt="UBKG-CSV SAB ETL workflow">

## UBKG-JKG

In [UBKG-JKG](/ugkg-jkg), the set of translation workflows for SABs is described in the [ubkg-jkg-generation](https://github.com/x-atlas-consortia/ubkg-jkg-generation) repository.

The **sab2jkgen** script calls translator scripts that 
* obtain assertion data from sources
* write to [JKGEN files](/about/glossary/#jkgen)
<img src="https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/img_2.png?raw=true" alt="UBKG-JKG SAB ETL workflow">


