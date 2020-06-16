import ESlint from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config', () => {
  it('app config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./lib/app'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
  });

  it('lib config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./lib/lib'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
  });

  it('jest config working', () => {
    const cli = new ESlint.CLIEngine({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./lib/jest'],
      },
    });

    expect(() => cli.executeOnText(`const foo = 'bar';`)).not.toThrow();
  });
});
