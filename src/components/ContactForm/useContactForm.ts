import {
  useState,
  useImperativeHandle,
  useEffect,
  ChangeEvent,
  FormEvent,
  ForwardedRef,
} from "react";
import { useErrors } from "../../hooks/useErrors.1";
import { useSafeAsyncState } from "../../hooks/useSafeAsyncState";
import CategoriesService from "../../services/CategoriesService";
import { Contact } from "../../services/models/Contact";
import { formatPhone } from "../../utils/formatPhone";
import { isEmailValid } from "../../utils/isEmailValid";
import { ContactData } from "../../@types";

export type ContactFormProps = {
  buttonLabel: string;
  onSubmit: (formData: ContactData) => Promise<void>;
};

type Category = { id: string; name: string };

type Props = {
  ref: ForwardedRef<unknown>;
  onSubmit: (formData: ContactData) => Promise<void>;
};

export const useContactForm = ({ ref, onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useSafeAsyncState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: ({ name, email, phone, category }: Contact) => {
        setName(name ?? "");
        setEmail(email ?? "");
        setPhone(formatPhone(phone) ?? "");
        setCategoryId(category.id ?? "");
      },
      resetFields: () => {
        setName("");
        setEmail("");
        setPhone("");
        setCategoryId("");
      },
    }),
    []
  );

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && Boolean(!errors.length);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const allCategories = await CategoriesService.listCategories();

        setCategories(allCategories);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    };

    loadCategories();
  }, [setCategories, setIsLoadingCategories]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido" });
    } else {
      removeError("email");
    }
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ name, email, phone, categoryId });

    setIsSubmitting(false);
  };

  return {
    name,
    phone,
    email,
    categories,
    categoryId,
    isFormValid,
    isSubmitting,
    handleSubmit,
    setCategoryId,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    isLoadingCategories,
    getErrorMessageByFieldName,
  };
};
