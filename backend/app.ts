import express from "express"; //import express
import type { Application } from "express"; //for typing
import { startMongoClient } from "./services/mongoServices.ts";
import "dotenv/config"; //need these packages to load from env files
import furnitureRouter from "./routes/furnitureRoutes.ts";
import usersRouter from "./routes/usersRoutes.ts";
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { getUserByUsername } from "./services/usersServices.ts";
import { getUserById } from "./services/usersServices.ts";
import bcrypt from "bcryptjs";


const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

async function setupClient() {
  const client = await startMongoClient();
  app.locals.client = client;
}

setupClient();

app.use(passport.initialize());

passport.use(
  new LocalStrategy(
    async (username: string, password: string, done: Function) => {
      try {
        const user = await getUserByUsername(app.locals.client, username);

        if (!user) {
          return done(null, false, { message: "user does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, { message: "incorrect password " });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "jwt_secret",
    },
    async function (jwtPayload, done) {
      try {
        const user = await getUserById(app.locals.client, jwtPayload.sub);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);



app.use("/", furnitureRouter);
app.use("/", usersRouter);

const PORT = 3001; //port 3000 for local development
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
