import { useCallback, useState } from "react";

type FormFieldError = {
  field: string;
  message: string;
};

export const useErrors = () => {
  const [errors, setErrors] = useState<FormFieldError[]>([]);

  const setError = useCallback(
    ({ field, message }: FormFieldError) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter(({ field }) => field !== fieldName)
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName: string) =>
      errors.find(({ field }) => field === fieldName)?.message,
    [errors]
  );

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
};
