import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { filename } = req.query;
  
  if (!filename) {
    return res.status(400).json({ error: 'Filename required' });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'documents', filename);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Vérifier que c'est un fichier HTML
    if (!filename.endsWith('.html')) {
      return res.status(400).json({ error: 'Only HTML files allowed' });
    }

    // Lire et servir le fichier
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(fileContent);
  } catch (error) {
    console.error('Error serving preview:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
