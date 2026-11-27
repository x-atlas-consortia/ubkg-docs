---
layout: default
---
# Unified Biomedical Knowledge Graph (UBKG) 
<br>

# Distribution workflows of the UBKG system

---
<br>
# Challenges
---
The [ETL workflows](/about/etl) of a [UBKG system](../system) use assertion data from 
UBKG [sources](/about/glossary/#source) to build a set of one or more [import files](/about/glossary/#import-files).

It is possible to import UBKG content directly into a neo4j database to build a UBKG instance. 
If the instance of neo4j is running on the local machine, importing directly into the local neo4j instance
creates a [bare-metal distribution](/about/glossary/#bare-metal-distribution).

A bare-metal distribution is not ideal for UBKG for a number of reasons, including:
1. Administration of the neo4j instance can be complicated, requiring administrative post-import tasks such as creating indexes and constraints. 
2. Distribution workflows may need to restrict access to [licensed](/about/licensing) in a UBKG instance.
3. Bare-metal distributions are not portable. 
4. UBKG is designed to run in the [Community Edition](https://neo4j.com/product/community-edition/) of neo4j. An instance of neo4j Community Edition has limitations including allowing only one user.


<br>

# Criteria
---
An ideal UBKG distribution should satisfy three criteria:

## Simplicity
It should be possible to build an [turnkey distribution](/about/glossary/#turnkey-distribution) of UBKG tha that generates an instance of UBKG with a minimum of commands and configuration.
Turnkey distributions allow users to install instances of UBKG without requiring experience in administering neo4j databases.

## Portability
It should be possible to build UBKG distributions that are self-contained so that they can be installed or uninstalled easily.

## Severability
It should be possible to control access to licensed content.

# Solution characteristics

## Docker container
The UBKG distribution workflows use a complicated series of steps to build a Docker container that hosts an instance
of neo4j that is populated from an [external bind mount](/about/glossary/#external-bind-mount). 
The result is a turnkey distribution that requires minor configuration 
and a single build command. 

The UBKG turnkey distribution consists of a Zip archive file that contains:
* a configuration file (**container.cfg.example**) that requires minimal editing to tailor the resulting distribution to the local environment
* a build script (**build_container.sh**) that builds a local Docker container
* files used to build an external bind mount.

### Dependencies
To _use_ a turnkey UBKG distribution, [Docker Desktop](https://docs.docker.com/desktop/) must be running on the local machine. 

To _build_ a turnkey distribution, the build user must be logged into [Docker Hub](https://hub.docker.com/) with access to the appropriate image.

## Content access control
The primary method of controlling access to UBKG content is through a [license key](/about/glossary/#license-key). 
For UMLS content, a user's license key is a UMLS API key obtained from [UMLS Technlogy Services](https://uts.nlm.nih.gov/uts/signup-login).
Other forms of access control will depend on the form of license restriction.

The _deployment_ of access control depends on the distribution architecture. 

### UBKG contexts
It is possible to build a UBKG context that does not contain assertions from licensed sources. 

### Download site
The [UBKG Download site](https://ubkg-downloads.xconsortia.org/) requires a UMLS license. Users must
present a valid UMLS license before they can download distributions.

## Dockerized neo4j Browser access control
By default, the Docker container created as part of a UBKG distribution exposes ports to the
Browser application that can connect to the instance of neo4j hosted by the container.
Both the port number and the password for the neo4j instance are configurable.

## Reverse proxy control
It is possible to remove access to the Browser port in the Docker container, using a reverse proxy server and an authentication service. 
This depends greatly on the Web service architecture.
For an example using Nginx, refer to the [UBKGBox](https://github.com/x-atlas-consortia/ubkg-box) container application for details.

## Build workflows
The workflow to _build_ a turnkey UBKG distribution depends on the version of the UBKG System.
However, the basic build steps are similar:
1. Build an _internal_ Docker container hosting an empty instance of neo4j.
2. Export the **data** and **import** directories of the empty neo4j instance to an external bind mount on the local machine.
3. Execute the scripts that import UBKG import files into the external bind mount of the containerized neo4j instance.
4. Build a zip archive of the distribution.

### [UBKG-CSV workflow](https://github.com/x-atlas-consortia/ubkg-neo4j/blob/main/docs/BUILD_INSTRUCTIONS.md)
### [UBKG-JKG workflow](https://github.com/x-atlas-consortia/jkg-neo4j/blob/main/docs/BUILD_INSTRUCTIONS.md)

## Deployment workflow
The workflow to _deploy_ a turnkey UBKG distribution is simple, and identical for both versions of the UBKG system:
1. Download the Zip distribution.
2. Expand the Zip archive.
3. Configure the distribution. This can be as simple as changing the port and the name of the container.
4. Run the build script.

### [UBKG-CSV workflow](https://github.com/x-atlas-consortia/ubkg-neo4j/blob/main/docs/DEPLOYMENT_INSTRUCTIONS.md)
### [UBKG-JKG workflow](https://github.com/x-atlas-consortia/jkg-neo4j/blob/main/docs/DEPLOYMENT_INSTRUCTIONS.md)