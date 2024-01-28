import { useForm } from "react-hook-form";
import { useCreatephoneMutation } from "../redux/features/getPhone/getPhoneApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const AddPhone = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [createphone] = useCreatephoneMutation()
    const navigate = useNavigate()

    const onSubmit = async (data: any) => {
        const phoneInfo = {
            name: data.name,
            price: Number(data.price),
            quantity: Number(data.quantity),
            releaseDate: (new Date()).toISOString(),
            brand: data.brand,
            model: data.model,
            operatingSystem: data.operatingSystem,
            ram: `${data.ram}GB`,
            waterResistance: data.waterResistance,
            storageCapacity: `${data.storageCapacity}GB`,
            screenSize: `${data.screenSize} inches`,
            cameraQuality: `${data.cameraQuality} MP`,
            batteryLife: `${data.batteryLife} hours`
        };

        try {
            const res = await createphone(phoneInfo).unwrap()
            const success = res.success

            if (!success) {
                throw new Error()
            }
            toast.success("Phone is created Successfully")
            navigate('/all-phone')
        } catch (error: any) {
            toast.error(error?.data?.errorMessage)
        }



    }
    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 px-10 py-16 rounded-lg w-full ">
                <h1 className="text-center text-3xl font-medium">Create A New Phone</h1>
                <div className="flex justify-around ">
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
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                id="price"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-sm"
                                {...register('price', { required: true })}
                            />
                            {errors.price?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Price is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Quantity</span>
                            </div>
                            <input
                                type="number"
                                id="quantity"
                                placeholder="Quantity"
                                className="input input-bordered w-full max-w-sm"
                                {...register('quantity', { required: true })}
                            />
                            {errors.quantity?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Quantity is required</p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex justify-around ">
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Brand</span>
                            </div>
                            <input
                                type="text"
                                id="Brand"
                                placeholder="Brand"
                                className="input input-bordered w-full max-w-sm"
                                {...register('brand', { required: true })}
                            />
                            {errors.brand?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Brand is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Model</span>
                            </div>
                            <input
                                type="text"
                                id="Model"
                                placeholder="Model"
                                className="input input-bordered w-full max-w-sm"
                                {...register('model', { required: true })}
                            />
                            {errors.model?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Model is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">RAM</span>
                            </div>
                            <input
                                type="number"
                                id="RAM"
                                placeholder="RAM"
                                className="input input-bordered w-full max-w-sm"
                                {...register('ram', { required: true })}
                            />
                            {errors.ram?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">RAM is required</p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex justify-around ">
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">ROM</span>
                            </div>
                            <input
                                type="number"
                                id="ROM"
                                placeholder="ROM"
                                className="input input-bordered w-full max-w-sm"
                                {...register('storageCapacity', { required: true })}
                            />
                            {errors.storageCapacity?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Storage Capacity is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Screen Size</span>
                            </div>
                            <input
                                type="number"
                                id="ScreenSize"
                                placeholder="Screen Size"
                                className="input input-bordered w-full max-w-sm"
                                {...register('screenSize', { required: true })}
                            />
                            {errors.screenSize?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Screen Size is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Camera Quality</span>
                            </div>
                            <input
                                type="number"
                                id="cameraQuality"
                                placeholder="Camera Quality"
                                className="input input-bordered w-full max-w-sm"
                                {...register('cameraQuality', { required: true })}
                            />
                            {errors.cameraQuality?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Camera Quality is required</p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Battery Life</span>
                            </div>
                            <input
                                type="number"
                                id="batteryLife"
                                placeholder="Battery Life"
                                className="input input-bordered w-full max-w-sm"
                                {...register('batteryLife', { required: true })}
                            />
                            {errors.batteryLife?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Battery Life is required</p>
                            )}
                        </label>
                    </div>
                    <label className="form-control w-64">
                        <div className="label">
                            <span className="label-text">Operating System</span>
                        </div>
                        <select className="select select-bordered" {...register('operatingSystem', { required: true })}>
                            <option>iOS</option>
                            <option selected>andriod</option>
                        </select>
                        {errors.operatingSystem?.type === "required" && (
                            <p role="alert" className="mt-2 text-red-500">Operating System is required</p>
                        )}
                    </label>
                    <div className="form-control mt-8">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Water Resistance</span>
                            <input type="checkbox" className="checkbox" id="waterResistance" {...register('waterResistance')} />
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn w-full  mt-4">CREATE</button>
            </form>
        </div>
    );
};

export default AddPhone;