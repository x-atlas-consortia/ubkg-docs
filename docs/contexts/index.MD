---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG) 
# Source Contexts

---

The **source context**  for an instance of the UBKG describes a collection of sets of assertions, each of which is identified by SAB.

### UMLS source context (UMLS-Graph)
The UMLS context includes sets of assertions obtained from [over 100 vocabularies](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/index.html) organized by the UMLS, including
- SNOMEDCT_US
- ICD10
- LOINC
- HGNC


### UBKG base context (UMLS plus)
The UBKG base context appends to the UMLS context assertions from a number of other standard biomedical ontologies and data sources. 
The UBKG base context includes assertions from the following SABs:

SAB | Description
--- | ---
[UBERON](https://bioportal.bioontology.org/ontologies/UBERON) | Uber Anatomy Ontology
[PATO](https://bioportal.bioontology.org/ontologies/PATO) | Phenotypic Quality Ontology
[CL](https://bioportal.bioontology.org/ontologies/CL) | Cell Ontology
[DOID](https://bioportal.bioontology.org/ontologies/DOID) | Human Disease Ontology
[CCF](https://bioportal.bioontology.org/ontologies/CCF)|Human Reference Atlas Common Coordinate Framework Ontology
[OBI](https://bioportal.bioontology.org/ontologies/OBI)| Ontology for Biomedical Investigations
[OBIB](https://bioportal.bioontology.org/ontologies/OBIB) | Ontology for Biobanking
[EDAM](https://bioportal.bioontology.org/ontologies/EDAM) | EDAM
[HSAPDV](https://bioportal.bioontology.org/ontologies/HSAPDV) | Human Developmental Stages Ontology
[SBO](https://bioportal.bioontology.org/ontologies/SBO) | Systems Biology Ontology
[MI](https://bioportal.bioontology.org/ontologies/MI) |Molecular Interactions
[CHEBI](https://bioportal.bioontology.org/ontologies/CHEBI) | Chemical Entities of Biological Interest Ontology
[MP](https://bioportal.bioontology.org/ontologies/MP) | Mammalian Phenotype Ontology
[ORDO](https://bioportal.bioontology.org/ontologies/ORDO) | Orphan Rare Disease Ontology
[UNIPROTKB](https://www.uniprot.org/uniprotkb/?query=*)|Protein-gene relationships from UniProtKB
[UO](https://bioportal.bioontology.org/ontologies/UO)|Units of Measurement Ontology
[MONDO](https://bioportal.bioontology.org/ontologies/MONDO)|MONDO Disease Ontology
[EFO](https://bioportal.bioontology.org/ontologies/EFO)|Experimental Factor Ontology
[AZ](https://azimuth.hubmapconsortium.org/)|Azimuth cell annotations mapped to Cell Ontology terms

### HuBMAP/SenNet context
The HuBMAP/SenNet context appends to the UBKG base set assertions from the following SABs:

SAB | Description
--- | ---
[HRAVS](https://bioportal.bioontology.org/ontologies/HRAVS) | Human Reference Atlas Value Set
[HUBMAP](https://hubmapconsortium.org/)|the application ontology supporting the infrastructure of the HuBMAP Consortium
[SENNET](https://sennetconsortium.org/)|the application ontology supporting the infrastructure of the SenNet Consortium

### Data Distillery context
The Data Distillery context appends to the UBKG base set assertions to support participants in [Data Distillery](https://commonfund.nih.gov/dataecosystem/highlights), a project of the National Institute of Health's [Common Fund Data Ecosystem](https://commonfund.nih.gov/dataecosystem) (CFDE). SABs include:

| Data Coordinating Center                                                                                           | SAB                                                         | Description                             |
|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------|
| [4DNucleome](https://www.4dnucleome.org/)                                                                          |                                                             |                                         |
| [External RNA Controls Consortium (ERCC)](https://www.nist.gov/programs-projects/external-rna-controls-consortium) |                                                             |                                         |
| [GlyGen](https://www.glygen.org/)                                                                                  | [FALDO](https://bioportal.bioontology.org/ontologies/FALDO) | Feature Annotation Description Ontology |
|                                                                                                                    | [UNIPROT](https://ftp.uniprot.org/pub/databases/uniprot/)   | Universal Protein Resource              | 
|                                                                                                                    | [GLYCORDF](https://github.com/glycoinfo/GlycoRDF)           | Glycomics                               |
|                                                                                                                    | [GLYCOCOO](https://github.com/glycoinfo/GlycoCoO)           | Glycoconjugate                          |
| [Genotype Tissue Expression (GTEx](https://gtexportal.org/home/)                                                   | GTEX_COEXP                                                  |                                         |
|                                                                                                                    | GTEX_EQTL                                                   |                                         |
|                                                                                                                    | GTEX_EXP                                                    |                                         |
| [Human BioMolecular Atlas Program (HuBMAP) ](https://hubmapconsortium.org/)                                        |                                                             |                                         |
| [Illuminating the Druggable Genome (IDG)](https://commonfund.nih.gov/idg)                                          | IDG                                                         |                                         |
| [Gabriella Miller Kids First](https://commonfund.nih.gov/KidsFirst)                                                |                                                             |                                         |
| [Library of Integrated Network-Based Cellular Signatures (LINCS)](https://commonfund.nih.gov/LINCS/)               |                                                             |                                         |
| [Molecular Transducers of Physical Activity Consortium (MoTrPAC)](https://commonfund.nih.gov/MolecularTransducers) |                                                             |                                         |
| [Metabolomics Workbench (MW)](https://commonfund.nih.gov/metabolomics/)                                            |                                                             |                                         |
| [Stimulating Peripheral Activity to Relieve Conditions (SPARC)](https://commonfund.nih.gov/Sparc/)                 |                                                             |                                         |

