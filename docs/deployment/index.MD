---
layout: default
---

# Unified Biomedical Knowledge Graph (UBKG) 
# Deployment

# Scope

These instructions are intended for developers who wish to generate a UBKG instance from source.

**To install a complete, containerized version of a UBKG instance,
refer to the instructions in the [Docker]((/docker)) tab.**

---

An UBKG infrastructure involves...
- the application of a **methodology**...
- that uses a set of **tools**...
- and sets of **assertion data**...
- to be deployed to an **environment**...
- and abstracted by means of an **API**.

## Tools
The tools used to build and deploy a UBKG instance are described on the home page, and include:
1. The **source framework** 
2. The **generation framework**
3. The **neo4j Docker framework**

## Assertion data
The sets of assertion data that are required to populate a deployment of a UBKG depend on the UBKG [context](/context).

There are three types of assertion data:
1. **Ontology** assertions taken directly from published ontology files in an OWL serialization, such as those described in the NCBO BioPortal.
2. **Reference** assertions built from sources including public databases, such as UniProtKB or GenCode.
3. **Experimental** assertions based on the results of scientific experiments

## API
An optional API server abstracts Cypher queries that obtain information from the UBKG neo4j instance.

## Environment
The Docker container that contains the neo4j instance of UBKG can reside in different types of environments.
For example, a developer can instantiate an instance of a UBKG docker on a local machine. 
The Docker can also be hosted by a Virtual Machine.

## Methodology

### Obtain UMLS CSVs
UBKG ontology CSV files contain licensed content extracted from the Unified Medical Language System (UMLS),
using the [source_framework](https://github.com/x-atlas-consortia/ubkg-etl/tree/main/source_framework) scripts in the **ubkg-etl** repository.

The ontology CSV files cannot be published to public repositories, such as GitHub or Docker Hub. 
Prebuilt ontology CSVs are available for download, but require authorization because of licensing issues.

For assistance with obtaining prebuilt ontology CSVs, contact the UBKG steward:

  [Jonathan Silverstein, MD](mailto:j.c.s@pitt.edu)

      
    Jonathan Silverstein, MD
    Department of Biomedical Informatics
    University of Pittsburgh


### Identify and collect data sources for UBKG Context

A UBKG context corresponds to the assertion data that is appended to the UMLS CSVs.
A context is a collection of sets of assertion files for a group of SABs. Because the assertions associated with a particular SAB
contain references to entities from other SABs, a context will have dependencies. The sets of assertion files usually
need to be ingested in a particular order for a context.

The [contexts](/contexts) page lists the sets of SABs for the known UBKG contexts.

### Generate the ontology CSVs

Use the scripts in the [generation framework](https://github.com/x-atlas-consortia/ubkg-etl/tree/main/generation_framework) of the **ubkg-etl** repository to build a set of ontology CSVs by appending SAB data to the UMLS CSVs.

### Establish DockerHub access

The Docker framework is based on a Docker image in DockerHub maintained by the HuBMAP Consortium.
The account that uses the Docker framework will need a DockerHub account that has permissions to the DockerHub image.

Contact the UBKG steward (Jonathan Silverstein) to obtain access to the image in DockerHub.

### Instantiate Docker
Use the scripts in the [ubkg-neo4j](https://github.com/x-atlas-consortia/ubkg-neo4j) repository to instantiate a Docker container
for a neo4j instance of UBKG that is populated by the ontology CSVs.

### Instantiate API server
Use the scripts in the [ubkg-api](https://github.com/x-atlas-consortia/ubkg-api) repository to instantiate an instance of
a UBKG API. Contact the UBKG steward (Jonathan Silverstein) for assistance.
