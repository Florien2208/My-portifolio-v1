export interface StackCategory {
  title: string;
  subTitle: string;
  items: string[];
}

export const categories: StackCategory[] = [
  {
    title: "Backend",
    subTitle: "Technology",
    items: ["Python", "Node JS", "Express JS", "REST", "GraphQL"],
  },
  {
    title: "Frontend",
    subTitle: "Basics",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Database",
    subTitle: "SQL",
    items: ["PostgreSQL", "MySQL", "Redis", "MS-SQL Server", "SQLite"],
  },
  {
    title: "DevOps",
    subTitle: "Infrastructure",
    items: ["AWS/GCP", "GitLab", "GitHub", "Nginx", "AgileMethodologies"],
  },
  {
    title: "Backend",
    subTitle: "Frameworks",
    items: ["Django", "Flask", "FastAPI", "Sanic", "React JS", "Next JS"],
  },
  {
    title: "Frontend",
    subTitle: "Frameworks",
    items: ["React JS", "Next JS", "Django", "FastAPI", "Flask", "Sanic"],
  },
  {
    title: "Database",
    subTitle: "NoSQL",
    items: [
      "Mongo DB",
      "Maria DB",
      "Apache Cassandra",
      "CouchDB",
      "ElasticSearch",
      "Neo4j",
    ],
  },
  {
    title: "DevOps",
    subTitle: "Virtualization",
    items: [
      "Docker",
      "VMWare",
      "Oracle VirtualBox",
      "Kubernetes",
      "Amazon",
      "Hyper-V",
    ],
  },
];
