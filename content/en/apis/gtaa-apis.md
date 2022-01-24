---
title: GTAA API
subtitle: Common Thesaurus for Audiovisual Archives
image: uploads/gtaa-network-image.jpg
---

Since early 2022 the Netherlands Institute for Sound and Vision has deployed a brand new service layer for the thesaurus. The OpenSKOS repository that was used for several years was end-of-life and needed replacement. 

The service layer provides several endpoints that can be used to work with the GTAA data. Also, using the concept URI, the data for the concept can be found either in HTML or other formats, like RDF/XML, JSON-LD and Turtle. 

The available endpoints are:
* [OAI-PMH](#oai-pmh)
* [Search](#search)
* [autocomplete](#autocomplete)
* [SPARQL](#sparql)

## OAI-PMH
 All the concepts within a ConceptScheme are available for download in RDF/XML using the [OAI-PMH](https://www.openarchives.org/pmh/) data provider. The service layer provides this so that others can harvest the contents of the GTAA, and keep track of the changes. Both SKOS modelled data and SKOS-XL (eXtension for Labels) can be found using the appropriate prefix.

#### Voorbeelden

  [Retrieve descriptive information about the repository](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)

 [Lijst met alle beschikbare ConceptSchemes](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListSets)

  [List of concepts in SKOS format](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)

  [List of all concepts in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&set=beng:gtaa) (100 concepts per request)

  [List the next 100 concepts in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&resumptionToken=!!beng:gtaa!oai_rdf!430816!1643020890483!430916) (use resumptionToken)

  [List of concepts in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)

  [List of concepts in SKOS-XL and  specific ConceptScheme](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl&set=beng:gtaa:Onderwerpen)

  [Ask for one specific concept in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=GetRecord&metadataPrefix=oai_rdf_xl&identifier=oai:gtaa.apis.beeldengeluid.nl:123456)

[The GTAA dataset](datasets/common-thesaurus-audiovisual-archives) is made available under the Open Database License (OdbL).
