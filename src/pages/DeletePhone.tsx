import { useState } from 'react';
import { Tproduct } from '../Types';
import { useDeletephoneMutation, useGetallphoneQuery } from '../redux/features/getPhone/getPhoneApi';
import { toast } from 'sonner';

const DeletePhone = () => {
    const { data } = useGetallphoneQuery(undefined);
    const [deletephone] = useDeletephoneMutation()
    const phones: Tproduct[] = data?.data;
    const [selectedPhones, setSelectedPhones] = useState<string[]>([]);

    const handleCheckboxChange = (phoneId: string) => {
        if (selectedPhones.includes(phoneId)) {

            setSelectedPhones(selectedPhones.filter((id) => id !== phoneId));
        } else {

            setSelectedPhones([...selectedPhones, phoneId]);
        }
    };
    const bulkDelete = async () => {
        const isDelete = confirm(`Are you sure? You want to delete ${selectedPhones.length} SmartPhone?`)
        const id = { id: [...selectedPhones] }
        if (isDelete) {
            try {
                const res = await deletephone(id).unwrap()
                const success = res.success
                if (!success) {
                    throw new Error()
                }
                toast.success("Phone is deleted Successfully")
            } catch (error: any) {
                toast.error(error?.data?.errorMessage)
            }
        }
    }


    return (
        <div className="w-full m-10 p-10">
            <p className='text-center text-2xl my-10 font-medium'>Bulk Delete</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" disabled />
                            </label>
                        </th>
                        <th>Phone Name</th>
                        <th>Price</th>
                        <th>Camera</th>
                        <th>RAM</th>
                        <th>ROM</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {phones &&
                        phones.map((phone, index) => (
                            <tr className="hover" key={index}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={() => handleCheckboxChange(phone._id as string)}
                                        />
                                    </label>
                                </th>
                                <td>{phone.name}</td>
                                <td>{phone.price}</td>
                                <td>{phone.cameraQuality}</td>
                                <td>{phone.ram}</td>
                                <td>{phone.storageCapacity}</td>
                                <td>{phone.quantity}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <button className='btn btn-error m-6 float-right' onClick={bulkDelete}>Delete All</button>
        </div>
    );
};

export default DeletePhone;
