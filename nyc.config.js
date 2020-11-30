module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  all: true,
  extension: ['.vue', '.ts'],
  include: ['src/**/*.{vue,ts}'],
};
