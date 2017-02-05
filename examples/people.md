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
