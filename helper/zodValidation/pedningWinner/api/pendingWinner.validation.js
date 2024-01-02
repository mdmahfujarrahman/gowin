import { z } from 'zod';

const PendingWinnerSchema = z.object({
  winner: z.string({
    required_error: 'Winner Id is required',
  }), // Assuming winner ID is a string for Zod
  prizeType: z.string({
    required_error: 'Prize is required',
  }),
  prizeAmount: z.string({
    required_error: 'Prize amount is required',
  }),
  winnerPhoto: z.string({
    required_error: 'Winner photo is required',
  }),
  accessBankPage: z.boolean().default(false),
  isBankDetailsAdded: z.boolean().default(false),
});
const UpdatePendingWinnerSchema = z.object({
  winner: z.string({
    required_error: 'Winner Id is required',
  }), // Assuming winner ID is a string for Zod
  prizeType: z.string({
    required_error: 'Prize is required',
  }),
  prizeAmount: z.string({
    required_error: 'Prize amount is required',
  }),
  winnerPhoto: z.string({
    required_error: 'Winner photo is required',
  }),
  accessBankPage: z.boolean().default(false),
  isBankDetailsAdded: z.boolean().default(false),
  winnerId: z.string({
    required_error: 'Winner Id is required',
  }),
});

export const PendingWinnerValidation = {
  PendingWinnerSchema,
  UpdatePendingWinnerSchema,
};
