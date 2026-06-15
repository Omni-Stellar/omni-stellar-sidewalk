import type { User } from "@prisma/client";
import type { PublicUser } from "@omni-stellar-sidewalk/shared";

export type { User };

export function toPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt.toISOString()
  };
}
