web: java $JAVA_OPTS -Xmx256m -jar target/*.war --spring.profiles.active=$SPRING_PROFILES_ACTIVE --server.port=$PORT 
release: cp -R src/main/resources/config config && ./mvnw liquibase:update -Pheroku
