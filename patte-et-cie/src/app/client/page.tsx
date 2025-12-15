import { redirect } from "next/navigation";

export default function Client() {
  redirect("/client/home");
  return null;
}
