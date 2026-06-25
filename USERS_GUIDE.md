# 👥 CV Content Update Guide

A quick reference guide for modifying the CV content and configuring the app.

## 📁 File Reference

All CV details are stored inside the `apps/web/users/razvan/` directory:

| File               | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| `index.ts`         | Stitches all sections together. Contains name, email, phone, bio, and SEO keywords. |
| `EXPERIENCES.ts`   | Detailed work history including responsibilities and technologies used.             |
| `PROJECTS.ts`      | Selected project showcase (titles, tech badges, links, descriptions).               |
| `SKILLS.ts`        | Skills mapped to years of experience (from 0 to 15 years).                          |
| `EDUCATIONS.ts`    | Coursework, certifications, and university degrees.                                 |
| `LANGUAGES.ts`     | Languages spoken and proficiency level.                                             |
| `LOCATIONS.ts`     | Geographic locations.                                                               |
| `CONTRIBUTIONS.ts` | Grants, side projects, SaaS, or additional achievements.                            |

---

## ⚙️ App Settings

### Profile Photo

To change your profile photo:

1. Place your square image file in the `apps/web/public/` directory (e.g. `my-photo.png`).
2. Update the `avatar` path in `apps/web/users/razvan/index.ts`:
   ```typescript
   avatar: "/my-photo.png";
   ```

### Default Homepage Profile

The default homepage profile is set via:

- `apps/web/users/index.ts` (exports from `./razvan`)
- `apps/web/utils/users.ts` (`getDefaultUser` returns `'razvan'`)
