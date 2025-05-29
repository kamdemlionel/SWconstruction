FROM node:23.11.1
WORKDIR /studio-master
COPY . /studio-master
RUN npm install
CMD ["npm", "run", "dev"]

