FROM nginx
RUN mkdir /app
COPY ./frontend-controladora-js/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
