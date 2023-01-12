---
layout: default
---

# Ingest Validation Tools & Upload Guidelines

Well-defined schemas ensure that SenNet data and metadata are reusable. 
If you are starting work on a new assay type, review the guidelines for directory schemas. 
If you have an upload prepared, it can be validated with [validate_upload.py](https://github.com/sennetconsortium/ingest-validation-tools/blob/main/src/validate_upload.py), or if you only have an individual TSV, use [validate_tsv.py](https://github.com/sennetconsortium/ingest-validation-tools/blob/main/src/validate_tsv.py). 
Examples of both good and bad uploads, and the validation messages they produce, are available.
- [GitHub](https://github.com/sennetconsortium/ingest-validation-tools)

Assay types and their schemas are linked below.

- An Excel file listing all the schemas and their fields is available.
- For more information, see the [ingest-validation-tools repo](https://github.com/sennetconsortium/ingest-validation-tools).

## Available schemas
- [sample-block](/libraries/ingest-validation-tools/schemas/sample-block)
- [sample-section](/libraries/ingest-validation-tools/schemas/sample-section)
- [sample-suspension](/libraries/ingest-validation-tools/schemas/sample-suspension)