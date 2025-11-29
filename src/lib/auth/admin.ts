import bcrypt from "bcryptjs";

const adminPassword = process.env.ADMIN_PASSWORD_HASH;

export async function verifyAdminPassword(password: string): Promise<boolean> {
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD_HASH not set");
    return false;
  }

  try {
    return await bcrypt.compare(password, adminPassword);
  } catch (error) {
    console.error("Password verification error:", error);
    return false;
  }
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
