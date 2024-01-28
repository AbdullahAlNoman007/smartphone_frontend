import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { Tuser } from "../Types";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlicer"
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {
    const dispatch = useAppDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [login] = useLoginMutation()
    const nagivate = useNavigate()
    const onSubmit = async (loginData: FieldValues) => {

        const toastId = toast.loading('Logging in')

        try {

            const res = await login(loginData).unwrap()
            if (!res.success) {
                throw new Error('Login failed')
            }
            const user = jwtDecode(res.data.token) as Tuser
            dispatch(setUser({
                user,
                token: res.data.token
            }))

            toast.success('Logged In', { id: toastId })
            nagivate('/')
        } catch (error: any) {
            toast.error(error.data.errorMessage, { id: toastId })
        }
    }
    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 px-10 py-16 rounded-lg w-full max-w-sm">
                <h1 className="text-center text-3xl font-medium">Login</h1>
                <div className="m-2">
                    <label className="form-control w-full max-w-sm">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="text"
                            id="Email"
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
                            <p role="alert" className="mt-2 text-red-500">Password is required</p>
                        )}
                    </label>
                </div>
                <button type="submit" className="btn w-full max-w-sm mt-4">Log in</button>
                <p className="text-center mt-5">Don't have any account? <NavLink className='text-blue-500' to='/register'>Register</NavLink></p>
            </form>

        </div>
    );
};

export default Login;