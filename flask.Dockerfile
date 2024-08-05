FROM python:3.11.5

WORKDIR /usr/src/app
RUN mkdir identities
RUN mkdir log
RUN touch log/log_general.log

COPY python-executor/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./python-executor/Flask/ .
