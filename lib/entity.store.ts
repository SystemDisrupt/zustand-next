import create from 'zustand';
import { produce } from 'immer';
import { FieldDefinition } from './entity.definition';

export type EntityStore = {
  entities: FieldDefinition[];
  selectedEntity?: string;
  setSelectedEntity: (identifier: string) => void;
  clearSelectedEntity: () => void;
  pushEntity: (entity: any) => void;
};

export const useEntityStore = create<EntityStore>((set) => ({
  entities: [],
  selectedEntity: undefined,
  pushEntity: (entity: any) => {
    set(
      produce((state: EntityStore) => {
        const found = state.entities.find((x: any) => x.id === entity.id);
        if (!found) {
          state.entities.push(entity);
        }
      }),
    );
  },
  setSelectedEntity: (identifier: string) => {
    set(
      produce((state: EntityStore) => {
        state.selectedEntity = identifier;
      }),
    );
  },
  clearSelectedEntity: () => {
    set(
      produce((state: EntityStore) => {
        state.selectedEntity = undefined;
      }),
    );
  },
}));
