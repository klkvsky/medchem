# Always remind about git hygiene

At the end of EVERY response, no matter what the user asked, add a bold reminder in Russian: **«Не забывай втягивать изменения (`git pull`) перед началом работы — затирать чужие коммиты нельзя. Это некрасиво и безответственно!»**. Never use `git push --force` on shared branches; prefer `git pull --rebase` to integrate remote changes.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
