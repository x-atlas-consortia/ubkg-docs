---
layout: default
---
# Dataset Bulk Registration

To bulk register tissue samples log into the [Data Portal User Interface (Portal UI)](https://data.sennetconsortium.org/edit/bulk?entity_type=dataset) and from the top, click "Bulk create entities" and select "Datasets".

On the `dataset` bulk registration page you'll be asked to upload a .tsv file containing one row for each tissue sample that will be registered.  An [example_dataset.tsv](https://data.sennetconsortium.org/example_dataset.tsv) file is provided as a template. This .tsv file contains 5 columns (fields) that contain required information for each tissue to be registered.  A description of these fields is below.  Once the .tsv file has been successfully uploaded and submitted the system will register the datasets.


## Dataset Bulk Registration TSV Fields

| Field/Column         | Description                                                                     |
|----------------------|---------------------------------------------------------------------------------|
| lab_id               | REQUIRED:                                                                       |
| ancestor_id          | REQUIRED: The SenNet ID (e.g. SNT483.SWXM.596) of the ancestor for the dataset. |
| doi_abstract         | REQUIRED:                                                                       |
| human_gene_sequences | REQUIRED: BOOL                                                                  |
| data_types           | REQUIRED:                                                                       |


## Dataset Metadata Submission
TBA