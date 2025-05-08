import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// postgresql://neondb_owner:npg_YrsCzdoU67xH@ep-crimson-bread-a1f95c5k-pooler.ap-southeast-1.aws.neon.tech/c?sslmode=require
