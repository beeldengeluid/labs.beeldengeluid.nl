import slugify from 'slugify'
import { stripObject } from './objects'
import { getRandomColor } from './color'

export const enrichDataset = (dataset, datacatalog = []) => {
  // Enrichments
  dataset.title = getValueFromObjectOrArray(dataset['sdo:name'])

  dataset.subtitle = getValueFromObjectOrArray(dataset['sdo:description'])

  dataset.slug = slugify(dataset.title, {
    lower: true,
    strict: true,
  })

  // Augmentations
  const creatorId = dataset['sdo:creator']?.['@id']
  if (creatorId) {
    const creatorNameObject = datacatalog.find(
      (item) => item['@id'] === creatorId
    )?.['sdo:name']

    if (creatorNameObject) {
      const creatorName = getValueFromObjectOrArray(creatorNameObject)
      dataset.creator = {
        ...dataset['sdo:creator'],
        name: creatorName,
        '@type': 'organization',
      }
    }
  }

  const publisherId = dataset['sdo:publisher']?.['@id']
  if (publisherId) {
    const publisherNameObject = datacatalog.find(
      (item) => item['@id'] === publisherId
    )?.['sdo:name']

    if (publisherNameObject) {
      const publisherName = getValueFromObjectOrArray(publisherNameObject)
      dataset.publisher = {
        ...dataset['sdo:publisher'],
        name: publisherName,
        '@type': 'organization',
      }
    }
  }

  const dataCatalogId = dataset['sdo:includedInDataCatalog']?.['@id']
  if (dataCatalogId) {
    const dataCatalogNameObject = datacatalog.find(
      (item) => item['@id'] === dataCatalogId
    )?.['sdo:name']

    if (dataCatalogNameObject) {
      const dataCatalogName = getValueFromObjectOrArray(dataCatalogNameObject)
      dataset.dataCatalog = {
        ...dataset['sdo:includedInDataCatalog'],
        name: dataCatalogName,
        '@type': 'dataset',
      }
    }
  }

  const distributionId = dataset['sdo:distribution']?.['@id']
  if (distributionId) {
    dataset.contentSize = datacatalog.find(
      (item) => item['@id'] === distributionId
    )?.['sdo:contentSize']

    const distributionNameObject = datacatalog.find(
      (item) => item['@id'] === distributionId
    )?.['sdo:name']

    if (distributionNameObject) {
      const distributionName = getValueFromObjectOrArray(distributionNameObject)
      dataset.distribution = {
        ...dataset['sdo:distribution'],
        name: distributionName,
        '@type': 'download',
      }
    }
  }

  const licenseId = dataset['sdo:license']?.['@id']
  if (licenseId) {
    dataset.license = {
      ...dataset['sdo:license'],
      name:
        licenseId === 'https://creativecommons.org/publicdomain/zero/1.0/'
          ? 'CC0 1.0'
          : licenseId,
      '@type': 'license',
    }
  }

  // Random styling by default
  Object.assign(dataset, randomDatasetStyle())

  return dataset
}

const getValueFromObjectOrArray = (objectOrArray) => {
  return objectOrArray?.['@value']
    ? objectOrArray?.['@value']
    : objectOrArray?.filter((d) => d['@language'] === 'nl').length
    ? objectOrArray?.filter((d) => d['@language'] === 'nl')[0]['@value']
    : objectOrArray?.filter((d) => d['@language'] === 'en')[0]['@value']
}

export const enrichDatasets = (datasets, datacatalog = []) => {
  return datasets.map((dataset) => enrichDataset(dataset, datacatalog))
}

export const augmentProps = {
  'sdo:publisher': 'publisher',
  'sdo:creator': 'creator',
  'sdo:distribution': 'distribution',
  'sdo:includedInDataCatalog': 'dataCatalog',
  'sdo:license': 'license',
}

export const enrichProps = [
  'toc',
  'body',
  'dir',
  'path',
  'extension',
  'createdAt',
  'updatedAt',
  'title',
  'subtitle',
  'slug',
  'image',
  'color',
  'tags',
]

export const stripEnrichments = (dataset) =>
  stripObject(dataset, [...enrichProps, ...Object.values(augmentProps)])

export const randomDataSet = ({ id, name, contentSize }) => {
  return {
    '@context': {
      '@vocab': 'http://schema.org/',
    },
    '@type': 'Dataset',
    '@id': 'https://example.com/my-uid-' + id,
    // identifier: 'https://example.com/my-uid-' + id,
    name: name || 'Random dataset #' + id,
    description:
      'Lorem markdownum perdidit ad loco occallescere dextrum more est, pabula tantique.',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    inLanguage: 'nl-NL',
    creator: {
      '@id': 'https://example.com/my-org-' + id,
      '@type': 'Organization',
      name: 'Random Inc',
    },
    publisher: {
      '@id': 'https://example.com/my-org-' + id,
      '@type': 'Organization',
      name: 'Random Inc',
    },
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl: 'https://example.com/download',
        encodingFormat: [
          'http://publications.europa.eu/resource/authority/file-type/XML',
        ],
        name: 'http://netwerkdigitaalerfgoed.nl/def/soort#oai-pmh',
        license: 'https://creativecommons.org/licenses/by-sa/3.0/',
        description: 'Fake OAI-PMH Data Provider without any content',
        inLanguage: ['nl-NL'],
        datePublished: '2010-01-01T08:51',
        dateModified: '2021-01-19T08:52',
        contentSize: contentSize || Math.round(Math.random() * 1200 + id * 133),
      },
    ],
    tags: ['public domain', 'linked data', 'api', 'oai-pmh'].filter(
      () => Math.random() > 0.4
    ),
  }
}

export const randomDatasetStyle = () => {
  return {
    color: getRandomColor(),
    image: 'placeholders/placeholder-dataset.jpg',
  }
}
