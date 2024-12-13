const SelectField = ({ label, options, className = "" }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-greyscale_subtitle">{label}</label>
        <select
            className={`inter sm:w-[350px] md:w-[360px] px-4 py-3 text-greyscale_text bg-greyscale_surface_subtle rounded-lg shadow-sm focus:outline-primary_hover ${className}`}
        >
            {options.map((option, index) => (
                <option key={index} className="bg-greyscale_surface_subtle hover:bg-primary_hover">
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;
