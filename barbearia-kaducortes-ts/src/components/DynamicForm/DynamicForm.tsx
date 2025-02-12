// import Skeleton from "@mui/material/Skeleton";
// import { AccordionComponent } from "components/Accordion/AccordionComponent";
// import { AddButton } from "components/Acoes/BotaoAdicionar";
// import { ChangeButton } from "components/Acoes/BotaoAlterar";
// import { ButtonMedium, ButtonMediumProps } from "components/Buttons/ButtonMedium/ButtonMedium";
// import InputCheckbox from "components/Inputs/InputCheckbox/InputCheckbox";
// import { InputLabelForm, InputLabelFormProps } from "components/Inputs/InputLabelForm/InputLabelForm";
// import { RadioButtons, RadioButtonsProps } from "components/Inputs/RadioButton/RadioButtons";
// import { OptionType, Select, SelectProps } from "components/Inputs/Select/Select";
// import { TextArea, TextAreaProps } from "components/Inputs/TextArea/TextArea";
// import { GridForm } from "components/Layout/GridForm/GridForm";
// import { FetchingStateContext } from "contexts/FetchingStateContext";
// import { InputMessagesContext } from "contexts/InputMessagesContext";
// import { Dispatch, SetStateAction, SyntheticEvent, useContext, useEffect, useRef, useState } from "react";
// import { Acoes, InputMessagesSources } from "utils/Enums";
// import "./containerStyles.css";

// import Box from "@mui/material/Box";
// import { DatePicker } from "components/Inputs/DatePicker/DatePicker";
// import { InputLabelCnpjCPF } from "components/Inputs/InputLabelCnpjCPF/inputLabelCnpjCpf";
// import ModalAlert from "components/Modais/Alertas/ModalAlert";
// import { AccordionProvider } from "contexts/AccordionContext";
// import { defaultUrl, IEndpointApi } from "utils/GlobalVariables";

// type proporcaoType = 0 | 25 | 33 | 50 | 75 | 100;

// type inputs = Omit<Omit<SelectProps, "options">, "onChange"> &
// 	InputLabelFormProps &
// 	TextAreaProps &
// 	Partial<RadioButtonsProps>;

// type TValidationInput = (name: string, value: string | number | boolean) => string | null;
// type TRegisterField = (field: FormField) => void;

// export interface IComponentValidation {
// 	validationInput?: TValidationInput;
// 	registerField?: TRegisterField;
// }

// interface AccordionSection {
// 	title: string;
// 	numberOfCircle?: number;
// 	iconOnCircle?: string;
// 	forms?: FormField[];
// 	component?: (validationInput: TValidationInput, registerField: TRegisterField) => JSX.Element;
// 	accordionId?: string; // Adicionando o accordionId opcional
// 	proporcaoInterna?: proporcaoType;
// }
// export interface FormField extends inputs {
// 	inputChave?: boolean;
// 	value?: any;
// 	inputType?: "input" | "textarea" | "select" | "button" | "maskcnpjCpf";
// 	hidden?: boolean;
// 	label?: string;
// 	proporcao?: proporcaoType;
// 	options?: Array<OptionType>;
// 	component?: JSX.Element | null;
// 	validation?: (value: string | number | boolean) => string | null; // Função de validação opcional
// 	button?: ButtonMediumProps;
// 	accordionSection?: AccordionSection;
// 	accordionId?: string; // Adicionando o accordionId opcional
// }

// export interface FormValues {
// 	[key: string]: string | number | boolean;
// }

// interface DynamicFormProps<T> {
// 	body?: any;
// 	fields: FormField[];
// 	objectEndpoint?: IEndpointApi;
// 	hiddenDeletar?: boolean;
// 	hiddenSalvar?: boolean;
// 	customButton?: JSX.Element[];
// 	setPageAction?: (pageAction: Acoes) => void;
// 	pageAction?: Acoes;
// 	values: T;
// 	setValues: Dispatch<SetStateAction<T>>;
// 	additionalActionChangeButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// 	overrideActionDeleteButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// 	additionalActionAddButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// 	noMinimumWidth?: boolean | undefined;
// }

// export function DynamicForm<T>({
// 	body,
// 	fields,
// 	objectEndpoint,
// 	hiddenDeletar,
// 	setPageAction,
// 	pageAction,
// 	values,
// 	customButton,
// 	hiddenSalvar = false,
// 	setValues,
// 	additionalActionChangeButton,
// 	overrideActionDeleteButton,
// 	additionalActionAddButton,
// 	noMinimumWidth = false,
// }: DynamicFormProps<T>) {
// 	const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
// 	const [proporcao, setProporcao] = useState<number[]>([]);
// 	const [_valueSelected, setValueSelected] = useState<any>(null);
// 	const { inputMessages, setInputMessages } = useContext(InputMessagesContext);
// 	const { fetchingState } = useContext(FetchingStateContext);
// 	const [qtdFields, setQtdFields] = useState<number>(0);
// 	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
// 	const [errorMessageModalAlert, setErrorMessageModalAlert] = useState<string>("");

// 	const handleChange = (name: string, value: string | number | boolean) => {
// 		if (String(value).includes("R$")) {
// 			const decimalSeparator = String(value).indexOf(",");
// 			value =
// 				String(value).substring(3, decimalSeparator !== -1 ? decimalSeparator : undefined) +
// 				(decimalSeparator !== -1 ? "." : "") +
// 				String(value).substring(decimalSeparator + 1);
// 		}

// 		setValues((prevValues: any) => ({ ...prevValues, [name]: value }));
// 		const input = (document.getElementById(name) ||
// 			[...document.querySelectorAll(`[name=${name.startsWith("$.") ? name.substring(2) : name}]`)].at(
// 				-1
// 			)) as HTMLInputElement;

// 		if (input) {
// 			input.classList.remove("campo-invalido");
// 			setInputMessages((prevMessages) => prevMessages.filter((m) => m.id !== name));
// 		}
// 		if (value !== "") {
// 			setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
// 			setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
// 		}
// 	};

// 	const changeDate = (name: string, value: string) => {
// 		setValues((prevValues: any) => ({ ...prevValues, [name]: value }));
// 	};

// 	// Remover validação dos campos quando o form sair da tela
// 	useEffect(() => {
// 		return () => {
// 			setInputMessages((prevMessages) =>
// 				prevMessages.filter((m) => {
// 					const fieldsNames = Object.keys(values as Object);

// 					// Inclui os campos dentro de componentes (selects não tem validação)
// 					const componentInputs = [...document.querySelectorAll("form input")].concat([
// 						...document.querySelectorAll("form textarea"),
// 					]);

// 					componentInputs.forEach((input) =>
// 						input.getAttribute("name") ? fieldsNames.push(input.getAttribute("name") as string) : ""
// 					);

// 					if (!fieldsNames.includes(m.id)) {
// 						return m;
// 					}
// 				})
// 			);
// 		};
// 	}, []);

// 	const fieldRefs = useRef<FormField[]>([]);

// 	const registerField = (field: FormField, accordionIdTest: string) => {
// 		const existingFieldIndex = fieldRefs.current.findIndex((f) => f.name === field.name);

// 		// Certifique-se de que estamos lidando corretamente com o accordionId e outras propriedades
// 		if (existingFieldIndex !== -1) {
// 			fieldRefs.current[existingFieldIndex] = {
// 				...fieldRefs.current[existingFieldIndex], // Mantém as propriedades existentes
// 				value: field.value,
// 				accordionId: accordionIdTest, // Preserva accordionId
// 			};
// 		} else {
// 			fieldRefs.current.push({ ...field, accordionId: accordionIdTest });
// 		}
// 	};

// 	const validationInput = (name: string, value: string | number | boolean): string | null => {
// 		let errorMessage: string | null = null;
// 		const field =
// 			fields.find((f) => f.name === name) ||
// 			fields.flatMap((f) => f.accordionSection?.forms || []).find((f) => f.name === name) ||
// 			fieldRefs.current.find((f) => f.name === name);

// 		if (!field) return null;

// 		if (field.required && !value && !field.value) {
// 			errorMessage = "Este campo é obrigatório";
// 		} else if (field.type === "number" && isNaN(Number(value)) && !field.formatRealOptions) {
// 			errorMessage = "Digite apenas números";
// 		} else if (field.type === "email" && typeof value === "string" && !/^\S+@\S+\.\S+$/.test(value)) {
// 			errorMessage = "Digite um e-mail válido";
// 			setIsOpenModal(true);
// 			setErrorMessageModalAlert(errorMessage);
// 		} else if (field.minLength && typeof value === "string" && value.length < field.minLength) {
// 			errorMessage = `Digite pelo menos ${field.minLength} caracteres`;
// 		} else if (field.max && Number(value) > Number(field.max)) {
// 			errorMessage = `O valor máximo do campo é ${field.max}`;
// 		}

// 		if (errorMessage) {
// 			setInputMessages((prevErrors) => [
// 				...prevErrors,
// 				{ id: field.name as string, message: errorMessage as string, source: InputMessagesSources.Form },
// 			]);

// 			const htmlField = document.getElementById(field.id ?? "") ?? document.querySelector(`[name=${field.name}]`);

// 			if (htmlField) htmlField.classList.add("campo-invalido");
// 		} else {
// 			setInputMessages((prevErrors) => prevErrors.filter((e) => e.id !== field.name));
// 		}

// 		return errorMessage;
// 	};

// 	useEffect(() => {
// 		const newProporcao = fields.map((field) => field.proporcao || 0);
// 		setProporcao(newProporcao);

// 		const selectField = fields.find((field) => field.inputType === "select");
// 		if (selectField && selectField.value) {
// 			setValueSelected(selectField.value as OptionType);
// 		} else {
// 			setValueSelected(null);
// 		}

// 		setValues((prevValues: any) => ({
// 			...prevValues,
// 			...fields.reduce((acc, field) => {
// 				const fieldName = field.name as keyof FormField;

// 				// Ignorar valores undefined para não sobrescrever valores existentes
// 				if (field.value !== undefined) {
// 					acc[fieldName] = field.value;
// 				}
// 				return acc;
// 			}, {}),
// 		}));
// 	}, []);

// 	const getKeyFieldsValue = (): string[] | undefined => {
// 		const chaveFields = fields
// 			.flatMap((field) => {
// 				if (field.accordionSection) {
// 					return (
// 						field.accordionSection?.forms
// 							?.flat()
// 							.filter((accordionField) => accordionField?.inputChave)
// 							.map((field) => field.value) || []
// 					);
// 				} else {
// 					return field.inputChave ? field.value : [];
// 				}
// 			})
// 			.filter((value) => value);

// 		if (chaveFields.length > 0) {
// 			return chaveFields.map((field) => String(field));
// 		}
// 	};

// 	const changeButton = ChangeButton({
// 		value: getKeyFieldsValue(),
// 		endpoint: defaultUrl + objectEndpoint?.alterar,
// 		endpointDeletar: defaultUrl + objectEndpoint?.excluir,
// 		hiddenDeletar,
// 		body: body ? body : values,
// 		minContent: true,
// 		codigoDeletar: getKeyFieldsValue(),
// 		setPageAction: setPageAction,
// 		functionOverrideButtonChange: additionalActionChangeButton,
// 		overrideActionDeleteButton: overrideActionDeleteButton,
// 	});

// 	const renderEditarBotao = () => {
// 		if (pageAction === Acoes.Alterar) {
// 			return (
// 				<div className="w-100 d-flex mt-5 align-items-center gap-3 justify-content-end">
// 					{customButton && customButton}
// 					{changeButton?.component}
// 				</div>
// 			);
// 		} else {
// 			return null;
// 		}
// 	};

// 	const addButton = AddButton({
// 		endpoint: (defaultUrl + objectEndpoint?.adicionar) as string,
// 		body: body ? body : values,
// 		minContent: true,
// 		setPageAction: setPageAction,
// 		functionOverrideButtonAdd: additionalActionAddButton,
// 	});

// 	const renderAdicionarBotao = () => {
// 		if (pageAction === Acoes.Adicionar && hiddenSalvar !== true) {
// 			return addButton?.component;
// 		}

// 		if (hiddenSalvar === true) {
// 			return (
// 				<div className="w-100 d-flex mt-5 align-items-center gap-3 justify-content-end">
// 					{customButton && customButton}
// 				</div>
// 			);
// 		}
// 		return null;
// 	};

// 	const handleSelectChange = (_: SyntheticEvent<Element, Event>, newValue: OptionType | null) => {
// 		setValueSelected(newValue);
// 		if (newValue) {
// 			setValues({
// 				...values,
// 				[newValue.name as keyof T]: newValue.value,
// 			});
// 		}
// 	};

// 	const handleCheckboxChange = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setValues({
// 			...values,
// 			[fieldName]: event.target.checked ? "S" : "N",
// 		});
// 	};

// 	const renderField = (
// 		field: any,
// 		index: number,
// 		validationInput: (name: string, value: string | number | boolean) => string | null,
// 		registerField: (field: FormField) => void
// 	) => {
// 		registerField({ ...field, accordionId: field.accordionSection?.accordionId });

// 		const { inputChave, inputType, ...props } = field;

// 		if (!inputType && !field.component) {
// 			return null;
// 		}

// 		return (
// 			<div key={index}>
// 				{field.inputType === "textarea" && (
// 					<TextArea
// 						onChange={(e) => handleChange(field.name, e.target.value)}
// 						onBlur={(e) => validationInput(field.name, e.target.value)}
// 						keyTooltip={field.name}
// 						openTooltip={!!errors[field.name]}
// 						accordionId={field.accordionSection?.accordionId} // Passando o accordionId para o TextArea
// 						titleTooltip={errors[field.name] || ""}
// 						{...props}
// 					/>
// 				)}
// 				{field.inputType === "maskcnpjCpf" && (
// 					<InputLabelCnpjCPF
// 						onChange={
// 							field.onChange
// 								? field.onChange
// 								: (e: any) => {
// 										const value = e.target.value;
// 										handleChange(field.name, value);
// 									}
// 						}
// 						onBlur={(e: any) => validationInput(field.name, e.target.value)}
// 						keyTooltip={field.name}
// 						label={field.label}
// 						titleTooltip={errors[field.name] || ""}
// 						openTooltip={!!errors[field.name]}
// 						required={field.required}
// 						accordionId={field.accordionSection?.accordionId} // Passando o accordionId para o TextArea
// 						autoFocus={index === 0 ? true : false || field.autoFocus}
// 						{...props}
// 					/>
// 				)}
// 				{field.inputType === "input" &&
// 				field.type !== "checkbox" &&
// 				field.type !== "radio" &&
// 				field.type !== "maskcnpjCpf" &&
// 				field.type !== "date" ? (
// 					<div
// 						style={{
// 							display: "flex",
// 							flexDirection: "row",
// 							justifyContent: "space-between",
// 							alignItems: "end",
// 							gap: "25px",
// 						}}
// 					>
// 						<InputLabelForm
// 							onChange={
// 								field.onChange
// 									? field.onChange
// 									: (e: any) => {
// 											const value = e.target.value;
// 											handleChange(field.name, value);
// 										}
// 							}
// 							onBlur={(e: any) => validationInput(field.name, e.target.value)}
// 							keyTooltip={field.name}
// 							label={field.label}
// 							titleTooltip={errors[field.name] || ""}
// 							openTooltip={!!errors[field.name]}
// 							required={field.required}
// 							accordionId={field.accordionSection?.accordionId} // Passando o accordionId para o TextArea
// 							autoFocus={index === 0 ? true : false || field.autoFocus}
// 							{...props}
// 						/>
// 						{field.inputType === "input" && field.type !== "checkbox" && field.button ? (
// 							<ButtonMedium style={{ marginTop: "0px" }} {...field.button} />
// 						) : null}
// 					</div>
// 				) : null}
// 				{field.type === "date" && (
// 					<DatePicker
// 						id={field.id ?? field.name}
// 						name={field.name}
// 						value={field.value}
// 						onChange={(e) => changeDate(field.name, e.target.value)}
// 					/>
// 				)}
// 				{(field.type === "select" || field.inputType === "select") && field.options && (
// 					<Select
// 						{...props}
// 						key={index}
// 						options={field.options}
// 						getOptionLabel={(option) => option.label}
// 						onChange={handleSelectChange}
// 						accordionId={field.accordionSection?.accordionId}
// 						value={
// 							values[field.name as keyof T] !== null && values[field.name as keyof T] !== undefined
// 								? field.options.find((opt: OptionType) => values[field.name as keyof T] === opt.value)
// 								: null
// 						}
// 						defaultValue={
// 							values[field.name as keyof T] !== null && values[field.name as keyof T] !== undefined
// 								? field.options.find((opt: any) => values[field.name as keyof T] === opt.value)
// 								: null
// 						}
// 						isOptionEqualToValue={(option, value) => option.value === value?.value}
// 					/>
// 				)}

// 				{field.type === "checkbox" && !field.component && (
// 					<InputCheckbox
// 						label={field.label}
// 						id={field.name}
// 						name={field.name}
// 						value={field.name}
// 						checked={field.checked}
// 						onChange={handleCheckboxChange(field.name)}
// 					/>
// 				)}

// 				{field.type === "checkbox" && field.component && (
// 					<Box
// 						sx={{
// 							display: "flex",
// 							alignItems: "center",
// 							gap: "10px",
// 							maxWidth: "200px",
// 						}}
// 					>
// 						{" "}
// 						<InputCheckbox
// 							label={field.label}
// 							id={field.name}
// 							name={field.name}
// 							value={field.name}
// 							checked={field.checked}
// 							onChange={handleCheckboxChange(field.name)}
// 						/>
// 					</Box>
// 				)}

// 				{field.type === "radio" && (
// 					<RadioButtons
// 						label={field.label}
// 						direction={field.direction || "row"}
// 						radios={field.radios}
// 						selectedRadioValue={values[field.name as keyof T] as string}
// 						onChange={(e) => {
// 							setValues((prevValues: any) => ({ ...prevValues, [field.name]: e.target.value }));
// 						}}
// 						{...props}
// 					/>
// 				)}
// 				{field.button && field.type !== "checkbox" && field.inputType !== "input" ? (
// 					<ButtonMedium {...field.button} />
// 				) : null}
// 				{field.component && field.component}
// 			</div>
// 		);
// 	};

// 	useEffect(() => {
// 		if (fields.filter((field) => field.accordionSection).length == 0) {
// 			if (fields.length > 0) {
// 				setQtdFields(fields.length);
// 			}
// 		}
// 	}, [fields]);

// 	useEffect(() => {
// 		if (fields && Array.isArray(fields)) {
// 			const newProporcao = fields.map((field) => field.proporcao || 0);
// 			setProporcao(newProporcao);
// 		} else {
// 			// eslint-disable-next-line no-console
// 			console.error("Lista 'fields' não está definida ou não é um array:", fields);
// 		}
// 	}, [fields]);

// 	function calculateWidth(): string | undefined {
// 		if (noMinimumWidth !== true) {
// 			const accordionQtd = fields.filter((field) => field.accordionSection).length;
// 			if (qtdFields <= 6 && accordionQtd === 0) {
// 				return "container-content-50 ";
// 			}
// 			if (qtdFields > 6 && accordionQtd === 0) {
// 				return "container-content-100 ";
// 			}
// 			if (accordionQtd > 0) {
// 				return "container-content-100 ";
// 			}
// 		}
// 	}

// 	return (
// 		<div className={calculateWidth()}>
// 			{isOpenModal && (
// 				<ModalAlert
// 					isOpen={isOpenModal}
// 					onClose={() => setIsOpenModal(false)}
// 					typeModal="alert"
// 					message={errorMessageModalAlert}
// 				/>
// 			)}
// 			{fetchingState.isLoading && !fetchingState.exibirCircularProgress ? (
// 				<>
// 					<GridForm proporcao={proporcao}>
// 						{fields.map((field, index) => {
// 							let height;
// 							switch (field.inputType) {
// 								case "input":
// 									height = 45;
// 									break;
// 								case "textarea":
// 									height = 100;
// 									break;
// 								case "select":
// 									height = 45;
// 									break;
// 								default:
// 									height = 80;
// 							}
// 							return (
// 								<div key={index}>
// 									<Skeleton variant="text" width={"150px"} height={30} sx={{ marginBottom: "5px" }} />
// 									<Skeleton variant="rectangular" width={"100%"} height={height} />
// 								</div>
// 							);
// 						})}
// 					</GridForm>
// 				</>
// 			) : (
// 				<form
// 					noValidate
// 					onSubmit={(e) => {
// 						e.preventDefault();

// 						if (Object.values(errors).some((value) => value)) {
// 							return null;
// 						} else {
// 							pageAction === Acoes.Alterar ? changeButton?.handleChange(e) : addButton?.handleAdd(e);
// 						}
// 					}}
// 				>
// 					<GridForm
// 						proporcao={qtdFields != 0 && qtdFields == 2 && noMinimumWidth !== true ? [25, 100] : proporcao}
// 					>
// 						{fields.map((field, index) => {
// 							if (field.accordionSection) {
// 								const { accordionId } = field.accordionSection; // Obtenha o ID do accordion

// 								const fieldsInAccordion = fieldRefs.current.filter(
// 									(fieldRef) => fieldRef.accordionId === accordionId
// 								);

// 								const allValidFieldRefs =
// 									fieldsInAccordion.every((field) => {
// 										const error = inputMessages
// 											.slice()
// 											.reverse()
// 											.find((msg) => msg.id === field.name)?.message;
// 										const fieldValue = values[field.name as keyof typeof values];
// 										if (field.required) {
// 											return (
// 												!error &&
// 												fieldValue !== undefined &&
// 												fieldValue !== "" &&
// 												error !== `Digite pelo menos ${field.minLength} caracteres`
// 											);
// 										} else {
// 											return (
// 												!error ||
// 												fieldValue === undefined ||
// 												fieldValue === "" ||
// 												error !== `Digite pelo menos ${field.minLength} caracteres`
// 											);
// 										}
// 									}) ?? true;

// 								return (
// 									<AccordionProvider>
// 										<AccordionComponent
// 											key={field.accordionSection.title}
// 											title={field.accordionSection.title}
// 											numberofCircle={
// 												field.accordionSection.numberOfCircle
// 													? field.accordionSection.numberOfCircle
// 													: undefined
// 											}
// 											iconOnCircle={
// 												field.accordionSection.iconOnCircle
// 													? field.accordionSection.iconOnCircle
// 													: ""
// 											}
// 											allFieldsValid={allValidFieldRefs}
// 										>
// 											<GridForm proporcao={[field.accordionSection.proporcaoInterna || 100]}>
// 												<GridForm
// 													proporcao={field.accordionSection?.forms?.map(
// 														(field) => field.proporcao || 0
// 													)}
// 												>
// 													{field.accordionSection.forms?.map((form, formIndex) => {
// 														return (
// 															<div key={formIndex}>
// 																{renderField(
// 																	form,
// 																	formIndex,
// 																	validationInput,
// 																	(fieldInner) => {
// 																		registerField(
// 																			fieldInner,
// 																			field.accordionSection?.accordionId ?? ""
// 																		);
// 																	}
// 																)}
// 															</div>
// 														);
// 													})}
// 												</GridForm>
// 											</GridForm>
// 											{field.accordionSection.component && (
// 												<>
// 													{field.accordionSection.component(validationInput, (fieldInner) => {
// 														registerField(
// 															fieldInner,
// 															field.accordionSection?.accordionId ?? ""
// 														);
// 													})}
// 												</>
// 											)}
// 										</AccordionComponent>
// 									</AccordionProvider>
// 								);
// 							} else {
// 								return renderField(field, index, validationInput, (fieldInner) => {
// 									registerField(fieldInner, field.accordionSection?.accordionId ?? "");
// 								});
// 							}
// 						})}
// 					</GridForm>
// 					{renderEditarBotao()}
// 					{renderAdicionarBotao()}
// 				</form>
// 			)}
// 		</div>
// 	);
// }
