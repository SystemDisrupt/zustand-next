import { useEntityStore } from '../../../lib/entity.store';

import { fields } from '../../layouts/single-entity/single-entity.config';

import { FieldDefinition } from '../../../lib/entity.definition';

import { SingleEntityLayout } from '../../layouts/single-entity/single-entity.layout';

export default function EntityIndexPage(entity: FieldDefinition) {
  const store = useEntityStore();

  if (entity) {
    store.pushEntity(entity);
  }

  return <SingleEntityLayout />;
}

export async function getStaticPaths() {
  const paths: { params: { id: string } }[] = [];

  fields.forEach((_, index) => {
    paths.push({ params: { id: index.toString() } });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      entity: fields[0],
    },
  };
}
