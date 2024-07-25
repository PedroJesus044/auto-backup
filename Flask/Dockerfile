FROM ubi8/python-311

# Add application sources with correct permissions for OpenShift
USER 0
#RUN dnf install -y curl
RUN curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash
RUN yum install -y libmariadb3 libmariadb-dev
ADD . .
RUN chown -R 1001:0 ./
USER 1001

ENV FLASK_APP=main
ENV FLASK_ENV=development
#Cors options
#- FLASK_CORS_OPTIONS='*'
ENV FLASK_CORS_OPTIONS=*,http://localhost:8080,https://localhost:8080,http://auto-backup-vuejs-1:8081,http://10.22.165.29:8081,http://10.22.165.29:5000
ENV ABKP_DB_HOST=mariadbabkp
ENV ABKP_DB_USER=mariadb
ENV ABKP_DB_PASS=mariadb
ENV ABKP_DB_NAME=mariadb
ENV TZ=America/Mexico_City

# Install the dependencies
RUN pip install -U "pip>=19.3.1" && \
    pip install -r requirements.txt && \
    python manage.py collectstatic --noinput && \
    python manage.py migrate

EXPOSE 5000

# Run the application
CMD flask run --host=0.0.0.0