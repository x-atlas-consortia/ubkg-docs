---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# UBKG Extraction, Transformation, and Load (ETL): Load

---

The product of UBKG ETL workflows is one or more [import files](/about/glossary/#import-files).

The form of import file depends on the version of the UBKG system.

## UBKG-CSV
The import files of the UBKG-CSV are a set of 12 [ontology CSVs](/about/glossary/#ontology-csvs).
Ontology CSV files are optimized for the **neo4j-admin**'s import command.

## UBKG-JKG
The import file of the UBKG-JKG is a JSON file that comforms to the [JKG Schema](https://github.com/x-atlas-consortia/json-knowledge-graph).
The JKG JSON file is optimized for an import into neo4j via APOC.
