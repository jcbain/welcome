FROM node:12-alpine
COPY . /app/backend
WORKDIR /app/backend
EXPOSE 8000
RUN yarn
CMD ["yarn", "start"]