import Joi from 'joi';

const optionalTcpPort = Joi.any().custom((value, helpers) => {
  if (value === undefined || value === null || value === '') return undefined;
  const n = parseInt(String(value), 10);
  if (Number.isNaN(n) || n < 1 || n > 65535) {
    return helpers.error('any.invalid');
  }
  return n;
});

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'staging', 'production', 'test')
    .default('development'),
  HOST: Joi.string().default('localhost'),
  VERSION: Joi.string().default('1.0.0'),
  NAME: Joi.string().default('School ERP API'),
  PORT: optionalTcpPort.default(3900),
  JWT_SECRET: Joi.string().default('super-secret-jwt-key-for-local-dev-12345'),
  JWT_EXPIRES_IN: Joi.string().default('7d'),
})
  .unknown(true)
  .prefs({ abortEarly: false });

export function validateEnv(config: Record<string, unknown>): Record<string, unknown> {
  const { error, value } = envValidationSchema.validate(config, {
    abortEarly: false,
    convert: true,
    allowUnknown: true,
  });

  if (error) {
    const lines = error.details.map(
      (d) => `${d.path.filter(Boolean).join('.') || '(root)'}: ${d.message}`,
    );
    throw new Error(`Environment validation failed:\n${lines.join('\n')}`);
  }

  return value as Record<string, unknown>;
}
