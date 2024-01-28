import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegistrationMutation } from "../redux/features/auth/authApi";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const nagivate = useNavigate()
    const [registration] = useRegistrationMutation()
    const onSubmit = async (data: FieldValues) => {

        const { password, confirmpassword } = data;

        if (password !== confirmpassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        const toastId = toast.loading('Signning in')

        try {
            const res = await registration(data).unwrap()
            if (!res.success) {
                throw new Error('Registration failed')
            }

            toast.success('Registration successful', { id: toastId })
            nagivate('/login')
        } catch (error: any) {
            toast.error(error.data.errorMessage, { id: toastId })
        }
    }
    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 px-10 py-16 rounded-lg w-full max-w-sm">
                <h1 className="text-center text-3xl font-medium">Register</h1>
                <div className="m-2">
                    <label className="form-control w-full max-w-sm">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            id="name"
                            placeholder="name"
                            className="input input-bordered w-full max-w-sm"
                            {...register('name', { required: true })}
                        />
                        {errors.name?.type === "required" && (
                            <p role="alert" className="mt-2 text-red-500">Name is required</p>
                        )}
                    </label>
                </div>
                <div className="m-2">
                    <label className="form-control w-full max-w-sm">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-sm"
                            {...register('email', { required: true })}
                        />
                        {errors.email?.type === "required" && (
                            <p role="alert" className="mt-2 text-red-500">Email is required</p>
                        )}
                    </label>
                </div>
                <div className="m-2">
                    <label className="form-control w-full max-w-sm">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="input input-bordered w-full max-w-sm"
                            {...register('password', { required: true })}
                        />
                        {errors.password?.type === "required" && (
                            <p role="alert" className="mt-2 text-red-500">password is required</p>
                        )}
                    </label>
                </div>
                <div className="m-2">
                    <label className="form-control w-full max-w-sm">
                        <div className="label">
                            <span className="label-text">Confirm password</span>
                        </div>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            className="input input-bordered w-full max-w-sm"
                            {...register('confirmpassword', { required: true })}
                        />
                        {errors.confirmpassword?.type === "required" && (
                            <p role="alert" className="mt-2 text-red-500">Confirm Password is required</p>
                        )}
                    </label>
                </div>
                <button type="submit" className="btn w-full max-w-sm mt-4">Register</button>
                <p className="text-center mt-5">Already have an account? <NavLink className='text-blue-500' to='/login'>Log in</NavLink></p>
            </form>
        </div>
    );
};

export default Register;