const InputField = ({ label, type = "text", placeholder, className = "" }) => (
    <div className="flex flex-col gap-2 text-greyscale_subtitle">
        <label>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className={`inter sm:w-[340px] md:w-[360px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary_hover ${className}`}
        />
    </div>
);

export default InputField;
