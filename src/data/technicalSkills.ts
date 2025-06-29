const data = [
  { file: "html-5.svg", name: "HTML 5", category: "frontend" },
  { file: "css-3.svg", name: "CSS 3", category: "frontend" },
  { file: "javascript.svg", name: "JavaScript", category: "frontend" },
  { file: "react.svg", name: "React", category: "frontend" },
  { file: "bootstrap.svg", name: "Bootstrap", category: "frontend" },
  { file: "cpp.svg", name: "C++", category: "language" },
  { file: "dart.svg", name: "Dart", category: "language" },
  { file: "django.svg", name: "Django", category: "backend" },
  { file: "express-js.svg", name: "Express.js", category: "backend" },
  { file: "figma.svg", name: "Figma", category: "others" },
  { file: "flutter.svg", name: "Flutter", category: "frontend" },
  { file: "java.svg", name: "Java", category: "language" },
  { file: "laravel.svg", name: "Laravel", category: "backend" },
  { file: "mongodb.svg", name: "MongoDB", category: "backend" },
  { file: "mysql.svg", name: "MySQL", category: "backend" },
  { file: "node-js.svg", name: "Node.js", category: "backend" },
  { file: "photoshop-cc.svg", name: "Photoshop CC", category: "others" },
  { file: "php.svg", name: "PHP", category: "backend" },
  { file: "python.svg", name: "Python", category: "language" },
  { file: "tailwind-css.svg", name: "Tailwind CSS", category: "frontend" },
  { file: "typescript.svg", name: "TypeScript", category: "frontend" },
];

const skillsData = {
  frontEnd: data.filter((skill) => skill.category === "frontend"),
  backEnd: data.filter((skill) => skill.category === "backend"),
  language: data.filter((skill) => skill.category === "language"),
  others: data.filter((skill) => skill.category === "others"),
};

const getTechSkills = () => {
  return skillsData;
};

export default getTechSkills;
