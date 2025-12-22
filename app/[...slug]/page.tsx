15:55:55.730 Running build in Washington, D.C., USA (East) – iad1
15:55:55.731 Build machine configuration: 4 cores, 8 GB
15:55:55.742 Cloning github.com/nextwaveaisuite/clear-skin-site-factory (Branch: main, Commit: 04208e0)
15:55:55.742 Skipping build cache, deployment was triggered without cache.
15:55:55.953 Cloning completed: 211.000ms
15:55:56.304 Running "vercel build"
15:55:56.739 Vercel CLI 50.1.3
15:55:57.039 Installing dependencies...
15:56:09.051 
15:56:09.051 added 122 packages in 12s
15:56:09.051 
15:56:09.051 72 packages are looking for funding
15:56:09.052   run `npm fund` for details
15:56:09.099 Detected Next.js version: 15.5.9
15:56:09.104 Running "npm run build"
15:56:09.291 
15:56:09.291 > clear-skin-australia@0.1.3 build
15:56:09.291 > npm run build:content && next build
15:56:09.291 
15:56:09.419 
15:56:09.420 > clear-skin-australia@0.1.3 build:content
15:56:09.420 > python build.py
15:56:09.420 
15:56:09.486 ✅ Build complete.
15:56:09.486 - Pages generated: 19
15:56:09.486 - Output folder: /vercel/path0/output/pages
15:56:09.486 - Report: /vercel/path0/output/report.json
15:56:10.061 Attention: Next.js now collects completely anonymous telemetry regarding usage.
15:56:10.062 This information is used to shape Next.js' roadmap and prioritize features.
15:56:10.062 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
15:56:10.062 https://nextjs.org/telemetry
15:56:10.062 
15:56:10.148    ▲ Next.js 15.5.9
15:56:10.149 
15:56:10.182    Creating an optimized production build ...
15:56:18.496  ✓ Compiled successfully in 5.9s
15:56:18.498    Linting and checking validity of types ...
15:56:20.459 Failed to compile.
15:56:20.459 
15:56:20.459 app/[...slug]/page.tsx
15:56:20.459 Type error: Type '{ params: { slug?: string[]; }; }' does not satisfy the constraint 'PageProps'.
15:56:20.459   Types of property 'params' are incompatible.
15:56:20.460     Type '{ slug?: string[]; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
15:56:20.460 
15:56:20.482 Next.js build worker exited with code: 1 and signal: null
15:56:20.502 Error: Command "npm run build" exited with 1
