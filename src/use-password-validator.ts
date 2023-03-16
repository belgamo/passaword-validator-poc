// (?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{10,}

const PASSWORD_MIN_LENGTH = 10;
const LOWERCASE_REGEX = /(?=.*[a-z])/;
const UPPERCASE_REGEX = /(?=.*[A-Z])/;
const DIGITS_REGEX = /(?=.*\d)/;
const SPECIAL_CHARACTERS = /(?=.*[^a-zA-Z0-9])(?!.*\s)/;

const REGEX_SOURCES = [
  LOWERCASE_REGEX,
  UPPERCASE_REGEX,
  DIGITS_REGEX,
  SPECIAL_CHARACTERS,
].map((regex) => regex.source);

const FULL_PASSWORD_REGEX = new RegExp(
  `${REGEX_SOURCES.join("")}.{${PASSWORD_MIN_LENGTH},}`
);

const usePasswordValidator = () => {
  const validate = (password: string) => {
    const test = (regex: RegExp) => regex.test(password);

    return {
      length: password.length >= PASSWORD_MIN_LENGTH,
      lowercase: test(LOWERCASE_REGEX),
      uppercase: test(UPPERCASE_REGEX),
      digits: test(DIGITS_REGEX),
      specialCharacters: test(SPECIAL_CHARACTERS),
      isValid: test(FULL_PASSWORD_REGEX),
    };
  };

  return {
    validate,
  };
};

export default usePasswordValidator;
