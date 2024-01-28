import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreatephoneMutation } from "../../redux/features/getPhone/getPhoneApi";
import { useNavigate } from "react-router-dom";


const CreateMoel = ({ phone }: { phone: any }) => {
    const { register, handleSubmit } = useForm()
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
            ram: `${data.ram}`,
            waterResistance: data.waterResistance,
            storageCapacity: `${data.storageCapacity}`,
            screenSize: `${data.screenSize}`,
            cameraQuality: `${data.cameraQuality}`,
            batteryLife: `${data.batteryLife}`
        };

        try {
            const res = await createphone(phoneInfo).unwrap()
            const success = res.success

            if (!success) {
                throw new Error()
            }
            toast.success("Phone Variant is created Successfully")
            navigate('/all-phone')
        } catch (error: any) {
            toast.error(error?.data?.errorMessage)
        }

    }
    return (
        <dialog id="my_modal_3" className="modal">
            {
                phone && <div className="modal-box">
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
                                        {...register('name')}
                                        defaultValue={phone.name!}

                                    />
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
                                        {...register('price')}
                                        defaultValue={phone.price!}
                                    />

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
                                        {...register('quantity')}
                                        defaultValue={phone.quantity!}
                                    />

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
                                        {...register('brand')}
                                        defaultValue={phone.brand!}
                                    />

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
                                        {...register('model')}
                                        defaultValue={phone.model!}
                                    />

                                </label>
                            </div>
                            <div className="m-2">
                                <label className="form-control w-full max-w-sm">
                                    <div className="label">
                                        <span className="label-text">RAM</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="RAM"
                                        placeholder="RAM"
                                        className="input input-bordered w-full max-w-sm"
                                        {...register('ram')}
                                        defaultValue={phone.ram!}
                                    />

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
                                        type="text"
                                        id="ROM"
                                        placeholder="ROM"
                                        className="input input-bordered w-full max-w-sm"
                                        {...register('storageCapacity')}
                                        defaultValue={phone.storageCapacity!}
                                    />

                                </label>
                            </div>
                            <div className="m-2">
                                <label className="form-control w-full max-w-sm">
                                    <div className="label">
                                        <span className="label-text">Screen Size</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="ScreenSize"
                                        placeholder="Screen Size"
                                        className="input input-bordered w-full max-w-sm"
                                        {...register('screenSize')}
                                        defaultValue={phone.screenSize!}
                                    />

                                </label>
                            </div>
                            <div className="m-2">
                                <label className="form-control w-full max-w-sm">
                                    <div className="label">
                                        <span className="label-text">Camera Quality</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="cameraQuality"
                                        placeholder="Camera Quality"
                                        className="input input-bordered w-full max-w-sm"
                                        {...register('cameraQuality')}
                                        defaultValue={phone.cameraQuality!}
                                    />

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
                                        type="text"
                                        id="batteryLife"
                                        placeholder="Battery Life"
                                        className="input input-bordered w-full max-w-sm"
                                        {...register('batteryLife')}
                                        defaultValue={phone.batteryLife!}
                                    />

                                </label>
                            </div>
                            <label className="form-control w-64">
                                <div className="label">
                                    <span className="label-text">Operating System</span>
                                </div>
                                <select className="select select-bordered" {...register('operatingSystem')} defaultValue={phone.operatingSystem!}>
                                    <option>iOS</option>
                                    <option selected>andriod</option>
                                </select>

                            </label>
                            <div className="form-control mt-8">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Water Resistance</span>
                                    <input type="checkbox" className="checkbox" id="waterResistance" {...register('waterResistance')} defaultChecked={phone.waterResistance!} />
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn w-full  mt-4">CREATE VARIANT</button>
                    </form>
                </div>
            }
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default CreateMoel;