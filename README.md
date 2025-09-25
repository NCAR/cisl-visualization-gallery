# Visualization Gallery

A refresh of NSF NCAR's Visualization Gallery, showcasing data visualizations on different topics in geoscience in a variety of mediums and in collaboration with scientists.

# Table of Contents
- [How to Run the Website Locally](#how-to-run-the-website-locally)
- [Project Structure](#project-structure)
- [Guide to Site Layout and Components](#guide-to-site-layout-and-components)
- [Contributor Guide](#contributor-guide)
  - [Adding a Post](#adding-a-post)
  - [Markdown Content Options](#markdown-content-options)
  - [Advanced Editing](#advanced-editing)

# How to Run the Website Locally

1. [Install Git if needed.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Install Node.js and npm if needed.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Clone this repository. For example, run `git clone https://github.com/NCAR/cisl-visualization-gallery.git` in your terminal.
4. Navigate to the folder that you cloned the project into: `cd project-name`.
5. Run the command `npm install` in your terminal to install all necessary dependencies.
6. Run the command `npm run build` in your terminal to create a build directory and index pages for the search functionality.
7. Run the command `npm run dev` in your terminal in order to start the local server.
8. You should see a message in the terminal that the site is now running at a link, likely http://localhost:4321/. Open this link in a web browser.
9. You can now see any local edits you make to the site in live time.

# Project Structure

This site is built with [Astro](https://astro.build/), a content-driven web framework that can be used for static site generation. See documentation [here](https://docs.astro.build).  

```text
/
├── public/                           # Holds static assets such as logos.
│
├── src/                              # Astro processes, optimizes, and bundles these src/ files to create the final website shipped to the browser.
│   │
│   ├── assets/                       # Holds most of the site's images and other assets. Astro automatically optimizes image loading from this folder by configuring size and resolution at build time.
│   │
│   ├── components/                   # Holds site components. Each file is a reusable unit of HTML, CSS, and JavaScript for a piece of the website interface.
│   │
│   ├── content/                      # Reserved project directory for content collections. Also holds config file that defines the schema for each collection.
│   │   │
│   │   └── visualizations/           # Content collection for visualization posts. Each markdown page in this folder is automatically rendered in the frontend and exposed as a route based on its file name.
│   │
│   ├── templates/                    # Holds markdown file templates.
│   │
│   ├── pages/                        # Reserved project directory for site pages. Holds one Astro file for each page of the website (index, about, and [...slug] for each visualization page.)
│   │
│   └── styles/                       # Holds global css stylesheet.
│
├── astro.config.mjs                  # Generated in every starter template and includes configuration options for the Astro project (specify integrations to use, build options, server options, and more).
│
├── package-lock.json                 # Keeps track of exact dependency trees at any given time.
│
└── package.json                      # A file used by JavaScript package managers to manage dependencies. It also defines the scripts that are commonly used to run Astro (ex: npm start, npm run build)
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Guide to Site Layout and Components

Most of the website code is located in `src/components`. Each `.astro` file in this folder contains the HTML, CSS, and JavaScript for a component of a website (aka a piece of the interface). 

![Overview of components on the home page](public/HomeComponents.png)
![Overview of components on the visualization pages](public/PostComponents.png)

# Contributor Guide

This site uses [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) in order to generate webpages from Markdown files.

## Adding a Post

The basic steps for adding a new visualization to the website are as follows:
1. Make a copy of the template for a new post;
2. Fill out the template;
3. Upload the file to `src/content/visualizations`;
4. Preview the new page locally.
5. Commit and push your changes to Github.

This will automatically generate a new page on the website as well as a new card in the gallery on the front page. See below for an explanation of each step.

### 1. Make a Copy of the Template for a New Post

The template for a new post can be found at `src/templates/PostTemplate.md`. Make a copy of this Markdown file and open the copy in a text editor of your choice.

### 2. Fill Out the Template

Once you have your new copy open, follow the prompts from the template to fill out the file with your post's information. 

Upload any image files associated with your post to `src/assets`. While there is no restriction on the file names in this folder, using the same name as your markdown file allows for easier organization.

The first section of the template file (contained within code fences, aka three hyphens `---`) is YAML frontmatter. The properties in this section are all required unless noted otherwise and are shared among all posts, specified in `src/content/config.js`. This allows us to specify metadata for each post that are then accessible from the frontend.

The rest of the file is all regular Markdown - everything that is written here will appear in the frontend on the post's page. Some example headings and content are provided as reference, but these can all be deleted or edited as needed.

Before moving on to the next step, make sure to rename the file. The name of your file will be its URL, so for best practices, use all lowercase, separate words with hyphens, and avoid special characters. For example, a file named `wind-speed.md` would be accessed at `https://ncar.github.io/cisl-visualization-gallery/visualizations/wind-speed/`.

### 3. Upload the File to `src/content/visualizations`

After renaming the file, ensuring all required properties have been filled out, and checking that any template instructions outside of the frontmatter have been deleted, save your file and upload it to the `src/content/visualizations` folder.

### 4. Preview the New Page Locally

While the previous steps are the only necessary ones in order to add a new page, you may want to preview the page before committing your changes. You can run the site locally on your computer to check any changes you've made before uploading by following the steps described in [How to Run the Website Locally](#how-to-run-the-website-locally).

### 5. Commit and Push Your Changes to Github

Make sure you've saved your changes to all files you may have edited. Then, in your terminal (opening a new terminal window if necessary), navigate to the project folder using `cd`. Then, type in the terminal `git commit -a -m "message briefly describing what you changed here"` and enter. To push your changes, type `git push origin master` and enter. If you need permission to make changes to the repo, reach out to site admin. 
