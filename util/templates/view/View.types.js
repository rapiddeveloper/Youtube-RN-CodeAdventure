module.exports = (componentName) => ({
  content: `// Generated with util/create-view.js
export interface ${componentName}Props {};
export interface ${componentName}ViewProps {};
`,
  extension: `.types.tsx`
});
