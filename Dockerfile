FROM node:alpine

WORKDIR /app
ADD ./website-zn.tar  /app/
RUN  yarn config set registry https://registry.npm.taobao.org --global \
&& yarn config set disturl https://npm.taobao.org/dist --global \
&& yarn install

EXPOSE 3000
CMD ["yarn", "run", "start"]

