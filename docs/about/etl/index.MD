---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# UBKG Extraction, Transformation, and Load (ETL)

---

The [UBKG system](../system) is used to build an instance of UBKG from a variety of biomedical sources.

The _Extraction, Translation, and Load_ (ETL) process used to build the [import files](../system#import-files) 
for a UBKG instance depends on
the version of the UBKG architecture. 

ETL information common to both architectures is discussed here.

Information specific to a version of the UBKG system is discussed in the architecture detail pages:
* [UBKG-CSV](../../../ubkg-csv)
* [UBKG-JKG](../../../ubkg-jkg)

# Extraction
The U
The biomedical assertion data used to build an instance of the UBKG
comes from a variety of sources, including:
* the [UMLS Metathesaurus](https://uts.nlm.nih.gov/uts/umls/home)
* the [UMLS Semantic Network](https://www.nlm.nih.gov/research/umls/knowledge_sources/semantic_network/index.html)
* [ontology](../../about/glossary#ontology) files available from:
   * registries such as [OBO Foundry](https://obofoundry.org/
) and [NCBO BioPortal](https://bioportal.bioontology.org/)
   * ontology files available from GitHub repositories
* exports from public data sources, such as [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/), [UniProt](https://www.uniprot.org/), and [GENCODE](https://www.gencodegenes.org/)
* custom data sources

## Source Formats
### UMLS Source
The National Library of Medicine provides biannual releases of UMLS content.
The _MetamorphoSys_ application that is part of each release supports extraction of content from
release files.

Source [translation workflows](../system/#translation-workflows) extract information from UMLS release files to build the initial
version of UBKG [import files](../system/#import-files).

Each version of the UBKG system extracts data from the UMLS differently. 
For details on the extraction process used by each version of the UBKG architecture, consult the architecture detail pages.

### non-UMLS Source
After building the initial version of a set of import files from the UMLS, 
UBKG translation workflows extract data from non-UMLS sources and append data to the import file. 

#### Source files
The UBKG translation workflows expect non-UMLS source assertion data to conform to accepted [formats and content](format/).  

# Contexts
A _UBKG context_ corresponds to the set of sources used to build an instance of a UBKG database. 

## Generation order
A source, such as an ontology, both identifies entities and defines relatinships between entities.
In general, a source may identify entities that are managed by other sources--e.g., UBERON asserts relationships that involve
codes from other ontologies like PATO and GO.

Because the assertions of one source may use entities from another source, the order of import for sources 
is important. The sources of a context should be imported in a particular order to maximize the 
likelihood that the entities to which a source refers in assertions have already been imported. 

For example, because UBERON assertions refer to PATO codes, PATO should be imported before UBERON.

The generation order for the reference implementations of UBKG is described [here](https://github.com/x-atlas-consortia/ubkg-jkg-generation/blob/main/docs/contexts.md).

#### CodeID standardization in the UMLS context

In the UBKG, the colon is a reserved character, used to delimit SAB from code in a CodeID property of a Code node.

A small number of vocabularies from the UMLS have default code formats that either include the name of the vocabulary 
in the code or contain a colon. These vocabularies and their formats include:

| SAB                 | default format             |
|---------------------|----------------------------|
| HGNC                | HGNC HGNC:x                |
| GO                  | GO GO:x                    |
| HPO                 | HPO HP:x                   |
| HCPCS (Level codes) | HCPCS Level n: Exxx-E-xxxx |

UBKG ETL framework scripts reformat codes from
the UMLS to the format _SAB:CODE_. HPO codes are standardized to **HP** as the SAB.




## Transformation
### Entities
### Concept-code associations
#### Equivalence algorithm
#### Assignment algorithm
### Relationships
### Properties
## Data Quality
### Self-referential edges
### Obsolete UMLS CUIs



