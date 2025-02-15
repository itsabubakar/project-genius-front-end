import { Controller } from "react-hook-form";

const SelectField = ({ label, name, control, options, errors, className = "" }) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium text-greyscale_subtitle">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          className={`inter sm:w-[350px] md:w-[360px] px-4 py-3 text-greyscale_text bg-greyscale_surface_subtle rounded-lg shadow-sm focus:outline-primary_hover ${className}`}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      )}
    />
    {errors && <span className="text-red-500 text-sm">{errors.message}</span>}
  </div>
);

export default SelectField;
