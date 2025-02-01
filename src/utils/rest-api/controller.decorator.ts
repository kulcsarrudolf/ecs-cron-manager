import { controllers } from './metadata';

export function Controller(path: string): ClassDecorator {
  return (target) => {
    controllers.push({ path, target });
  };
}
