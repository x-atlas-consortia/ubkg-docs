---
layout: default
---
# Sample Bulk Registration

To bulk register tissue samples log into the [Data Portal User Interface (Portal UI)](https://data.sennetconsortium.org/edit/bulk?entity_type=sample) and from the top, click "Bulk create entities" and select "Samples".

On the `sample` bulk registration page you'll be asked to upload a .tsv file containing one row for each tissue sample that will be registered.  An [example_samples.tsv](https://data.sennetconsortium.org/example_sample.tsv) file is provided as a template. This .tsv file contains 6 columns (fields) that contain required information for each tissue to be registered.  Descriptions of these fields are below.  Once the .tsv file has been successfully uploaded and submitted the system will register the samples.

Tissue samples of type `organ`, `block`, `section` or `suspension` can be registered.

## Sample Bulk Registration TSV Fields

| Field/Column | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ancestor_id | REQUIRED: The SenNet ID (e.g. SNT483.SWXM.596) of the ancestor for this tissue sample.  For samples that represent a whole organ, this ancestor must be a `source`, for any other sample type the ancestor must be another sample (i.e., the sample that the newly registered sample was taken from).                                                                                                   |
| sample_category | REQUIRED: The top level type of sample that is being registered. Valid values are `organ`, `block`, `section` or `suspension`. If `organ` is specified then the organ_type field must be provided.                                                                                                                                                                                                      |
| organ_type | This field is required only if the sample_category is specified as `organ`.  This is the SenNet defined code for the organ that this registration represents (example, `BR` for Brain or `LK` for Left Kidney) from the [organ_types.yaml file](https://github.com/hubmapconsortium/search-api/blob/main/src/search-schema/data/definitions/enums/organ_types.yaml).                                    |
| preparation_protocol | REQUIRED: A DOI URL from the [protocols.io site](https://protocols.io) of a protocol describing the procedures used when creating/preparing the sample.                                                                                                                                                                                                                                                 |
| lab_notes | A description of the sample for purposes of generally describing the sample and finding for use to find it via keyword search in the Data Portal User Interface (Portal UI).                                                                                                                                                                                                                            |
| rui_location | This field is requred for all block level registrations.  This is the JSON output from the [location Registrion User Interface Tool (RUI)](https://hubmapconsortium.github.io/ccf-ui/rui/), spatially locating the block inside the organ of origin.  See the [RUI Demo](https://www.youtube.com/watch?v=142hGer4xvU) for instruction on how to register a location and obtain the JSON representation. |


## Sample Metadata Submission
After samples have been registered sample metadata must be provided to the SenNet data curators.  Please contact help@sennetconsortium.org to initiate this process.  See a description on the sample metadata, submitted as .tsv files on the  [Sample Metadata TSV Page](https://hubmapconsortium.github.io/ingest-validation-tools/sample/).