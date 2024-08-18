# Demo for VITE-SSG issue with dynamic components

This demo uses Vue's compile method to render HTML strings that contain VUE-components correctly. 

Preview of what is supposed to happen
```
npm run dev
```

✅ Building the project via vite 

```
npm run build
```

❌ Building the project via vite-ssg

```
npm run ssg
```
SyntaxError: Named export 'compile' not found. The requested module 'vue/dist/vue.esm-bundler.js' is a CommonJS module, which may not support all module.exports as named exports.