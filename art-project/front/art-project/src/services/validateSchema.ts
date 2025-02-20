/* eslint-disable no-console */
import { z } from 'zod';

interface ValidateConfig<T extends z.ZodTypeAny> {
  dto: unknown; // The data object to validate
  schema: T; // The Zod schema to validate against
  schemaName: string; // A name for logging/debugging
}

export function validateSchema<T extends z.ZodTypeAny>(config: ValidateConfig<T>): z.infer<T> {
  const { dto, schema, schemaName } = config; // Fix destructuring (corrected `data` to `dto`)
  const result = schema.safeParse(dto); // Validate the DTO using safeParse

  if (result.success) {
    return result.data; // Return the validated and parsed data
  } else {
    captureError(`API Validation Error: ${schemaName}`, {
      dto, // Include the original DTO
      error: result.error.message, // Validation error message
      issues: result.error.issues, // Detailed issues from Zod
    });

    throw result.error; // Rethrow the Zod error
  }
}

// Error capturing function
function captureError(message: string, extra: Record<string, unknown> = {}): void {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, extra);
  } else {
    // Replace with actual error reporting (e.g., Sentry)

    console.log('Error reported:', message, extra);
  }
}
