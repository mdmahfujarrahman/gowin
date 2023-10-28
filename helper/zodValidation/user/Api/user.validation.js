import { z } from 'zod';

const UserCreateSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
    })
    .length(10, {
      message: 'Phone number must be 10 characters',
    }),
  password: z.string({
    required_error: 'Password is required',
  }),
  profilePicture: z.string({
    required_error: 'Profile picture is required',
  }),
});

export const UserValidation = {
  UserCreateSchema,
};
