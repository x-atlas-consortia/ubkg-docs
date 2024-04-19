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

## Citations
We have sought to identify citations for the sources used in UBKG contexts. 
The preferred form of citation is a PubMed ID. 

The sources for citation references are included. Sources are of the following types:
1. OBO home page
2. Web pages of source stewards
3. GitHub repositories of source stewards

## Licensing
We have sought to identify licensing under which sources are distributed. 
The majority of the sources use [Creative Commons](https://creativecommons.org/) licenses.

## Adaptations
The following is intended to satisfy requirements for licenses that require descriptions of adaptation (e.g., CC BY-SA).

Adaptations to source data include:
1. Use of subsets of data from the source--i.e., selected codes
2. Modifications of code IDs for the purpose of standardization. See **CodeID Standardization** below.
3. Use of content from multiple sources to generate new "mappings" sources--e.g., between HGNC and HPO.
4. Transformation of downloaded content into files in UBKG Edge/Node format--e.g., as done with UniProtKB and GENCODE data.

## Citation or Licensing Questions

If the citation or licensing information for a source needs to be updated, please contact the UBKG steward.

  [Jonathan Silverstein, MD](mailto:j.c.s@pitt.edu)

      
    Jonathan Silverstein, MD
    Department of Biomedical Informatics
    University of Pittsburgh



## Contexts
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
the UMLS to the format SAB:CODE. HPO codes are standardized to **HP** as the SAB.

### non-UMLS Source Platforms
Sources of data for the UBKG (other than the UMLS base) include:

1. [OBO Foundry](https://obofoundry.org/)
2. [NCBO BioPortal](https://bioportal.bioontology.org/)
3. Sites maintained by stewards, including GitHub repositories, FTP sites, etc.
4. Globus (for sources specific to Data Distillery)
5. Spreadsheets in the custom _**SimpleKnowledge Editor**_ format, stored in Google Drive
6. Custom ETL scripts

### UBKG base context (UMLS plus)
The UBKG base context appends to the UMLS context assertions from a number of other standard biomedical ontologies and data sources. 
The UBKG base context includes assertions from the following SABs:

| SAB                                                        | Description                                                       | Type of data | platform                                 | Citations                                                                                                                                                                         | Citation Reference                                                        | License                                                                                                                                   |
|------------------------------------------------------------|-------------------------------------------------------------------|--------------|------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| [UMLS](https://www.nlm.nih.gov/research/umls/index.html)   | Unified Medical Language System content, with standardized CodeID | ontlogy      | DBMI Neptune                             | [PMID:14681409 ](https://pubmed.ncbi.nlm.nih.gov/14681409/)                                                                                                                       | [Reference](https://www.nlm.nih.gov/research/umls/index.html)             | The UBKG steward has a distributor license. A UBKG consumer must have a user [UMLS license](https://www.nlm.nih.gov/databases/umls.html). |
| [UBERON](https://obofoundry.org/ontology/uberon.html)      | Uber Anatomy Ontology                                             | ontology     | OBO Foundry                              | [PMID:22293552](https://pubmed.ncbi.nlm.nih.gov/22293552/),[PMID:25009735](https://pubmed.ncbi.nlm.nih.gov/25009735/)                                                             | [Reference](https://obophenotype.github.io/uberon/cite/)                  | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                                                                 |
| [PATO](https://obofoundry.org/ontology/pato.html)          | Phenotypic Quality Ontology                                       | ontology     | OBO Foundry                              | [PMID:28387809](https://pubmed.ncbi.nlm.nih.gov/28387809/), [PMID:15642100](https://pubmed.ncbi.nlm.nih.gov/15642100/)                                                            | [Reference](https://obofoundry.org/ontology/pato.html)                    | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                                                                 |
| [CL](https://obofoundry.org/ontology/cl.html)              | Cell Ontology                                                     | ontology     | OBO Foundry                              | [PMID:27377652](https://pubmed.ncbi.nlm.nih.gov/27377652/),[PMID:21208450](https://pubmed.ncbi.nlm.nih.gov/21208450/),[PMID:15693950 ](https://pubmed.ncbi.nlm.nih.gov/15693950/) | [Reference](https://obophenotype.github.io/cell-ontology/cite/)           | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [DOID](https://obofoundry.org/ontology/doid.html)          | Human Disease Ontology                                            | ontology     | OBO Foundry                              | [PMID:30407550](https://pubmed.ncbi.nlm.nih.gov/30407550/)                                                                                                                        | [Reference](https://www.disease-ontology.org/resources/citing-do)         | [CC0](https://creativecommons.org/publicdomain/zero/1.0/)                                                                                 |
| [OBI](https://obofoundry.org/ontology/obi.html)            | Ontology for Biomedical Investigations                            | ontology     | OBO Foundry                              | [PMID:27128319](https://pubmed.ncbi.nlm.nih.gov/27128319/)                                                                                                                        | [Reference](https://obi-ontology.org/)                                    | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [OBIB](https://obofoundry.org/ontology/obib.html)          | Ontology for Biobanking                                           | ontology     | NCBO BioPortal                           | [PMID:27148435](https://europepmc.org/article/pmc/4855778)                                                                                                                        | [Reference](https://github.com/biobanking/biobanking?tab=readme-ov-file)  | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [EDAM](http://edamontology.org/page)                       | EDAM                                                              | ontology     | EDAM                                     | [PMID:23479348](https://pubmed.ncbi.nlm.nih.gov/23479348/)                                                                                                                        | [Reference](https://edamontology.org/page)                                | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)                                                                           |
| [HSAPDV](https://obofoundry.org/ontology/hsapdv.html)      | Human Developmental Stages Ontology                               | ontology     | OBO Foundry                              |                                                                                                                                                                                   |                                                                           | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                                                                 |
| [SBO](https://github.com/EBI-BioModels/SBO)                | Systems Biology Ontology                                          | ontology     | SBO                                      |                                                                                                                                                                                   |                                                                           | [Artistic License 2.0 ](https://opensource.org/license/Artistic-2.0)                                                                      |
| [MI](https://obofoundry.org/ontology/mi.html)              | Molecular Interactions                                            | ontology     | OBO Foundry                              |                                                                                                                                                                                   |                                                                           | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [CHEBI](https://obofoundry.org/ontology/chebi.html)        | Chemical Entities of Biological Interest Ontology                 | ontology     | OBO Foundry                              | [PMID:26467479](https://pubmed.ncbi.nlm.nih.gov/26467479/)                                                                                                                        | [Reference](https://www.ebi.ac.uk/chebi/aboutChebiForward.do)             | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [MP](https://obofoundry.org/ontology/mp.html)              | Mammalian Phenotype Ontology                                      | ontology     | OBO Foundry                              | [ PMID:26467479](https://pubmed.ncbi.nlm.nih.gov/22961259/)                                                                                                                       | [Reference](https://www.informatics.jax.org/mgihome/other/citation.shtml) | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [ORDO](https://bioportal.bioontology.org/ontologies/ORDO)  | Orphan Rare Disease Ontology                                      | ontology     | NCBO BioPortal                           |                                                                                                                                                                                   |                                                                           | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [UNIPROTKB](https://www.uniprot.org/uniprotkb/?query=*)    | Protein-gene relationships from UniProtKB                         | reference    | custom (translation of UniProt download) | [PMID:36408920](https://pubmed.ncbi.nlm.nih.gov/36408920/)                                                                                                                        | [Reference](https://www.uniprot.org/help/publications)                    | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                                                                 |
| [UO](https://bioportal.bioontology.org/ontologies/UO)      | Units of Measurement Ontology                                     | ontology     | NCBO BioPortal                           | [PMID:23060432 ](https://pubmed.ncbi.nlm.nih.gov/23060432/)                                                                                                                       | [Reference](https://obofoundry.org/ontology/uo.html)                      | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                                                                 |
| [MONDO](https://obofoundry.org/ontology/mondo.html)        | MONDO Disease Ontology                                            | ontology     | OBO Foundry                              | [MedRxiv](https://www.medrxiv.org/content/10.1101/2022.04.13.22273750v3)                                                                                                          | [Reference](https://mondo.monarchinitiative.org/pages/resources/)         | [CC BY 4.0 ](https://creativecommons.org/licenses/by/4.0/)                                                                                |
| [EFO](https://bioportal.bioontology.org/ontologies/EFO)    | Experimental Factor Ontology                                      | ontology     | NCBO BioPortal                           | [PMID:20200009 ](https://pubmed.ncbi.nlm.nih.gov/20200009/)                                                                                                                       | [Reference](https://www.ebi.ac.uk/efo/about.html)                         | [EMBL-EBI](https://www.ebi.ac.uk/licencing)                                                                                               |
| [PGO](https://bioportal.bioontology.org/ontologies/pseudo) | Pseudogene                                                        | ontology     | NCBO BioPortal                           |                                                                                                                                                                                   |                                                                           |                                                                                                                                           |
| GENCODE_VS                                                 | GENCODE ontology support (valuesets)                              | ontology     | SimpleKnowledge                          |                                                                                                                                                                                   |                                                                           |                                                                                                                                           |
| [GENCODE](https://www.gencodegenes.org/)                   | GENCODE annotations and metadata                                  | reference    | custom (translation of FTP download)     | [PMID:33270111](https://pubmed.ncbi.nlm.nih.gov/33270111/)                                                                                                                        | [Reference](https://www.gencodegenes.org/pages/publications.html)         | [open access ](https://www.gencodegenes.org/pages/data_access.html)                                                                       |

#### RefSeq gene summaries
The base context includes summaries of genes from [RefSeq](https://www.ncbi.nlm.nih.gov/refseq/).
A separate script adds RefSeq summaries to the UBKG. This import assumes that GenCode has been ingested.

### Azimuth-Cell Ontology mappings
The HuBMAP project is building a mapping between tissue codings from Azimuth and Cell Ontology (CL).
The AZ-CL mappings will be added to UBKG contexts as needed.

| SAB                                                        | Description                                            | Type of data | platform        |
|------------------------------------------------------------|--------------------------------------------------------|--------------|-----------------|
| [AZ](https://azimuth.hubmapconsortium.org/)                | Azimuth cell annotations mapped to Cell Ontology terms | ontology     | SimpleKnowledge |

### HuBMAP/SenNet context
The HuBMAP/SenNet context appends to the UBKG base set assertions from the following SABs:

| SAB                                                         | Description                                                                       | Type of data | platform        |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|--------------|-----------------|
| [HRA](https://humanatlas.io/)                               | Human Reference Atlas                                                             | ontology     | Globus          |
| [HRAVS](https://bioportal.bioontology.org/ontologies/HRAVS) | Human Reference Atlas Value Set                                                   | ontology     | NCBO BioPortal  |
| [HUBMAP](https://hubmapconsortium.org/)                     | the application ontology supporting the infrastructure of the HuBMAP Consortium   | ontology     | SimpleKnowledge |
| [SENNET](https://sennetconsortium.org/)                     | the application ontology supporting the infrastructure of the SenNet Consortium   | ontology     | SimpleKnowledge |
| [CEDAR](https://metadatacenter.org/)                        | Custom HuBMAP/SenNet metadata templates built from CEDAR templates                | reference    | Globus          |
| HMFIELD                                                     | Custom legacy HuBMAP metadata                                                     | reference    | custom          |
| CEDAR-ENTITY                                                | Custom mappings between CEDAR templates and HuBMAP and SenNet provenance entities | reference    | custom          |
| [PCL](https://obofoundry.org/ontology/pcl.html)             | Provisional Cell Ontology                                                         | ontology     | OBO Foundry     |

### Data Distillery context
The Data Distillery context appends to the UBKG base set assertions to support participants in [Data Distillery](https://commonfund.nih.gov/dataecosystem/highlights), a project of the National Institute of Health's [Common Fund Data Ecosystem](https://commonfund.nih.gov/dataecosystem) (CFDE). SABs include:

| Data Coordinating Center / Domain                                                                                  | SAB                                                            | Description                                  | Type of data | platform       |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------|--------------|----------------|
| Data Distillery Support Mappings                                                                                   | [CLINVAR](https://www.ncbi.nlm.nih.gov/clinvar/)               | NCBI ClinVar                                 | reference    | Globus         |
|                                                                                                                    | [CMAP](https://www.broadinstitute.org/connectivity-map-cmap)   | Connectivity Map                             | reference    | Globus         |
|                                                                                                                    | HPOMP                                                          | HPO-MP mapping                               | reference    | Globus         |
|                                                                                                                    | HGNCHPO                                                        | human genotype - phenotype mapping           | reference    | Globus         |
|                                                                                                                    | HCOP (_formerly HCOPHGNC_)                                     | human - mouse orthologs                      | reference    | Globus         |
|                                                                                                                    | MPMGI (_formerly HCOPMP_)                                      | mouse genotype-phenotype mapping             | reference    | Globus         |
|                                                                                                                    | RATHCOP                                                        | ENSEMBL human to ENSEMBL Rat ortholog        | reference    | Globus         |
|                                                                                                                    | [MSIGDB](https://www.gsea-msigdb.org/gsea/msigdb)              | Molecular Signatures Database                | reference    | Globus         |
|                                                                                                                    | HSCLO                                                          | Chromosome Location Ontology                 | ontology     | Globus         |
|                                                                                                                    | GENCODEHSCLO                                                   | GENCODE-HSCLO mapping                        | reference    | Globus         |
|                                                                                                                    | [WP](https://www.wikipathways.org/)                            | WikiPathways gene-gene interactions          | reference    | Globus         |
|                                                                                                                    | [CLINGEN](https://clinicalgenome.org/)                         | Clinical Genome selected datasets            | reference    | Globus         |
|                                                                                                                    | [STRING](https://string-db.org/)                               | StringDB Protein-Protein Interaction Network | reference    | Globus         |
| [4DNucleome](https://www.4dnucleome.org/)                                                                          | 4DN                                                            | 4D Nucleome                                  | result       | Globus         |
| [Extracellular RNA Communication Consortium (ERCC)](https://exrna.org/)                                            | ERCCRBP                                                        | exRNA RNA Binding Proteins                   | result       | Globus         |
|                                                                                                                    | ERCCREG                                                        | Regulatory Elements                          | result       | Globus         |
| [GlyGen](https://www.glygen.org/)                                                                                  | [FALDO](https://bioportal.bioontology.org/ontologies/FALDO)    | Feature Annotation Description Ontology      | ontology     | NCBO BioPortal |
|                                                                                                                    | [UNIPROT](https://ftp.uniprot.org/pub/databases/uniprot/)      | Universal Protein Resource                   | ontology     | UniProt FTP    |
|                                                                                                                    | [GLYCORDF](https://github.com/glycoinfo/GlycoRDF)              | Glycomics                                    | ontology     | GitHub         |
|                                                                                                                    | [GLYCOCOO](https://github.com/glycoinfo/GlycoCoO)              | Glycoconjugate                               | ontology     | GitHub         |
|                                                                                                                    | GLYCANS                                                        | Glycans data                                 | result       | Globus         |
|                                                                                                                    | PROTEOFORM                                                     | Proteoform                                   | result       | Globus         |
| [Genotype Tissue Expression (GTEx)](https://gtexportal.org/home/)                                                  | GTEXCOEXP                                                      | Co-expression                                | result       | Globus         |
|                                                                                                                    | GTEXEQTL                                                       | Expression                                   | result       | Globus         |
|                                                                                                                    | GTEXEXP                                                        | Expression quantitative trait loci (eQTL)    | result       | Globus         |
| [Human BioMolecular Atlas Program (HuBMAP) ](https://hubmapconsortium.org/)                                        | HMAZ                                                           | HuBMAP Azimuth Cell Expression Summary       | result       | Globus         |  
| [Illuminating the Druggable Genome (IDG)](https://commonfund.nih.gov/idg)                                          | IDGP                                                           | Compound-protein interactions                | result       | Globus         |
|                                                                                                                    | IDGD                                                           | Compound-disease interactions                | result       | Globus         |
| [Gabriella Miller Kids First](https://commonfund.nih.gov/KidsFirst)                                                | KF                                                             |                                              | result       | Globus         |
| [Library of Integrated Network-Based Cellular Signatures (LINCS)](https://commonfund.nih.gov/LINCS/)               | LINCS                                                          |                                              | result       | Globus         |
| [Molecular Transducers of Physical Activity Consortium (MoTrPAC)](https://commonfund.nih.gov/MolecularTransducers) | MOTRPAC                                                        |                                              | result       | Globus         |
| [Metabolomics Workbench (MW)](https://commonfund.nih.gov/metabolomics/)                                            | MW                                                             | Cell-metabolite mappings                     | result       | Globus         |
| [Stimulating Peripheral Activity to Relieve Conditions (SPARC)](https://commonfund.nih.gov/Sparc/)                 | [NPO](https://bioportal.bioontology.org/ontologies/NPOKB)      | Neuron Phenotype Ontology                    | ontology     | NCBO BioPortal |
|                                                                                                                    | [NPOSCKAN](https://github.com/SciCrunch/NIF-Ontology/releases) | NPOSCKAN                                     | ontology     | GitHub         |
| [Reactome](https://reactome.org/)                                                                                  | REACTOME                                                       | Pathways                                     | reference    | Globus         |

