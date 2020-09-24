FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY packages/db ./packages/db
COPY packages/graphql ./packages/graphql
COPY packages/utils ./packages/utils

RUN yarn install --pure-lockfile --non-interactive --verbose --network-timeout 1000000000

#WORKDIR /usr/src/app/packages/db
#RUN yarn build

#WORKDIR /usr/src/app/packages/api
#RUN yarn build

FROM build

WORKDIR /usr/src/app

COPY . .
#RUN ls
#COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
#COPY --from=build /usr/src/app/packages/db/node_modules /usr/src/app/packages/db/node_modules
#COPY --from=build /usr/src/app/packages/graphql/node_modules /usr/src/app/packages/graphql/node_modules
#COPY --from=build /usr/src/app/packages/utils/node_modules /usr/src/app/packages/utils/node_modules


ENV NODE_ENV production
WORKDIR /usr/src/app/
#RUN yarn install --pure-lockfile --non-interactive --verbose --production
#RUN yarn generate:prisma
RUN yarn build
EXPOSE 4000

CMD ["yarn", "start"]
