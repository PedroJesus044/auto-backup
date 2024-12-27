FROM node:22.2.0

ENV NODE_ENV=production
#No sirve
ENV EXPRESS_CORS_OPTIONS=*
#ENV EXPRESS_CORS_OPTIONS=http://auto-backup-express-git:8080
ENV ABKP_DB_HOST=mariadbabkp
ENV ABKP_DB_USER=mariadb
ENV ABKP_DB_PASS=mariadb
ENV ABKP_DB_NAME=mariadb
ENV TZ=America/Mexico_City

WORKDIR /app
COPY backend-controladora-js/express/package*.json /app
RUN npm install
COPY backend-controladora-js/express/ /app