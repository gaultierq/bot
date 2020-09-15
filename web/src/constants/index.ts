export enum Routes {
  HOME = '/',

  BOT_LIST = '/bot/index',
  BOT_CREATE = '/bot/new',
  BOT_EDIT = '/bot/:id/edit',
  BOT_RUN = '/bot/:id/run',

  INTERACTION_LIST = '/bot/:botId/interaction/index',
  INTERACTION_CREATE = '/bot/:botId/interaction/new',
  INTERACTION_EDIT = '/bot/:botId/interaction/:id/edit',
}
