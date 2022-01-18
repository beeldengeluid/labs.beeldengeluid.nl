import slugify from 'slugify'
import { stripObject } from './objects'
import { getRandomColor } from './color'

export const enrichDataset = (dataset, datacatalog = []) => {
  // Props
  dataset.title = getValueFromObjectOrArray(dataset['https://schema.org/name'])

  dataset.subtitle = getValueFromObjectOrArray(
    dataset['https://schema.org/description']
  )

  dataset.slug = slugify(dataset.title, {
    lower: true,
    strict: true,
  })

  const creatorId = dataset['https://schema.org/creator']?.['@id']
  if (creatorId) {
    dataset.creator =
      datacatalog.find((item) => item['@id'] === creatorId)?.[
        'https://schema.org/name'
      ]?.['@value'] || creatorId
  }

  const publisherId = dataset['https://schema.org/publisher']?.['@id']
  if (publisherId) {
    dataset.publisher =
      datacatalog.find((item) => item['@id'] === publisherId)?.[
        'https://schema.org/name'
      ]?.['@value'] || publisherId
  }

  const distributionId = dataset['https://schema.org/distribution']?.['@id']
  if (distributionId) {
    dataset.contentSize = datacatalog.find(
      (item) => item['@id'] === distributionId
    )?.['https://schema.org/contentSize']

    const distributionNameObject = datacatalog.find(
      (item) => item['@id'] === distributionId
    )?.['https://schema.org/name']

    if (distributionNameObject) {
      dataset.distribution = getValueFromObjectOrArray(distributionNameObject)
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
  'https://schema.org/publisher': 'publisher',
  'https://schema.org/creator': 'creator',
  'https://schema.org/distribution': 'distribution',
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
