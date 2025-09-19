const carreras = [
  {
    "imagen": "https://picsum.photos/seed/lic-sistemas/800/500",
    "nombre": "Licenciatura en Sistemas",
    "descripcion": "Formación integral en análisis, diseño y gestión de sistemas de información, con foco en arquitectura de software y gobierno de TI.",
    "alcance_titulo": [
      "Relevar y modelar requerimientos de negocio",
      "Diseñar arquitecturas de software multicapa",
      "Gestionar proyectos con metodologías ágiles",
      "Definir políticas de gobierno de datos",
      "Liderar equipos de desarrollo y soporte"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/lic-informatica/800/500",
    "nombre": "Licenciatura en Informática",
    "descripcion": "Enfoque científico y tecnológico para la resolución de problemas informáticos, desde algoritmia hasta sistemas operativos.",
    "alcance_titulo": [
      "Diseñar algoritmos y estructuras de datos eficientes",
      "Administrar sistemas operativos y servicios",
      "Optimizar desempeño de aplicaciones",
      "Integrar hardware y software en soluciones",
      "Evaluar y seleccionar tecnologías emergentes"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/ing-informatica/800/500",
    "nombre": "Ingeniería en Informática",
    "descripcion": "Orientada al diseño, construcción y validación de sistemas complejos, con fuerte base en ingeniería de software.",
    "alcance_titulo": [
      "Especificar y verificar requisitos formales",
      "Diseñar y auditar procesos de desarrollo",
      "Implementar CI/CD y automatización",
      "Aplicar estándares y normas de calidad",
      "Realizar pruebas de aceptación y validación"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/lic-ciencia-datos/800/500",
    "nombre": "Licenciatura en Ciencia de Datos",
    "descripcion": "Formación en estadística, programación y machine learning para transformar datos en decisiones.",
    "alcance_titulo": [
      "Construir pipelines de datos reproducibles",
      "Aplicar modelos de ML supervisados y no supervisados",
      "Comunicar hallazgos con visualizaciones efectivas",
      "Gestionar la calidad y linaje de datos",
      "Desplegar modelos en producción (MLOps)"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-programacion/800/500",
    "nombre": "Tecnicatura Universitaria en Programación",
    "descripcion": "Base sólida en programación, patrones y buenas prácticas para desarrollo de software.",
    "alcance_titulo": [
      "Programar aplicaciones web y de escritorio",
      "Aplicar patrones de diseño fundamentales",
      "Versionar y colaborar con Git",
      "Escribir pruebas unitarias y de integración",
      "Consumir e integrar APIs REST"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-desarrollo-web/800/500",
    "nombre": "Tecnicatura en Desarrollo Web",
    "descripcion": "Stack front-end y back-end para construir sitios y aplicaciones web modernas.",
    "alcance_titulo": [
      "Maquetar interfaces responsivas",
      "Desarrollar SPAs y SSR",
      "Diseñar y consumir APIs",
      "Administrar sesiones y autenticación",
      "Optimizar performance y SEO técnico"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-ciberseguridad/800/500",
    "nombre": "Tecnicatura en Ciberseguridad",
    "descripcion": "Seguridad ofensiva y defensiva, gestión de vulnerabilidades y cumplimiento.",
    "alcance_titulo": [
      "Implementar controles de seguridad en sistemas",
      "Realizar hardening y gestión de parches",
      "Monitorear incidentes (SIEM/SOC)",
      "Aplicar criptografía en tránsito y reposo",
      "Asistir en auditorías de cumplimiento"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-ia/800/500",
    "nombre": "Tecnicatura en Inteligencia Artificial",
    "descripcion": "Fundamentos prácticos de IA, desde modelos clásicos hasta deep learning aplicado.",
    "alcance_titulo": [
      "Preprocesar y etiquetar datos para ML",
      "Entrenar modelos y evaluar métricas",
      "Implementar inferencia en producción",
      "Aplicar ética y IA responsable",
      "Optimizar costos y latencia de inferencia"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-analisis-datos/800/500",
    "nombre": "Tecnicatura en Análisis de Datos",
    "descripcion": "Herramientas y técnicas de análisis para dashboards e insights accionables.",
    "alcance_titulo": [
      "Modelar datos para BI",
      "Construir tableros interactivos",
      "Definir KPIs y OKRs de negocio",
      "Aplicar técnicas de segmentación",
      "Documentar y presentar resultados"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-redes/800/500",
    "nombre": "Tecnicatura en Redes y Telecomunicaciones",
    "descripcion": "Diseño, implementación y operación de redes de computadoras y servicios asociados.",
    "alcance_titulo": [
      "Configurar routers, switches y VLANs",
      "Diseñar topologías seguras y escalables",
      "Monitorear disponibilidad y rendimiento",
      "Implementar VoIP y QoS",
      "Gestionar direccionamiento y DNS"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-videojuegos/800/500",
    "nombre": "Tecnicatura en Desarrollo de Videojuegos",
    "descripcion": "Programación de motores, diseño de niveles y producción de juegos multiplataforma.",
    "alcance_titulo": [
      "Programar gameplay y físicas básicas",
      "Integrar assets y audio",
      "Optimizar render y carga",
      "Gestionar versiones y builds",
      "Publicar en tiendas y plataformas"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-devops-cloud/800/500",
    "nombre": "Tecnicatura en DevOps y Cloud",
    "descripcion": "Automatización, contenedores e infraestructura como código en nubes públicas.",
    "alcance_titulo": [
      "Crear pipelines CI/CD",
      "Orquestar contenedores con Kubernetes",
      "Gestionar IaC con Terraform",
      "Implementar monitoreo y alertas",
      "Optimizar costos en la nube"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/lic-gestion-ti/800/500",
    "nombre": "Licenciatura en Gestión de la Tecnología",
    "descripcion": "Gestión estratégica de TI, innovación y transformación digital en organizaciones.",
    "alcance_titulo": [
      "Alinear TI con objetivos de negocio",
      "Gestionar portafolios y roadmaps",
      "Administrar riesgos y continuidad",
      "Evaluar ROI y TCO de proyectos",
      "Liderar procesos de cambio"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-testing/800/500",
    "nombre": "Tecnicatura en Testing de Software",
    "descripcion": "Calidad de software, automatización de pruebas y aseguramiento de producto.",
    "alcance_titulo": [
      "Diseñar casos y planes de prueba",
      "Automatizar pruebas funcionales",
      "Aplicar pruebas de performance",
      "Reportar defectos y métricas de calidad",
      "Integrar pruebas en CI/CD"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-iot/800/500",
    "nombre": "Tecnicatura en Internet de las Cosas (IoT)",
    "descripcion": "Dispositivos conectados, protocolos y plataformas para soluciones IoT.",
    "alcance_titulo": [
      "Prototipar con microcontroladores",
      "Diseñar comunicación MQTT/HTTP",
      "Procesar datos de sensores",
      "Asegurar dispositivos y firmware",
      "Desplegar soluciones edge/cloud"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-robotica/800/500",
    "nombre": "Tecnicatura en Robótica y Automatización",
    "descripcion": "Integración de hardware, control y software para automatizar procesos.",
    "alcance_titulo": [
      "Programar controladores y PLC",
      "Integrar actuadores y sensores",
      "Diseñar celdas de trabajo seguras",
      "Implementar visión por computadora",
      "Mantener robots industriales"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-bases-datos/800/500",
    "nombre": "Tecnicatura en Bases de Datos",
    "descripcion": "Diseño, administración y optimización de bases de datos relacionales y NoSQL.",
    "alcance_titulo": [
      "Modelar esquemas lógicos y físicos",
      "Optimizar consultas e índices",
      "Administrar seguridad y backups",
      "Implementar replicación y HA",
      "Integrar ETL/ELT con herramientas"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-ux-ui/800/500",
    "nombre": "Tecnicatura en UX/UI y Frontend",
    "descripcion": "Investigación de usuarios, diseño de interfaces y desarrollo frontend accesible.",
    "alcance_titulo": [
      "Realizar research y prototipado",
      "Diseñar sistemas de diseño",
      "Implementar componentes accesibles",
      "Medir usabilidad y NPS",
      "Iterar con pruebas con usuarios"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-embebido/800/500",
    "nombre": "Tecnicatura en Software Embebido",
    "descripcion": "Desarrollo de software cercano al hardware para sistemas embebidos y tiempo real.",
    "alcance_titulo": [
      "Programar en C/C++ para microcontroladores",
      "Gestionar recursos y tiempo real",
      "Depurar con herramientas de bajo nivel",
      "Implementar drivers y HAL",
      "Asegurar firmware y OTA updates"
    ]
  },
  {
    "imagen": "https://picsum.photos/seed/tec-bioinformatica/800/500",
    "nombre": "Tecnicatura en Bioinformática",
    "descripcion": "Procesamiento y análisis de datos biológicos con técnicas computacionales.",
    "alcance_titulo": [
      "Manejar secuencias y anotaciones",
      "Aplicar estadística a datos ómicos",
      "Automatizar pipelines reproducibles",
      "Visualizar resultados biológicos",
      "Colaborar en equipos interdisciplinarios"
    ]
  }
]
