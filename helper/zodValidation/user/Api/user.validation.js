import { z } from 'zod';

const UserCreateSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  countryCode: z.string({
    required_error: 'Country code is required',
  }),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
    })
    .min(10, {
      message: 'Phone number must be minimum 10 characters',
    })
    .max(15, {
      message: 'Phone number must be maximum 15 characters',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, {
      message: 'Password must be at least 6 characters',
    }),
  profilePicture: z.string({
    required_error: 'Profile picture is required',
  }),
});

export const UserValidation = {
  UserCreateSchema,
};
