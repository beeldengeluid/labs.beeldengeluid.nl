---
title: NIBG Muziekweb APIs 
subtitle: Bevraag de muziekbibliotheek van Nederland
image: apis/beng-muziekweb.jpg
---

In Linked Open Data (LOD) worden data op een gestructureerde manier aangeboden zodat deze eenvoudig door computers kunnen worden geïnterpreteerd. Hierdoor kunnen entiteiten uit verschillende bronnen op internet automatisch gekoppeld worden, ook wel het semantisch web genoemd. Het maakt de gegevens rijker en nuttiger voor de gebruiker.

Muziekweb biedt een groot deel van haar metadata aan via Linked Data protocollen. Dit maakt het mogelijk de op de website aanwezige informatie in te zetten voor breder gebruik, zoals zoekmachines die in meerdere bronnen tegelijk kunnen zoeken (bijvoorbeeld in het [termennetwerk](termennetwerk.netwerkdigitaalerfgoed.nl/) van Netwerk Digitaal Erfgoed of het publiceren van verrijkte data uit vele bronnen zoals op Oorlogsbronnen is gebeurd.

Voor de gegevens van Muziekweb is een ontologie ontworpen die de standaarden van schema.org uitbreidt. Het volledige vocabulaire is te vinden op de volgende locatie:
https://data.muziekweb.nl/MuziekwebOrganization/vocabulary

De data die als Linked Open Data worden aangeboden zijn beschikbaar op https://data.muziekweb.nl/. Op dit adres zijn de Linked Data direct toegankelijk en is het mogelijk om zoekopdrachten uit te voeren met behulp van de SPARQL-interface, een zoektaal om te zoeken en selecteren in gegevens uit Resource Description Framework (RDF) bronnen.

De beschikbare endpoints zijn:
* [SPARQL](#sparql)

## SPARQL
Meer specifieke informatie over de syntaxis en semantiek van de SPARQL-querytaal voor RDF vindt u [hier](https://www.w3.org/TR/rdf-sparql-query/).

#### Examples
[Open een gebruikersinterface naar het SPARQL endpoint in een browser](https://data.muziekweb.nl/MuziekwebOrganization/Muziekweb/sparql/Muziekweb)

Use **curl** to send a query and get JSON results. For example: 
``curl -H "Accept: application/sparql-results+json" https://api.data.muziekweb.nl/datasets/MuziekwebOrganization/Muziekweb/services/Muziekweb/sparql?query="PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT * WHERE {
  ?sub ?pred ?obj .
} LIMIT 10"``

Houd er rekening mee dat de query  [urlencoded](https://www.urlencoder.org/) moet zijn.

### License
Linked open data voor [NISV Muziekweb](datasets/beeld-en-geluid-muziekweb) is beschikbaar gemaakt onder een Open Data Commons Attribution License (ODC-By).


