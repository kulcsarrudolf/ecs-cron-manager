import { Application, Router } from 'express';
import { controllers, routes } from './metadata';

/**
 * Automatically registers controllers and routes in Express.
 */
export function registerRoutes(app: Application): void {
  controllers.forEach(({ path, target }) => {
    const instance = new target();
    const router = Router();
    const routeDefinitions = routes.get(target);

    if (routeDefinitions) {
      routeDefinitions.forEach(({ path: routePath, requestMethod, methodName, middlewares = [] }) => {
        const handler = instance[methodName as keyof typeof instance].bind(instance) as unknown as RequestHandler;
        router[requestMethod](routePath, ...middlewares, handler);
      });
    }

    app.use(path, router);
  });
}
