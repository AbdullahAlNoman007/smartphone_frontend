import { useForm } from "react-hook-form";

const InputBox = ({ id, type }: { id: string, type: string }) => {
    const { register, formState: { errors } } = useForm()

    return (
        <div className="m-2">
            <label className="form-control w-full max-w-sm">
                <div className="label">
                    <span className="label-text">{id}</span>
                </div>
                <input
                    type={`${type}`}
                    id={`${id}`}
                    placeholder={`${id}`}
                    className="input input-bordered w-full max-w-sm"
                    {...register(`${id}`, { required: true })}
                />
                {errors.email?.type === "required" && (
                    <p role="alert" className="mt-2 text-red-500">{id} is required</p>
                )}
            </label>
        </div>
    );
};

export default InputBox;