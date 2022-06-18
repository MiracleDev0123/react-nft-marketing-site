import React from "react";
import Select from "react-select";

type OptionType = {
  label: string;
  value: string;
};

interface ReactSelectProps {
  options: OptionType[];
  handleChange: any;
  selectClassName?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  id: string;
  name: string;
  placeholder?: string;
  styles?: { [key: string]: string };
  classNamePrefix: string;
  children?: React.ReactNode;
  defaultOption: string;
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
}

const ReactSelect = ({
  options,
  handleChange,
  selectClassName,
  isClearable,
  isDisabled,
  isLoading,
  id,
  name,
  placeholder,
  styles,
  classNamePrefix, //https://react-select.com/styles#using-classnames
  children,
  defaultOption,
  isMulti,
  closeMenuOnSelect,
}: ReactSelectProps) => {
  return (
    <div>
      <Select
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        options={options}
        isClearable={isClearable}
        isDisabled={isDisabled}
        className={selectClassName}
        classNamePrefix={classNamePrefix}
        id={id}
        name={name}
        placeholder={placeholder}
        styles={styles}
        onChange={handleChange}
        defaultValue={options.find((option) => option.value === defaultOption)}
      />
    </div>
  );
};

export default ReactSelect;
