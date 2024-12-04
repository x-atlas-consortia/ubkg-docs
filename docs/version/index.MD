# Unified Biomedical Knowledge Graph (UBKG)

## Version Information

A UBKG context comprises data imported from a large number of sources (SABs). 
Source data comes in a variety of file formats, with varying frequencies of update:

- Some data sources, such as Cell Ontology (CL), are updated frequently.
- Some data sources, such as the UMLS, are updated biannually, or infrequently.
- Some sources are static.

# UBKG Context Release

The release of a UBKG context will include a text file of Release Notes in the Zip archive of the context's distribution.
The release notes will include a "release date" for the entire context. 

The release date for a UBKG context corresponds to when the zipped Docker neo4j distribution of the context was made available in the public
download site.

# SAB versioning
SABs vary greatly in how they represent version. Although some SABs have an explicit version identifier, many have no real version information. 
SABs without explicit version date include all sources from the CFDE Data Coordinating Centers
that participated in the initial release of the Data Distillery.

The UBKG assigns versions to SABs using the following algorithm:

## OWL files
If the SAB source is an OWL file (includes OWL/RDF, OWL/XML, RDF, Turtle, SKOS):
1. Open the file in Protégé.
2. If there is a date or version identifier in the **Ontology Version IRI**, use that identifier.
3. If there is nothing in the Ontology Version IRI, check the **dc:date property**. Use this date, if one exists.
4, If there is nothing in **dc:date**, use the release date shown in the source of the OWL. (This is applicable to files from NCBOBioPortal.)
5. If no other date or version is available, use the date on which the file was downloaded.

## Edge/Node files
If the SAB source is a set of files in UBKG edge/node format in Globus, use the latest file date of the edge and node files in Globus. 

## SimpleKnowledge spreadsheet
If the SAB source is a SimpleKnowledge spreadsheet, use the date when the file was pushed to the SimpleKnowledge GitHub repo.

## Custom downloads 
If the SAB source was extracted from a website (e.g., UniProtKB; GENCODE; RefSeq):
1.If the source indicates a version (e.g., in a README in the FTP folder, header in the file, etc.), use the version indicated.
2. If no version information available, use the download date.

# UBKGSOURCE and versioning

A UBKG context contains version information for its source SABs in a special ontology with SAB **UBKGSOURCE**.

The UBKGSOURCE ontology combines for each SAB information from the [Contexts](https://ubkg.docs.xconsortia.org/contexts/) regarding
licensing and citations along with details on:
1. The version of the SAB ingested into the UBKG context
2. The date on which the SAB source was downloaded for ingestion

# sources endpoint
The UBKG API provides the [sources](https://smart-api.info/ui/96e5b5c0b0efeef5b93ea98ac2794837#/default/sources_get) endpoint that translates information from the UBKGSOURCE ontology for the SABs in a UBKG context.
The SmartAPI page for the UBKG API describes the schema of the response of the **sources** endpoint.