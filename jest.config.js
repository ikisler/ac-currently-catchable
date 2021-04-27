module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/tests/unit/**/*.spec.[jt]s?(x)",
    "**/tests/unit/**/*.[jt]s?(x)",
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
