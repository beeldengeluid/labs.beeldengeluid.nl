---
title: GTAA API
subtitle: Gemeenschappelijke Thesaurus Audiovisuele Archieven
image: uploads/gtaa-network-image.jpg
---

Sinsd begin 2022 stelt het Nederlands Instituut voor Beeld en Geluid een gloednieuwe service layer beschikbaar voor de thesaurus. OpenSKOS, het systeem waarin de beschikbaarstelling meerdere jaren is gedaan, was end-of-life en aan vervanging toe. 

In de nieuwe thesaurus service layer maakt  Beeld en Geluid meerdere endpoints beschikbaar om met de GTAA te werken. Ook kan een GTAA concept URI worden gebruikt om de bijbehorende data op te vragen in HTML of andere formaten als RDF/XML, JSON-LD of Turtle, etc.

De beschikbare endpoints zijn:
* [OAI-PMH](#oai-pmh)
* [Search](#search)
* [autocomplete](#autocomplete)
* [SPARQL](#sparql)

## OAI-PMH
 Met de [OAI-PMH](https://www.openarchives.org/pmh/) data provider kunnen alle concepten in een concept schema kunnen gedownload worden in RDF/XML formaat. Ook de wijzigingen kunnen op deze manier opgevraagd worden. Door gebruik te maken van de juiste metadataPrefix kunnen concepten opgevraagd worden in zowel het SKOS model als in SKOS-XL (eXtension for Labels).

#### Voorbeelden

  [Beschrijvende informatie over de repository ophalen](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)

 [Lijst met alle beschikbare ConceptSchemes](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListSets)

  [Lijst met concepten in SKOS](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)

  [Lijst met alle Concepten in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&set=beng:gtaa) (100 concepten per request)

  [Lijst met de volgende 100 Concepten in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&resumptionToken=!!beng:gtaa!oai_rdf!430816!1643020890483!430916) (gebruik resumptionToken)

  [Lijst met concepten in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)
L
  [Lijst met concepten in SKOS-XL en specifiek ConceptScheme](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl&set=beng:gtaa:Onderwerpen)

  [Vraag één specifiek concept op in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=GetRecord&metadataPrefix=oai_rdf_xl&identifier=oai:gtaa.apis.beeldengeluid.nl:123456)

### Search

### Autocomplete

### SPARQL


  [Zoek naar een term](https://gtaa.apis.beeldengeluid.nl/search?q=vinci)


De [The GTAA dataset](datasets/gtaa-gemeenschappelijke-thesaurus-audiovisuele-archieven) is beschikbaar gemaakt onder de Open Database License (OdbL).
