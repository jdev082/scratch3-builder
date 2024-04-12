/* 
   ScratchForge "makeweb"
   Builds a Scratch game into an HTML page
*/

const Packager = require('@turbowarp/packager');
const fs = require('fs');

let writeHtmlLocal = async (r, o="out.html") => {
   fs.writeFile(o, r.data, (error) => {
      console.log(`ERR: ${error}`)
   })
   return;
}

let mkHtmlLocal = async (f="project.sb3", o) => {
   const projectData = fs.readFileSync(f);
   const loadedProject = await Packager.loadProject(projectData);
   const packager = new Packager.Packager();
   packager.project = loadedProject;
   const result = await packager.package();
   writeHtmlLocal(result, o);
   return;
}

if (process.argv.length === 2) {
   console.error('ERR: Expected at least one argument!');
   process.exit(1);
 }

mkHtmlLocal(process.argv[2], process.argv[3])
