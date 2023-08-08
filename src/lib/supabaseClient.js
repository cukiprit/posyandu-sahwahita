import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://dsfrkbcypanxepdgjwhw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZnJrYmN5cGFueGVwZGdqd2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNzUwMjgsImV4cCI6MjAwNjc1MTAyOH0.cmjZ73ghcIk9gO8TNcISvHkVHaeebmgH4vj-lXbdDmM"
);
