import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
})

export type LoginInput = z.infer<typeof loginSchema>

export const signupSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }).max(100).trim(),
  lastName: z.string().min(2, { message: 'First name is required' }).max(100).trim(),
  email: z.string().email({ message: 'Invalid email address' }).trim(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  confirmPassword: z.string().min(6, { message: 'Confirm Password must be at least 6 characters long' }),
  relationship: z.enum(['Select Relationship', 'Sibling', 'Parent', 'Adult'])
    .transform((value: string) => {
      if (value === 'Select Relaionship') return null;
      return value
    })
}).refine((data) => data.confirmPassword === data.password, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type SignupInput = z.infer<typeof signupSchema>

export const PostSchema = z.object({
  title: z.string().min(1).max(255),
  tags: z.array(z.string().min(1).max(50)),
  channel: z.string()
})

export type newPost = z.infer<typeof PostSchema>

export const CategorySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional()
})

export type newCategory = z.infer<typeof CategorySchema>