import { routes, RouteDefinition } from './metadata';

/**
 * Factory function to create HTTP method decorators dynamically.
 */
function createRouteDecorator(method: 'get' | 'post' | 'put' | 'delete') {
  return (path: string): MethodDecorator => {
    return (target, methodName) => {
      if (!routes.has(target.constructor)) {
        routes.set(target.constructor, []);
      }

      routes.get(target.constructor)?.push({
        path,
        requestMethod: method,
        methodName: methodName as string,
      });
    };
  };
}

export const Get = createRouteDecorator('get');
export const Post = createRouteDecorator('post');
export const Put = createRouteDecorator('put');
export const Delete = createRouteDecorator('delete');
