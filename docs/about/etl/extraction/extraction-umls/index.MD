---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# UBKG ETL: UMLS Extraction

---
<br>

# Source files
---

## UMLS Distribution files
The [National Library of Medicine](https://www.nlm.nih.gov/?_gl=1*1cxoh1k*_ga*MTc3MTg2Nzg2MS4xNzgxNTMwMDgx*_ga_P1FPTH9PL4*czE3OTU1MzcxMTEkbzg2JGcwJHQxNzk1NTM3MTExJGo2MCRsMCRoMA..*_ga_7147EPK006*czE3OTU1MzcxMTEkbzg2JGcwJHQxNzk1NTM3MTExJGo2MCRsMCRoMA..) provides [biannual releases](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html) of UMLS content.
Each release includes:
* source files of data from the [UMLS Metathesaurus](https://uts.nlm.nih.gov/uts/umls/home) in [Rich Release Format (RRF)](https://www.ncbi.nlm.nih.gov/books/NBK9685/)
* source files of data from the [UMLS Semantic Network](https://www.nlm.nih.gov/research/umls/knowledge_sources/semantic_network/index.html)
* the [MetamorphoSys](https://www.nlm.nih.gov/research/umls/implementation_resources/metamorphosys/help.html) installation application

## RefSeq summaries
The UBKG includes summaries of genes from [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/).


# Extraction of UMLS Distribution data
---

UMLS extraction workflows involve the following steps:
1. Obtain a UMLS release file. 
2. Use MetamorphoSys to build a [UMLS distribution](/about/#umls-distribution).
3. Execute scripts that extract and translate data from UMLS distribution files into UBKG [import files](/about/glossary/#import-files).

## UBKG-CSV

In [UBKG-CSV](/ubkg-csv), the workflow for extracting UMLS distribution data is called the [source framework](https://github.com/x-atlas-consortia/ubkg-etl/tree/main/source_framework).
The source framework leverages an existing workflow that involved a data mart (Neptune) that is maintained by the University of Pittsburgh's DBMI.

UMLS release data is 
* [extracted](https://github.com/x-atlas-consortia/ubkg-etl/blob/main/source_framework/UMLS%20Extraction%20Process.md) using MetamorphoSys
* imported into the Neptune data warehouse
* [exported](https://github.com/x-atlas-consortia/ubkg-etl/blob/main/source_framework/CSV-Extracts.md) from Neptune via SQL queries to a set of [ontology CSVs](/about/glossary/#ontology-csvs)

<img src="https://user-images.githubusercontent.com/10928372/202453373-6e2f73ba-e7ae-4d8f-9ece-31b0b0732a74.jpg" alt="UBKG-CSV source framework">

## UBKG-JKG

In [UBKG-JKG](/ubkg-jkg), the [UMLS extraction workflow](https://github.com/x-atlas-consortia/ubkg-jkg-umls) works directly with UMLS distribution files,
without using the Neptune data mart.

<img src="https://github.com/x-atlas-consortia/ubkg-jkg-umls/blob/main/img_1.png?raw=true" alt="UBKG-JKG UMLS ETL workflow">

# Extraction of RefSeq data
---
The UBKG includes summaries of genes from [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/).

* In UBKG-CSV, a separate script appends information extracted from RefSeq to ontology files.
* In UBKG-JKG, the extract from RefSeq is part of the UMLS extraction workflow.
