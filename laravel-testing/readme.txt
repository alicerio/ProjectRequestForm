Database name: interactiveform
server: localhost
username: root


Creates two tables. One for the Project Cost Information and the other for
Project Readiness Elements.

php artisan serve - Enables Laravel Server (127.0.0.1:8000)

Project Cost Information - 127.0.0.1:8000/ProjectCostInformation/create

Project Readiness Elements - 127.0.0.1:8000/ProjectReadinessElements/create


Created and Modified Files: 

app/Http/Controllers/ProjectCostInformationController.php
app/Http/Controllers/ProjectReadinessElementsController.php
app/ProjectCostInformation.php
app/ProjectReadinessElements.php

config/database.php

database/migrations/2020_04_24_175336_create_project_cost_information_table.php
database/migrations/2020_04_24_214806_create_project_readiness_elements_table.php

resources/views/ProjectCostInformation/create.blade.php
resources/views/ProjectReadinessElements/create.blade.php
resources/views/master.blade.php

routes/web.php

.env

