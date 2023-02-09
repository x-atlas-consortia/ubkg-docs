---
layout: default
---
# Source Bulk Registration

To bulk register sources log into the [Data Ingest Portal](https://data.sennetconsortium.org/edit/bulk?entity_type=source) and from the top, click "Bulk create entities" and select "Sources".

On the `source` bulk registration page you'll be asked to upload a .tsv file containing one row for each source that will be registered.  An [example_source.tsv](https://data.sennetconsortium.org/example_source.tsv) file is provided as a template. This .tsv file contains 4 columns (fields) that contain required information for each source to be registered.  Descriptions of these fields are below.  

### Source Registration Fields

| Field/Column | Description                                                                                                                                                                 |
| --------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| lab_id | REQUIRED: An id used internally by the lab for the `source`.  DO NOT INCLUDE ANY PHI in this id.                                                                            |
| source_type | REQUIRED: The type from which the source orginated, can be Human, Human organoid, Mouse, or Mouse organoid                                                                  |
| selection_protocol | REQUIRED: A DOI URL from the [protocols.io site](https://protocols.io) of a protocol describing the selection protocol used to select the donor.                            |
| lab_notes | A general description of the donor for public display and to be used to find the donor by searching in the Data Ingest Portal.  DO NOT INCLUDE ANY PHI in this description. |


### Source metadata submission
After `sources` have been registered documents need to be provided to the HIVE so additional "Source Metadata" can be extracted.  See a description on the [Source MetadataPage](https://software.docs.hubmapconsortium.org/donor.html)