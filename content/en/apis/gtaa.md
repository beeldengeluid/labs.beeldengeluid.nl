---
title: GTAA API
subtitle: Common Thesaurus for Audiovisual Archives
image: placeholders/placeholder-dataset.jpg
---

Since early 2022 the Netherlands Institute for Sound and Vision has deployed a brand new service layer for the thesaurus. The OpenSKOS repository that was used for several years was end-of-life and needed replacement. 

The service layer provides several endpoints that can be used to work with the GTAA data. Also, using the concept URI, the data for the concept can be found either in HTML or other formats, like RDF/XML, JSON-LD and Turtle. 

 All the concepts within a ConceptScheme are available for download in RDF/XML using the [OAI-PMH](https://www.openarchives.org/pmh/) data provider. The service layer provides this so that others can harvest the contents of the GTAA, and keep track of the changes. Both SKOS modelled data and SKOS-XL (eXtension for Labels) can be found using the appropriate prefix.

The available endpoints are:
* OAI-PMH, using this [baseUrl](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)
* search
* autocomplete
* SPARQL

Examples ...

The GTAA is made available under the Open Database License (OdbL).

[The GTAA dataset](datasets/gtaa-gemeenschappelijke-thesaurus-audiovisuele-archieven)
