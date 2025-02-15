const InputField = ({ label, name, type = "text", placeholder, register, error }) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="border p-2 rounded-md"
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    );
};

export default InputField;