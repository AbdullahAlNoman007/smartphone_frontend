import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdatephoneMutation } from "../../redux/features/getPhone/updatePhoneApi";


const UpdateModel = ({ phoneId, phoneName }: { phoneId: string | null, phoneName: string | null }) => {

    const { register, handleSubmit } = useForm()
    const [updatephone] = useUpdatephoneMutation()
    const onSubmit = async (data: any) => {
        const ram = data.ram ? `${data.ram}GB` : null
        const storageCapacity = data.storageCapacity ? `${data.storageCapacity}GB` : null
        const screenSize = data.screenSize ? `${data.screenSize} inches` : null
        const cameraQuality = data.cameraQuality ? `${data.cameraQuality} MP` : null
        const batteryLife = data.batteryLife ? `${data.batteryLife} hours` : null
        const price = data.price === 0 ? null : Number(data.price);
        const quantity = data.quantity === 0 ? null : Number(data.quantity);
        const brand = data.brand.length === 0 ? null : data.brand;
        const model = data.model.length === 0 ? null : data.model;

        let phoneInfo: any = {
            price,
            quantity,
            brand,
            model,
            operatingSystem: data.operatingSystem,
            ram,
            waterResistance: data.waterResistance,
            storageCapacity,
            screenSize,
            cameraQuality,
            batteryLife

        }
        const UpdatephoneInfo = Object.fromEntries(Object.entries(phoneInfo).filter(([key, value]) => value !== null));
        phoneInfo = {
            id: phoneId,
            body: UpdatephoneInfo
        }

        try {
            const res = await updatephone(phoneInfo).unwrap()
            const success = res.success
            if (!success) {
                throw new Error()
            }
            toast.success("Phone is updated Successfully")
        } catch (error: any) {
            toast.error(error?.data?.errorMessage)
        }



    }

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
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
                                    value={phoneName!}
                                    readOnly
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
                                />

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
                                    {...register('ram')}
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
                                    type="number"
                                    id="ROM"
                                    placeholder="ROM"
                                    className="input input-bordered w-full max-w-sm"
                                    {...register('storageCapacity')}
                                />

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
                                    {...register('screenSize')}
                                />

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
                                    {...register('cameraQuality')}
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
                                    type="number"
                                    id="batteryLife"
                                    placeholder="Battery Life"
                                    className="input input-bordered w-full max-w-sm"
                                    {...register('batteryLife')}
                                />

                            </label>
                        </div>
                        <label className="form-control w-64">
                            <div className="label">
                                <span className="label-text">Operating System</span>
                            </div>
                            <select className="select select-bordered" {...register('operatingSystem')}>
                                <option>iOS</option>
                                <option selected>andriod</option>
                            </select>

                        </label>
                        <div className="form-control mt-8">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-2">Water Resistance</span>
                                <input type="checkbox" className="checkbox" id="waterResistance" {...register('waterResistance')} />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn w-full  mt-4">UPDATE</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default UpdateModel;