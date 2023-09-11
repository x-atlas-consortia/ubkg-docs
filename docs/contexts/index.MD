---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG) 
# Source Contexts

---

The **source context** for an instance of the UBKG (or **UBKG context**) describes a collection of sets of assertions, each of which is identified by SAB.

A SAB can correspond to one of the following types of sets of assertions:
1. **Ontology** data, such as that extracted from OWL files published in sources such as the NCBO BioPortal or the OBO Foundry.
2. **Reference** data extracted from public sources such as UniProtKB.
3. **Result** Summarized experimental result data obtained from entities such as NIH-supported laboratories.


### UMLS source context (UMLS-Graph)
The UMLS context includes sets of assertions obtained from [over 100 vocabularies](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/index.html) organized by the UMLS, including
- SNOMEDCT_US
- ICD10
- LOINC
- HGNC

All of these assertions are considered as being from ontologies.

#### CodeID standardization

In the UBKG, the colon is a reserved character, used to delimit SAB from code in a CodeID property of a Code node.

A small number of  vocabularies from the UMLS have default code formats that either include the name of the vocabulary 
in the code or contain a colon. These vocabularies and their formats include:

| SAB                 | default format             |
|---------------------|----------------------------|
| HGNC                | HGNC HGNC:x                |
| GO                  | GO GO:x                    |
| HPO                 | HPO HP:x                   |
| HCPCS (Level codes) | HCPCS Level n: Exxx-E-xxxx |

Executing the generation script with the SAB argument of UMLS reformats codes from
the UMLS to the format SAB:CODE. 


### non-UMLS Source Platforms
Sources of data for the UBKG (other than the UMLS base) include:

1. [OBO Foundry](https://obofoundry.org/)
2. [NCBO BioPortal](https://bioportal.bioontology.org/)
3. Sites maintained by stewards, including GitHub repositories, FTP sites, etc.
4. Globus (for sources specific to Data Distillery)
5. Spreadsheets in the custom SimpleKnowledge Editor format, stored in Google Drive


### UBKG base context (UMLS plus)
The UBKG base context appends to the UMLS context assertions from a number of other standard biomedical ontologies and data sources. 
The UBKG base context includes assertions from the following SABs:

| SAB                                                        | Description                                            | Type of data | platform                             |
|------------------------------------------------------------|--------------------------------------------------------|--------------|--------------------------------------|
| UMLS                                                       | Standarizes format of CodeID                           | ontlogy      | DBMI Neptune                         |
| [UBERON](https://obofoundry.org/ontology/uberon.html)      | Uber Anatomy Ontology                                  | ontology     | OBO Foundry                          |
| [PATO](https://obofoundry.org/ontology/pato.html)          | Phenotypic Quality Ontology                            | ontology     | OBO Foundry                          |
| [CL](https://obofoundry.org/ontology/cl.html)              | Cell Ontology                                          | ontology     | OBO Foundry                          |
| [DOID](https://obofoundry.org/ontology/doid.html)          | Human Disease Ontology                                 | ontology     | OBO Foundry                          |
| [OBI](https://obofoundry.org/ontology/obi.html)            | Ontology for Biomedical Investigations                 | ontology     | OBO Foundry                          |
| [OBIB](https://obofoundry.org/ontology/obib.html)          | Ontology for Biobanking                                | ontology     | NCBO BioPortal                       |
| [EDAM](http://edamontology.org/page)                       | EDAM                                                   | ontology     | EDAM                                 |
| [HSAPDV](https://obofoundry.org/ontology/hsapdv.html)      | Human Developmental Stages Ontology                    | ontology     | OBO Foundry                          |
| [SBO](https://github.com/EBI-BioModels/SBO)                | Systems Biology Ontology                               | ontology     | SBO                                  |
| [MI](https://obofoundry.org/ontology/mi.html)              | Molecular Interactions                                 | ontology     | OBO Foundry                          |
| [CHEBI](https://obofoundry.org/ontology/chebi.html)        | Chemical Entities of Biological Interest Ontology      | ontology     | OBO Foundry                          |
| [MP](https://obofoundry.org/ontology/mp.html)              | Mammalian Phenotype Ontology                           | ontology     | OBO Foundry                          |
| [ORDO](https://bioportal.bioontology.org/ontologies/ORDO)  | Orphan Rare Disease Ontology                           | ontology     | NCBO BioPortal                       |
| [UNIPROTKB](https://www.uniprot.org/uniprotkb/?query=*)    | Protein-gene relationships from UniProtKB              | reference    | UniProt                              |
| [UO](https://bioportal.bioontology.org/ontologies/UO)      | Units of Measurement Ontology                          | ontology     | NCBO BioPortal                       |
| [MONDO](https://obofoundry.org/ontology/mondo.html)        | MONDO Disease Ontology                                 | ontology     | OBO Foundry                          |
| [EFO](https://bioportal.bioontology.org/ontologies/EFO)    | Experimental Factor Ontology                           | ontology     | NCBO BioPortal                       |
| [AZ](https://azimuth.hubmapconsortium.org/)                | Azimuth cell annotations mapped to Cell Ontology terms | ontology     | Google Drive                         |
| [PGO](https://bioportal.bioontology.org/ontologies/pseudo) | Pseudogene                                             | ontology     | NCBO BioPortal                       |
| GENCODE_ONT                                                | GenCode ontology support (valuesets)                   | ontology     | SimpleKnowledge                      |
| [GENCODE](https://www.gencodegenes.org/)                   | GENCODE annotations and metadata                       | reference    | custom (translation of FTP download) |

### RefSeq gene summaries
A separate script adds summaries of genes from [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/) to the UBKG. This import assumes that GenCode has been ingested.

### HuBMAP/SenNet context
The HuBMAP/SenNet context appends to the UBKG base set assertions from the following SABs:

| SAB                                                         | Description                                                                     | Type of data | platform        |
|-------------------------------------------------------------|---------------------------------------------------------------------------------|--------------|-----------------|
| [HRA](https://humanatlas.io/)                               | Human Reference Atlas                                                           | ontology     | Globus          |
| [HRAVS](https://bioportal.bioontology.org/ontologies/HRAVS) | Human Reference Atlas Value Set                                                 | ontology     | NCBO BioPortal  |
| [HUBMAP](https://hubmapconsortium.org/)                     | the application ontology supporting the infrastructure of the HuBMAP Consortium | ontology     | SimpleKnowledge |
| [SENNET](https://sennetconsortium.org/)                     | the application ontology supporting the infrastructure of the SenNet Consortium | ontology     | SimpleKnowledge |

### Data Distillery context
The Data Distillery context appends to the UBKG base set assertions to support participants in [Data Distillery](https://commonfund.nih.gov/dataecosystem/highlights), a project of the National Institute of Health's [Common Fund Data Ecosystem](https://commonfund.nih.gov/dataecosystem) (CFDE). SABs include:


| Data Coordinating Center / Domain                                                                                  | SAB                                                            | Description                               | Type of data | platform       |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------|--------------|----------------|
| Data Distillery Support Mappings                                                                                   | [CLINVAR](https://www.ncbi.nlm.nih.gov/clinvar/)               | NCBI ClinVar                              | reference    | Globus         |
|                                                                                                                    | [CMAP](https://www.broadinstitute.org/connectivity-map-cmap)   | Connectivity Map                          | reference    | Globus         |
|                                                                                                                    | HPOMP                                                          | HPO-MP mapping                            | reference    | Globus         |
|                                                                                                                    | HGNCHPO                                                        | human genotype - phenotype mapping        | reference    | Globus         |
|                                                                                                                    | HCOPHGNC                                                       | human - mouse orthologs                   | reference    | Globus         |
|                                                                                                                    | HCOPMP                                                         | mouse genotype-phenotype mapping          | reference    | Globus         |
|                                                                                                                    | RATHCOP                                                        | ENSEMBL human to ENSEMBL Rat ortholog     | reference    | Globus         |
|                                                                                                                    | [MSIGDB](https://www.gsea-msigdb.org/gsea/msigdb)              | Molecular Signatures Database             | reference    | Globus         |
|                                                                                                                    | HSCLO                                                          | Chromosome Location Ontology              | ontology     | Globus         |
|                                                                                                                    | GENCODEHSCLO                                                   | GENCODE-HSCLO mapping                     | reference    | Globus         |
| [4DNucleome](https://www.4dnucleome.org/)                                                                          | 4DN                                                            | 4D Nucleome                               | result       | Globus         |
| [External RNA Controls Consortium (ERCC)](https://www.nist.gov/programs-projects/external-rna-controls-consortium) | ERCCRBP                                                        | exRNA RNA Binding Proteins                | result       | Globus         |
|                                                                                                                    | ERCCREG                                                        | Regulatory Elements                       | result       | Globus         |
| [GlyGen](https://www.glygen.org/)                                                                                  | [FALDO](https://bioportal.bioontology.org/ontologies/FALDO)    | Feature Annotation Description Ontology   | ontology     | NCBO BioPortal |
|                                                                                                                    | [UNIPROT](https://ftp.uniprot.org/pub/databases/uniprot/)      | Universal Protein Resource                | ontology     | UniProt FTP    |
|                                                                                                                    | [GLYCORDF](https://github.com/glycoinfo/GlycoRDF)              | Glycomics                                 | ontology     | GitHub         |
|                                                                                                                    | [GLYCOCOO](https://github.com/glycoinfo/GlycoCoO)              | Glycoconjugate                            | ontology     | GitHub         |
|                                                                                                                    | GLYCANS                                                        | Glycans data                              | result       | Globus         |
|                                                                                                                    | PROTEOFORM                                                     | Proteoform                                | result       | Globus         |
| [Genotype Tissue Expression (GTEx](https://gtexportal.org/home/)                                                   | GTEXCOEXP                                                      | Co-expression                             | result       | Globus         |
|                                                                                                                    | GTEXEQTL                                                       | Expression                                | result       | Globus         |
|                                                                                                                    | GTEXEXP                                                        | Expression quantitative trait loci (eQTL) | result       | Globus         |
| [Human BioMolecular Atlas Program (HuBMAP) ](https://hubmapconsortium.org/)                                        | HMAZ                                                           | HuBMAP Azimuth Cell Expression Summary    | result       | Globus         |  
|                                                                                                                    | HMCELL                                                         | HuBMAP Cell Expression Summary            | result       | Globus         |
| [Illuminating the Druggable Genome (IDG)](https://commonfund.nih.gov/idg)                                          | IDGP                                                           | Compound-protein interactions             | result       | Globus         |
|                                                                                                                    | IDGD                                                           | Compound-disease interactions             | result       | Globus         |
| [Gabriella Miller Kids First](https://commonfund.nih.gov/KidsFirst)                                                | KFPT                                                           |                                           | result       | Globus         |
| [Library of Integrated Network-Based Cellular Signatures (LINCS)](https://commonfund.nih.gov/LINCS/)               | LINCS                                                          |                                           | result       | Globus         |
| [Molecular Transducers of Physical Activity Consortium (MoTrPAC)](https://commonfund.nih.gov/MolecularTransducers) | MOTRPAC                                                        |                                           | result       | Globus         |
| [Metabolomics Workbench (MW)](https://commonfund.nih.gov/metabolomics/)                                            | MW                                                             | Cell-metabolite mappings                  | result       | Globus         |
| [Stimulating Peripheral Activity to Relieve Conditions (SPARC)](https://commonfund.nih.gov/Sparc/)                 | [NPO](https://bioportal.bioontology.org/ontologies/NPOKB)      | Neuron Phenotype Ontology                 | ontology     | NCBO BioPortal |
|                                                                                                                    | [NPOSCKAN](https://github.com/SciCrunch/NIF-Ontology/releases) | NPOSCKAN                                  | ontology     | GitHub         |

