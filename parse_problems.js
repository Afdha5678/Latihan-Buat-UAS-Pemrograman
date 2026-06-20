import fs from 'fs';
import path from 'path';

const problemsDir = 'c:\\Users\\Afdha\\OneDrive\\Documents\\UAS_Pemrograman\\Problems_Scala';
const outputFile = 'c:\\Users\\Afdha\\OneDrive\\Documents\\UAS_Pemrograman\\scala-judge-app\\src\\data.js';

const files = fs.readdirSync(problemsDir).filter(f => f.endsWith('.txt'));

let problemsData = [];

// Materi referensi yang tersedia
const allMaterials = [
  'KOM120C - K09 - FUNCTIONAL (1).pdf',
  'KOM120C - K10 - HOF - STUDENT.pdf',
  'KOM120C - K10 - HOF2 - STUDENT.pdf',
  'KOM120C - K12 - CONTAINER - STUDENT.pdf',
  'KOM120C - K13 - CONTAINER CONT - STUDENT.pdf',
  'KOM120C - K14 - OOPScala.pdf',
  'KOM120C - K15 - ScalaJava - STUDENT.pdf'
];

files.forEach((file, index) => {
  const content = fs.readFileSync(path.join(problemsDir, file), 'utf-8');
  const lines = content.split('\n').map(l => l.trim());
  
  const title = lines[0] || file;
  const idMatch = title.match(/^([0-9A-Z]+)/);
  const id = idMatch ? idMatch[1] : `ID${index}`;
  
  let timeLimit = '1 s';
  let memoryLimit = '256 MB';
  
  const tlLine = lines.find(l => l.startsWith('Time limit'));
  if (tlLine) timeLimit = tlLine.replace('Time limit', '').trim();
  
  const mlLine = lines.find(l => l.startsWith('Memory limit'));
  if (mlLine) memoryLimit = mlLine.replace('Memory limit', '').trim();

  let descStart = lines.findIndex(l => l.startsWith('Deskripsi'));
  let inputStart = lines.findIndex(l => l.startsWith('Contoh Masukan 1') || l.startsWith('Masukan'));
  let outputStart = lines.findIndex(l => l.startsWith('Contoh Keluaran 1') || l.startsWith('Keluaran'));
  
  let endDesc = inputStart !== -1 ? inputStart : lines.length;

  let description = '';
  if (descStart !== -1) {
    description = lines.slice(descStart + 1, endDesc).join('\n').trim();
  } else {
    description = lines.slice(3, endDesc).join('\n').trim();
  }

  let inputExample = '';
  if (inputStart !== -1) {
    let nextSect = outputStart !== -1 ? outputStart : lines.length;
    inputExample = lines.slice(inputStart + 1, nextSect).join('\n').trim();
  }

  let outputExample = '';
  if (outputStart !== -1) {
    let submitStart = lines.findIndex(l => l.startsWith('Submit solution') || l.startsWith('Contoh Masukan 2'));
    let nextSect = submitStart !== -1 ? submitStart : lines.length;
    outputExample = lines.slice(outputStart + 1, nextSect).join('\n').trim();
  }

  let refMat = allMaterials[0];
  if (id.startsWith('10')) refMat = allMaterials[1];
  else if (id.startsWith('12') || id.startsWith('13')) refMat = allMaterials[3];
  else if (id.startsWith('14')) refMat = allMaterials[5];
  else if (id.startsWith('15')) refMat = allMaterials[6];

  const referenceMaterials = [
    { name: refMat, type: 'PDF' }
  ];

  problemsData.push({
    id,
    title,
    timeLimit,
    memoryLimit,
    description,
    constraints: 'Perhatikan batasan tipe data pada bahasa Scala. Hindari penggunaan var apabila soal meminta fungsional (Pure Functions).',
    inputExample,
    outputExample,
    referenceMaterials
  });
});

const dataContent = `export const problemsData = ${JSON.stringify(problemsData, null, 2)};\n\nexport const allMaterials = ${JSON.stringify(allMaterials, null, 2)};\n`;

fs.writeFileSync(outputFile, dataContent);
console.log('Berhasil mengonversi semua 18 soal ke data.js');
