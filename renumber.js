const fs = require('fs');

const dataJsPath = './src/data.js';
let content = fs.readFileSync(dataJsPath, 'utf-8');

// 1. Find all `id: X,` and map them
const idRegex = /id:\s*(\d+),/g;
let match;
let currentNewId = 1;
const idMap = {}; // old_id -> new_id

while ((match = idRegex.exec(content)) !== null) {
    const oldId = parseInt(match[1]);
    idMap[oldId] = currentNewId++;
}

// 2. Replace `id: X,` with `id: new_id,`
content = content.replace(/id:\s*(\d+),/g, (match, oldIdStr) => {
    const oldId = parseInt(oldIdStr);
    return `id: ${idMap[oldId]},`;
});

// 3. Replace `related: [X, Y]` with `related: [new_X, new_Y]`
// Note: related usually looks like `related: [8],` or `related: [1, 2],`
content = content.replace(/related:\s*\[(.*?)\]/g, (match, inner) => {
    if (!inner.trim()) return match;
    const oldRelatedIds = inner.split(',').map(s => parseInt(s.trim()));
    const newRelatedIds = oldRelatedIds.map(old => idMap[old] || old);
    return `related: [${newRelatedIds.join(', ')}]`;
});

fs.writeFileSync(dataJsPath, content, 'utf-8');
console.log("Renumbering complete. ID map:", idMap);
