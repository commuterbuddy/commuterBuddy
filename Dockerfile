FROM NODE:11
WORKDIR /usr/src/app
COPY package* ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "prod" ]
