const fs = require('fs');
const path = require('path');

const files = [
  'src/components/ServiceAreas/ServiceAreaCard.jsx',
  'src/components/ServiceAreas/ServiceAreas.jsx',
  'src/components/home/AboutSnippet.jsx',
  'src/components/home/FaqSection.jsx',
  'src/components/home/GallerySnippet.jsx',
  'src/components/home/ServicesSnippet.jsx',
  'src/components/home/StatsCounter.jsx',
  'src/components/home/Testimonials.jsx',
  'src/components/home/WhyChooseUs.jsx',
  'src/pages/About.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Gallery.jsx',
  'src/pages/ServiceAreas.jsx',
  'src/pages/Services.jsx',
];

files.forEach((f) => {
  const fullPath = path.join(__dirname, '..', f);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Replace import: { motion } -> { m }
  content = content.replace(
    /import \{ motion \} from 'framer-motion'/g,
    "import { m } from 'framer-motion'"
  );
  // Replace import: { motion, useSpring, useTransform } -> { m, useSpring, useTransform }
  content = content.replace(
    /import \{ motion, useSpring, useTransform \} from 'framer-motion'/g,
    "import { m, useSpring, useTransform } from 'framer-motion'"
  );
  // Replace JSX usage: <motion. -> <m.  and </motion. -> </m.
  content = content.replace(/<motion\./g, '<m.');
  content = content.replace(/<\/motion\./g, '</m.');
  // Also handle motion. in non-JSX (e.g. motion.span used inline)
  content = content.replace(/motion\.span/g, 'm.span');

  fs.writeFileSync(fullPath, content);
  console.log('Updated:', f);
});

console.log('Done!');
