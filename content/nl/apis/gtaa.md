---
title: GTAA API
subtitle: Gemeenschappelijke Thesaurus Audiovisuele Archieven
image: placeholders/placeholder-dataset.jpg
---

Sinsd begin 2022 stelt het Nederlands Instituut voor Beeld en Geluid een gloednieuwe service layer beschikbaar voor de thesaurus. OpenSKOS, het systeem waarin de beschikbaarstelling meerdere jaren is gedaan, was end-of-life en aan vervanging toe. 

In de nieuwe thesaurus service layer maakt  Beeld en Geluid meerdere endpoints beschikbaar om met de GTAA te werken. Ook kan een GTAA concept URI worden gebruikt om de bijbehorende data op te vragen in HTML of andere formaten als RDF/XML, JSON-LD of Turtle, etc.

 Met de [OAI-PMH](https://www.openarchives.org/pmh/) data provider kunnen alle concepten in een concept schema kunnen gedownload worden in RDF/XML formaat. Ook de wijzigingen kunnen op deze manier opgevraagd worden. Door gebruik te maken van de juiste metadataPrefix kunnen concepten opgevraagd worden in zowel het SKOS model als in SKOS-XL (eXtension for Labels).
 
De beschikbare endpoints zijn:
* OAI-PMH
* search
* autocomplete
* SPARQL (account nodig)

## Voorbeelden
::: tabs
  ::: tab OAI-PMH

  [Identify](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)

  :::
  ::: tab search
  [Zoek naar een term](https://gtaa.apis.beeldengeluid.nl/search?q=vinci)

  :::
:::

De [The GTAA dataset](datasets/gtaa-gemeenschappelijke-thesaurus-audiovisuele-archieven) is beschikbaar gemaakt onder de Open Database License (OdbL).
