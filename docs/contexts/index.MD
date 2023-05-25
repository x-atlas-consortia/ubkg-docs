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

### UBKG base context (UMLS plus)
The UBKG base context appends to the UMLS context assertions from a number of other standard biomedical ontologies and data sources. 
The UBKG base context includes assertions from the following SABs:

| SAB                                                           | Description                                                | Type of data |
|---------------------------------------------------------------|------------------------------------------------------------|--------------|
| [UBERON](https://bioportal.bioontology.org/ontologies/UBERON) | Uber Anatomy Ontology                                      | ontology     |
| [PATO](https://bioportal.bioontology.org/ontologies/PATO)     | Phenotypic Quality Ontology                                | ontology     |
| [CL](https://bioportal.bioontology.org/ontologies/CL)         | Cell Ontology                                              | ontology     |
| [DOID](https://bioportal.bioontology.org/ontologies/DOID)     | Human Disease Ontology                                     | ontology     |
| [CCF](https://bioportal.bioontology.org/ontologies/CCF)       | Human Reference Atlas Common Coordinate Framework Ontology | ontology     |
| [OBI](https://bioportal.bioontology.org/ontologies/OBI)       | Ontology for Biomedical Investigations                     | ontology     |
| [OBIB](https://bioportal.bioontology.org/ontologies/OBIB)     | Ontology for Biobanking                                    | ontology     |
| [EDAM](https://bioportal.bioontology.org/ontologies/EDAM)     | EDAM                                                       | ontology     |
| [HSAPDV](https://bioportal.bioontology.org/ontologies/HSAPDV) | Human Developmental Stages Ontology                        | ontology     |
| [SBO](https://bioportal.bioontology.org/ontologies/SBO)       | Systems Biology Ontology                                   | ontology     |
| [MI](https://bioportal.bioontology.org/ontologies/MI)         | Molecular Interactions                                     | ontology     |
| [CHEBI](https://bioportal.bioontology.org/ontologies/CHEBI)   | Chemical Entities of Biological Interest Ontology          | ontology     |
| [MP](https://bioportal.bioontology.org/ontologies/MP)         | Mammalian Phenotype Ontology                               | ontology     |
| [ORDO](https://bioportal.bioontology.org/ontologies/ORDO)     | Orphan Rare Disease Ontology                               | ontology     |
| [UNIPROTKB](https://www.uniprot.org/uniprotkb/?query=*)       | Protein-gene relationships from UniProtKB                  | reference    |
| [UO](https://bioportal.bioontology.org/ontologies/UO)         | Units of Measurement Ontology                              | ontology     |
| [MONDO](https://bioportal.bioontology.org/ontologies/MONDO)   | MONDO Disease Ontology                                     | ontology     |
| [EFO](https://bioportal.bioontology.org/ontologies/EFO)       | Experimental Factor Ontology                               | ontology     |
| [AZ](https://azimuth.hubmapconsortium.org/)                   | Azimuth cell annotations mapped to Cell Ontology terms     | ontology     |

### HuBMAP/SenNet context
The HuBMAP/SenNet context appends to the UBKG base set assertions from the following SABs:

| SAB                                                           | Description                                                                     | Type of data |
|---------------------------------------------------------------|---------------------------------------------------------------------------------|--------------|
| [HRAVS](https://bioportal.bioontology.org/ontologies/HRAVS)   | Human Reference Atlas Value Set                                                 | ontology     |
| [HUBMAP](https://hubmapconsortium.org/)                       | the application ontology supporting the infrastructure of the HuBMAP Consortium | ontology     |
| [SENNET](https://sennetconsortium.org/)                       | the application ontology supporting the infrastructure of the SenNet Consortium | ontology     |

### Data Distillery context
The Data Distillery context appends to the UBKG base set assertions to support participants in [Data Distillery](https://commonfund.nih.gov/dataecosystem/highlights), a project of the National Institute of Health's [Common Fund Data Ecosystem](https://commonfund.nih.gov/dataecosystem) (CFDE). SABs include:


| Data Coordinating Center / Domain                                                                                  | SAB                                                            | Description                               | Type of data |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------|--------------|
| GENCODE                                                                                                            | [PGO](https://bioportal.bioontology.org/ontologies/pseudo)     | Pseudogene                                | ontology     |
|                                                                                                                    | GENCODE_ONT                                                    | GenCode ontology support (valuesets)      | ontology     |
|                                                                                                                    | [GENCODE](https://www.gencodegenes.org/)                       | GENCODE annotations and metadata          | reference    |
| Data Distillery Support Mappings                                                                                   | [CLINVAR](https://www.ncbi.nlm.nih.gov/clinvar/)               | NCBI ClinVar                              | reference    |
|                                                                                                                    | [CMAP](https://www.broadinstitute.org/connectivity-map-cmap)   | Connectivity Map                          | reference    |
|                                                                                                                    | HPOMP                                                          | HPO-MP mapping                            | reference    |
|                                                                                                                    | HGNCHPO                                                        | human genotype - phenotype mapping        | reference    |
|                                                                                                                    | HCOPHGNC                                                       | human - mouse orthologs                   | reference    |
|                                                                                                                    | HCOPMP                                                         | mouse genotype-phenotype mapping          | reference    |
|                                                                                                                    | [MSIGDB](https://www.gsea-msigdb.org/gsea/msigdb)              | Molecular Signatures Database             | reference    |
| [4DNucleome](https://www.4dnucleome.org/)                                                                          | CHLO                                                           | Chromosome Location Ontology              | ontology     |
|                                                                                                                    | 4DN                                                            | 4D Nucleome                               | result       |
| [External RNA Controls Consortium (ERCC)](https://www.nist.gov/programs-projects/external-rna-controls-consortium) |                                                                |                                           | result       |
| [GlyGen](https://www.glygen.org/)                                                                                  | [FALDO](https://bioportal.bioontology.org/ontologies/FALDO)    | Feature Annotation Description Ontology   | ontology     |
|                                                                                                                    | [UNIPROT](https://ftp.uniprot.org/pub/databases/uniprot/)      | Universal Protein Resource                | ontology     |
|                                                                                                                    | [GLYCORDF](https://github.com/glycoinfo/GlycoRDF)              | Glycomics                                 | ontology     |
|                                                                                                                    | [GLYCOCOO](https://github.com/glycoinfo/GlycoCoO)              | Glycoconjugate                            | ontology     |
|                                                                                                                    | GLYCANS                                                        | Glycans data                              | result       |
|                                                                                                                    | PROTEOFORM                                                     | Proteoform                                | result       |
| [Genotype Tissue Expression (GTEx](https://gtexportal.org/home/)                                                   | GTEXCOEXP                                                      | Co-expression                             | result       |
|                                                                                                                    | GTEXEQTL                                                       | Expression                                | result       |
|                                                                                                                    | GTEXEXP                                                        | Expression quantitative trait loci (eQTL) | result       |
| [Human BioMolecular Atlas Program (HuBMAP) ](https://hubmapconsortium.org/)                                        |                                                                |                                           |              |
| [Illuminating the Druggable Genome (IDG)](https://commonfund.nih.gov/idg)                                          | IDG                                                            | Compound-protein interactions             | result       |
|                                                                                                                    | IDG                                                            | Compound-disease interactions             | result       |
| [Gabriella Miller Kids First](https://commonfund.nih.gov/KidsFirst)                                                |                                                                |                                           |              |
| [Library of Integrated Network-Based Cellular Signatures (LINCS)](https://commonfund.nih.gov/LINCS/)               | LINCS                                                          |                                           | result       |
| [Molecular Transducers of Physical Activity Consortium (MoTrPAC)](https://commonfund.nih.gov/MolecularTransducers) |                                                                |                                           |              |
| [Metabolomics Workbench (MW)](https://commonfund.nih.gov/metabolomics/)                                            | MWCM                                                           | Cell-metabolite mappings                  | result       |
|                                                                                                                    | MWGM                                                           | Gene-metabolite mappings                  | result       |
|                                                                                                                    | MWDM                                                           | Disease-metabolite mappings               | result       |
| [Stimulating Peripheral Activity to Relieve Conditions (SPARC)](https://commonfund.nih.gov/Sparc/)                 | [NPO](https://bioportal.bioontology.org/ontologies/NPOKB)      | Neuron Phenotype Ontology                 | ontology     |
|                                                                                                                    | [NPOSCKAN](https://github.com/SciCrunch/NIF-Ontology/releases) | NPOSCKAN                                  | ontology     |

