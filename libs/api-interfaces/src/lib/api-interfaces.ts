export interface BaseEntity {
  id: string | null;
}
export interface Cell extends BaseEntity {
  title: string;
  description: string;
  componentName: string;
  remoteName: string;
  uri: string;
  module: string;
  published: boolean;
  healthy: boolean;
  visible: boolean;
}

export type CellOptions = LoadRemoteModuleOptions & {
  title: string;
  componentName: string
};

export type LoadRemoteModuleOptions = {
  uri: string;
  remoteName: string;
  module: string;
};