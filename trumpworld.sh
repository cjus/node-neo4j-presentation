# docker pull markhneedham/neo4j-3.1-trumpworld
# docker rm -f neo4j
docker run --publish=7474:7474 --publish=7687:7687 --name=neo4j markhneedham/neo4j-3.1-trumpworld
