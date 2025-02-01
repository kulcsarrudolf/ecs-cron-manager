export interface RouteDefinition {
  path: string;
  requestMethod: 'get' | 'post' | 'put' | 'delete';
  methodName: string;
  middlewares?: Function[];
}

export interface ControllerDefinition {
  path: string;
  target: any;
}

export const controllers: ControllerDefinition[] = [];
export const routes: Map<any, RouteDefinition[]> = new Map();
