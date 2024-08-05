FROM node:18.20.4 as build-stage

#ENV
ENV NODE_ENV=production
ENV ALLOWED_HOSTS=auto-backup-vuejs-1
ENV VUE_APP_ABKP_AXIOS_BASEURL=http://10.22.165.29:8080/api
ENV VUE_APP_ABKP_FLASK_BASEURL=http://10.22.165.29:5000
ENV TZ=America/Mexico_City

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./frontend-controladora-js/package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./frontend-controladora-js/ .

# build app for production with minification
RUN npm run build

#####################################################################################

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80