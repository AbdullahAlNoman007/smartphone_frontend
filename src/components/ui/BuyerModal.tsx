import { useForm } from "react-hook-form";
import { useBuyphoneMutation } from "../../redux/features/getPhone/updatePhoneApi";
import { toast } from "sonner";


const BuyerModal = ({ id }: { id: string }) => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [buyphone] = useBuyphoneMutation()
    const onSubmit = async (data: any) => {
        const info = {
            id: id,
            body: {
                quantity: Number(data.quantity),
                buyerName: data.name,
                saleDate: data.saleDate
            }
        }

        try {
            const res = await buyphone(info).unwrap()
            const success = res.success
            if (!success) {
                throw new Error()
            }
            toast.success("Phone is Bought Successfully")
        } catch (error: any) {
            toast.error(error?.data?.errorMessage)
        }



    }
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)} className="border-2 px-10 py-16 rounded-lg w-full ">
                    <h1 className="text-center text-3xl font-medium">Buy Phone</h1>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
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
                                <span className="label-text">Quantity</span>
                            </div>
                            <input
                                type="number"
                                id="quantity"
                                placeholder="Enter Quantity"
                                className="input input-bordered w-full max-w-sm"
                                {...register('quantity', { required: true })}
                            />
                            {errors.quantity?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">Quantity is required</p>
                            )}
                        </label>
                    </div>
                    <div className="m-2">
                        <label className="form-control w-full max-w-sm">
                            <div className="label">
                                <span className="label-text">Sale Date</span>
                            </div>
                            <input
                                type="text"
                                id="saledate"
                                placeholder="Enter date (YYYY-MM-DD)"
                                className="input input-bordered w-full max-w-sm"
                                {...register('saleDate', { required: true })}
                            />
                            {errors.saleDate?.type === "required" && (
                                <p role="alert" className="mt-2 text-red-500">saleDate is required</p>
                            )}
                        </label>
                    </div>
                    <button type="submit" className="btn w-full max-w-sm mt-4">Buy</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default BuyerModal;