import { routes } from './metadata';

/**
 * @Middleware(middlewareFn)
 * Attaches a middleware function to a specific route.
 */
export function Middleware(middlewareFn: Function): MethodDecorator {
  return (target, methodName) => {
    const routeList = routes.get(target.constructor);
    if (routeList) {
      const route = routeList.find((r: { methodName: string | symbol }) => r.methodName === methodName);
      if (route) {
        route.middlewares = route.middlewares || [];
        route.middlewares.push(middlewareFn);
      }
    }
  };
}
