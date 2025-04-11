import type { FieldValues, Path, PathValue } from "react-hook-form";

import { getValidatedFromErrors } from "@app/utils/utils";
import { TextInput, type TextInputProps } from "@patternfly/react-core";
import {
  type BaseHookFormPFGroupControllerProps,
  HookFormPFGroupController,
  extractGroupControllerProps,
} from "./HookFormPFGroupController";

export type HookFormPFTextInputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = TextInputProps & BaseHookFormPFGroupControllerProps<TFieldValues, TName>;

export const HookFormPFTextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(
  props: HookFormPFTextInputProps<TFieldValues, TName>,
) => {
  const { extractedProps, remainingProps } = extractGroupControllerProps<
    TFieldValues,
    TName,
    HookFormPFTextInputProps<TFieldValues, TName>
  >(props);
  const { fieldId, helperText, isRequired, errorsSuppressed } = extractedProps;
  const { type } = remainingProps;
  return (
    <HookFormPFGroupController<TFieldValues, TName>
      {...extractedProps}
      renderInput={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { isDirty, error, isTouched },
      }) => (
        <TextInput
          ref={ref}
          name={name}
          id={fieldId}
          aria-describedby={helperText ? `${fieldId}-helper` : undefined}
          isRequired={isRequired}
          onChange={(_, value) => {
            if (type === "number") {
              onChange(
                ((value && Number.parseInt(value, 10)) || "") as PathValue<
                  TFieldValues,
                  TName
                >,
              );
            } else {
              onChange(value as PathValue<TFieldValues, TName>);
            }
          }}
          onBlur={onBlur}
          value={value}
          validated={
            errorsSuppressed
              ? "default"
              : getValidatedFromErrors(error, isDirty, isTouched)
          }
          {...remainingProps}
        />
      )}
    />
  );
};
