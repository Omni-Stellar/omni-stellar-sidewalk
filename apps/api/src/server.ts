import { app, env } from "./app.js";

app.listen(env.PORT, () => {
  console.log(`@omni-stellar-sidewalk/api listening on http://localhost:${env.PORT}`);
});
