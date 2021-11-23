import React from 'react';
import { FieldDefinition } from '../../../lib/entity.definition';
import { useEntityStore } from '../../../lib/entity.store';

import { fields } from '../../layouts/single-entity/single-entity.config';

import { MultipleEntitiesLayout } from '../../layouts/multiple-entities/multiple-entities';

export default function EntityIndexPage({ entities }: { entities: FieldDefinition[] }) {
  const store = useEntityStore();

  entities.forEach((entity) => store.pushEntity(entity));

  return <MultipleEntitiesLayout />;
}

export async function getStaticProps() {
  return {
    props: {
      entities: fields,
    },
  };
}
