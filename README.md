# liam-bond.github.io

My project site, built with Jekyll and GitHub Pages. Everything below can be done on github.com in a browser.

## Where things live

| What | Where |
| --- | --- |
| One file per project | `_projects/` (for example `_projects/samurai.md`) |
| One file per job | `_log/<project>/` (for example `_log/samurai/ignition-timing.md`) |
| Photos for a job | `images/<project>/<job>/` (for example `images/samurai/ignition-timing/`) |
| Site name and tagline | `_config.yml` |
| Colors, fonts, spacing | `assets/css/site.css` |
| Page designs | `_layouts/` and `_includes/` |

The job file name and its photo folder name must match: `_log/samurai/ignition-timing.md` shows the photos in `images/samurai/ignition-timing/`.

## Add a job

1. Go to `_log/samurai/`, click **Add file → Create new file**, and name it something short, lowercase, with dashes instead of spaces, like `job-name.md`.
2. Paste this in and fill it out (the date is the day you did the job, written YYYY-MM-DD):

   ```markdown
   ---
   title: What you did
   date: 2026-10-09
   ---
   Write what you did here. Blank lines start new paragraphs.
   ```

3. Click **Commit changes**.

The `title` and `date` lines are the only required parts. Everything under the second `---` is up to you.

## Add photos to a job

1. On your computer, put the photos in a folder named exactly like the job file, without `.md` (for `job-name.md`, the folder is `job-name`).
2. On GitHub, go to `images/samurai/`, click **Add file → Upload files**, and drag the whole folder in.
3. Click **Commit changes**.

Photos show up on the job page in file-name order, and the first few appear on the project page. JPG, PNG, WebP and GIF work. iPhone HEIC photos won't show in most browsers, so export them as JPG first. Resizing photos to about 2000 pixels wide before uploading keeps pages fast; GitHub's browser upload limit is 25 MB per file.

## Publish the starter entries

`spark-plugs.md`, `radiator-coolant.md` and `ignition-timing.md` in `_log/samurai/` are hidden until you finish them. For each one: open it, click the pencil icon, remove the `#` in front of `date:` and fill in the date, write your notes, delete the `published: false` line, and commit.

## Add a new project

1. Create `_projects/<name>.md`, for example `_projects/my-project.md`:

   ```markdown
   ---
   title: Project name
   year: Year or date range
   summary: One line that shows on the home page.
   order: 2
   ---
   Optional longer intro for the top of the project page.
   ```

2. Add its first job at `_log/<name>/<job>.md` (typing `_log/my-project/first-job.md` as the file name creates the folder).
3. Put photos in `images/<name>/<job>/`.

`year`, `summary` and `order` are optional. `order` sets the order on the home page, lowest first.

## Cover photos

A project uses the first photo of its newest job as its cover. To pick one yourself, upload a photo named `cover.jpg` to `images/<project>/`.

## Change the look

- Site name and tagline: `_config.yml`.
- Colors: the list at the top of `assets/css/site.css`. Change a value there and every page updates.
- Page structure: `_layouts/default.html` (header and footer on every page), `_layouts/project.html`, `_layouts/entry.html`, and `index.html` for the home page.

## After you commit

GitHub rebuilds the site automatically. The **Actions** tab shows the build; once it has a green check, refresh the site. If a build fails, the error usually points at the file with a typo, often a missing `---` line or a bad date.

## Markdown cheat sheet

```markdown
## A heading
**bold**, *italic*, [a link](https://example.com)

- a bulleted list
- another item

1. a numbered step
2. another step

| Part | Number |
| --- | --- |
| Spark plug | (part number) |
```

The fonts are Archivo, used under the SIL Open Font License (`assets/fonts/OFL.txt`).
