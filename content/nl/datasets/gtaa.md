---
id: http://data.beeldengeluid.nl/id/dataset/0010
color: ''
image: /uploads/gtaa_network_image.jpg
tags:
  - thesaurus
---

Gemeenschappelijke Thesaurus Audiovisuele Archieven GTAA)

Het Nederlands Instituut voor Beeld en Geluid heeft samen met andere Nederlandse organisaties die audiovisueel cultureel erfgoed beheren de Gemeenschappelijke Thesaurus voor Audiovisuele Archieven (GTAA) ontwikkeld. De GTAA wordt gebruikt voor het doeltreffend karakteriseren van de inhoud van audiovisueel materiaal uit het archief met labels afkomstig uit een gecontroleerde en gestructureerde lijst van termen, een thesaurus.

De GTAA is beschikbaar gemaakt onder de Open Database License (OdbL) en als [linked open data](https://www.den.nl/aan-de-slag/uitvoeren/hoe-maak-je-het-beschikbaar/linked-open-data). Voor het beschrijven van de termen is gebruik gemaakt van het wijdverbreide [SKOS](https://www.w3.org/2004/02/skos/) model dat onder andere één van de [standaarden](https://www.forumstandaardisatie.nl/open-standaarden/skos) is voor de Nederlandse overheid en een best practice voor [terminologiebronnen](https://netwerk-digitaal-erfgoed.github.io/requirements-terminologiebronnen/) in het Netwerk Digitaal Erfgoed .

De GTAA heeft meerdere delen waarin termen zijn gegroepeerd die tot eenzelfde categorie behoren, zoals: Persoonsnamen, Namen (corporatie en andere namen), Geografische Namen, Onderwerpen, Classificatie (hangt samen met Onderwerpen) en Genres. Elke categorie is een SKOS ConceptScheme, zodat gericht gezocht kan worden naar inhoudelijke termen.

In 2020 is de data in de GTAA opgeschoond: Het betreft hoofdzakelijk niet gecontroleerde persoonsnamen en namen die rond de muziekcollectie van Beeld en Geluid ingestroomd waren. Via een aantal [alignments](https://www.pldn.nl/wiki/Vocabulary_alignment) hebben we zoveel mogelijk niet gecontroleerde termen gematcht en goedgekeurd. Wat overbleef hebben we uiteindelijk uit de thesaurus verwijderd.

Elke term in de GTAA is een SKOS Concept met minimaal één voorkeurslabel en een [HTTP URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier). De URI's worden uitgegeven op het domein **data.beeldengeluid.nl**, met daarachter het pad **/gtaa/{nummer}**. Een voorbeeld is: http://data.beeldengeluid.nl/gtaa/123456.

Voor een groot aantal concepten uit GTAA/ Persoonsnamen is er een alignment gemaakt met Wikidata. Door het toevoegen van de property [GTAA ID](https://www.wikidata.org/wiki/Property:P1741) op Wikidata (bijv. voor http://www.wikidata.org/entity/Q345526), kan de GTAA aan een groot aantal andere bronnen gerelateerd worden.

Om met de GTAA te werken zijn er verschillende [APIs](/nl/apis/gtaa) beschikbaar.
