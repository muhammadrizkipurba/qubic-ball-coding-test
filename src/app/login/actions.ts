"use server";

import { createSession, deleteSession, getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

// export const login = async(username: string) => {
//   const session = await createSession(username);
//   return session;
// };

type PrevStateType = {
  errors: {
    username?: string[] | undefined;
    password?: string[] | undefined;
  };
} | undefined;

const testUser = {
  username: "testuser",
  password: "testpass",
};

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username can not be empty" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: PrevStateType, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { username, password } = result.data;

  if (username !== testUser.username || password !== testUser.password) {
    return {
      errors: {
        password: ["Invalid username or password"],
      },
    };
  }

  await createSession(testUser.username);

  redirect("/dashboard");
};

export const sessionData = async () => {
  const session = await getSession();
  return session;
}

export const logout = async () => {
  await deleteSession();
  redirect("/login");
};
