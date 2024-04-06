import { forwardRef } from "react";

import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";

import { ButtonContainer, Form } from "./styles";
import { ContactFormProps, useContactForm } from "./useContactForm";

export const ContactForm = forwardRef(
  ({ buttonLabel, onSubmit }: ContactFormProps, ref) => {
    const {
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
    } = useContactForm({ ref, onSubmit });

    return (
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName("name")}>
          <Input
            placeholder="Nome *"
            onChange={handleNameChange}
            value={name}
            error={getErrorMessageByFieldName("name")}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName("email")}>
          <Input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            error={getErrorMessageByFieldName("email")}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <Input
            inputMode="tel"
            placeholder="Telefone"
            onChange={handlePhoneChange}
            value={phone}
            maxLength={15}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup isLoading={isLoadingCategories}>
          <Select
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
            disabled={isLoadingCategories || isSubmitting}
          >
            <option value="" className="select-title">
              Sem categoria
            </option>

            {categories.map(({ id, name }) => (
              <option key={name} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <ButtonContainer>
          <Button
            type="submit"
            disabled={!isFormValid}
            isLoading={isSubmitting}
          >
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    );
  }
);
