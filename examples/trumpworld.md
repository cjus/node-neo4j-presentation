# Trump World Cypher Queries

#### 20,000 foot view

```
MATCH (n1)-[r]->(n2) RETURN r, n1, n2
```

#### Follow the money

```
MATCH (bank:Organization)--(other)
WHERE bank.name contains "BANK"
RETURN *
```

#### Most connected organizations

```
MATCH (o:Organization)-[r]-()
RETURN o.name, count(*), collect(distinct type(r)) AS types
ORDER BY count(*) DESC
LIMIT 5
```

#### Trump and Putin

```
MATCH (vp:Person {name:"VLADIMIR PUTIN"}),(dt:Person {name:"DONALD J. TRUMP"})
MATCH path = allShortestPaths( (vp)-[*]-(dt) )
RETURN path
```
