import fs from "fs"
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "list",
      name: "language",
      message: "Qué lenguaje estás usando?",
      choices: ["JavaScript", "TypeScript"],
    },
    {
      type: "confirm",
      name: "template",
      message: "Quieres un template para un proyecto con este lenguaje?",
    },
    {
      type: "input",
      name: "projectName",
      message: "Nombre del proyecto",
      when: (answers) => answers.template,
    },
  ])
  .then((answers) => {
    if (answers.template) {
      const projectName = answers.projectName;
      const language = answers.language;

      // Crear una carpeta con el nombre del proyecto
      fs.mkdirSync(projectName);

      // Crear archivos y escribir configuraciones
      fs.writeFileSync(
        `${projectName}/.prettierrc`,
        JSON.stringify({
          semi: true,
          singleQuote: true,
        })
      );
      fs.writeFileSync(
        `${projectName}/.eslintrc`,
        JSON.stringify({
          extends: ["eslint:recommended"],
        })
      );
      fs.writeFileSync(`${projectName}/index.html`, "<html></html>");
      fs.writeFileSync(`${projectName}/style.css`, " ");
      if (language === "JavaScript") {
        fs.writeFileSync(`${projectName}/index.js`, "console.log('Hello World!')");
      } else {
        fs.writeFileSync(`${projectName}/index.ts`, "console.log('Hello World!')");
        fs.writeFileSync(
          `${projectName}/tsconfig.json`,
          JSON.stringify({
            compilerOptions: {
              target: "es5",
              module: "commonjs",
              outDir: "dist",
            },
          })
        );
        fs.writeFileSync(
          `${projectName}/package.json`,
          JSON.stringify({
            scripts: {
              build: "tsc",
              start: "node dist/index.js",
            },
            dependencies: {
              typescript: "^4.0.0",
            },
          })
        );
      }
      console.log(`El proyecto "${projectName}" ha sido creado con éxito.`);
    } else {
      console.log("No se ha creado ningún proyecto.");
    }
  });