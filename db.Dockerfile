FROM postgres:12.1-alpine

ENV TZ=utc

COPY scripts/init-db.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh