# People Graph

## Create People

```
CREATE (:Person {name:"Tom", age:29, interest:"chess"})
CREATE (:Person {name:"Alex", age:34, interest:"parties"})
CREATE (:Person {name:"Susan", age:22, interest:"dance"})
CREATE (:Person {name:"Bill", age:60, interest:"golf"})
CREATE (:Person {name:"Jane", age:40, interest:"business"})
```

## Create Relationships

```
MATCH (p1:Person {name:"Tom"}), (p2:Person {name:"Alex"})
CREATE (p1)-[:Knows {since:"20010214"}]->(p2)
```

```
MATCH (p1:Person {name:"Alex"}), (p2:Person {name:"Susan"})
CREATE (p1)-[:Knows {since:"20021202"}]->(p2)
```

```
MATCH (p1:Person {name:"Alex"}), (p2:Person {name:"Bill"})
CREATE (p1)-[:Knows {since:"20000318"}]->(p2)
```

```
MATCH (p1:Person {name:"Susan"}), (p2:Person {name:"Bill"})
CREATE (p1)-[:Knows {since:"19990208"}]->(p2)
```

```
MATCH (p1:Person {name:"Bill"}), (p2:Person {name:"Jane"})
CREATE (p1)-[:Knows {since:"20100716"}]->(p2)
```

## Presentation queries

### Finding Alex

```
MATCH (p:Person {name: "Alex"})
RETURN p;
```

### Everyone
```
MATCH (p:Person)
RETURN p;
```

### Alex and Susan
```
MATCH (p1:Person {name: "Alex"})-[r:Knows]-(p2:Person {name: "Susan"})
RETURN p1, r, p2;
```

### Alex's friends

```
MATCH (p1:Person {name: "Alex"})-[r:Knows]-(p2:Person)
RETURN p1, r, p2;
```

### Alex in bar

```
MATCH (p1:Person)-[]-(p2:Person)
RETURN p1, p2;
```

### Susan and business advisor

```
MATCH (p1:Person {name: "Susan"})-[r:Knows*2]-(p2:Person {interest: "business"})
RETURN p1, r, p2;
```
