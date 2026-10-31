
# Next.js SSR Lab 6

## Course
SED-312 Advanced Web Engineering

## Objective
Implement Server-Side Rendering (SSR) in Next.js
and compare SSR, CSR, and SSG.

## Technologies Used
- Next.js
- React
- JavaScript
- Node.js
- JSONPlaceholder API

## Features
- Basic SSR page with random jokes
- Dynamic SSR page using post IDs
- Client-Side Rendering (CSR)
- Static Site Generation (SSG)

## How to Run
1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open http://localhost:3000

## Routes
- /basic-ssr
- /ssr/1
- /ssr/2
- /csr
- /ssg

## Rendering Comparison
SSR generates HTML on the server for each request.
CSR loads data in the browser after the initial render.
SSG generates HTML during the build process.

## Suitable Use Cases
SSR: Dynamic and frequently updated content.
CSR: Interactive applications and dashboards.
SSG: Blogs, documentation, and static websites.

## Conclusion
This project demonstrates different rendering
strategies in Next.js and their appropriate use cases.
