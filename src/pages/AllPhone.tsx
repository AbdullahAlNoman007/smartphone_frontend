
import { Tproduct } from "../Types";
import { useDeletephoneMutation, useGetallphoneQuery } from "../redux/features/getPhone/getPhoneApi";
import { CiEdit } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoDuplicate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import UpdateModel from "../components/ui/UpdateModel";
import { useState } from "react";
import BuyerModal from "../components/ui/BuyerModal";
import CreateMoel from "../components/ui/CreateMoel";

const AllPhone = () => {
    const { data } = useGetallphoneQuery(undefined)
    const phones: Tproduct[] = data?.data
    const [deletephone] = useDeletephoneMutation()
    const [selectedPhoneId, setSelectedPhoneId] = useState<string | null>(null);
    const [selectedPhoneName, setSelectedPhoneName] = useState<string | null>(null);
    const [edit, setEdit] = useState()

    const deletePhone = async (phoneId: string) => {
        const isDelete = confirm('Are you sure?')
        const id = { id: [phoneId] }
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

    const showModal = (id: string, name: string) => {
        const modalElement = document.getElementById('my_modal_1');
        setSelectedPhoneName(name)
        setSelectedPhoneId(id)
        if (modalElement instanceof HTMLDialogElement) {
            modalElement.showModal();
        } else {
            console.error('Modal element not found or is not of type HTMLDialogElement');
        }

    };
    const openModal = (id: string) => {
        const modalElement = document.getElementById('my_modal_2');
        setSelectedPhoneId(id)
        if (modalElement instanceof HTMLDialogElement) {
            modalElement.showModal();
        } else {
            console.error('Modal element not found or is not of type HTMLDialogElement');
        }

    };
    const displayModal = (any: any) => {
        const modalElement = document.getElementById('my_modal_3');
        setEdit(any)
        if (modalElement instanceof HTMLDialogElement) {
            modalElement.showModal();
        } else {
            console.error('Modal element not found or is not of type HTMLDialogElement');
        }

    };

    return (
        <div className="w-full p-10">
            {
                phones && <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Phone Name</th>
                            <th>Price</th>
                            <th>Camera</th>
                            <th>RAM</th>
                            <th>ROM</th>
                            <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            phones.map((phone, index) => {
                                return (
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>{phone.name}</td>
                                        <td>{phone.price}</td>
                                        <td>{phone.cameraQuality}</td>
                                        <td>{phone.ram}</td>
                                        <td>{phone.storageCapacity}</td>
                                        <td>{phone.quantity}</td>
                                        <td><button className="size-8" onClick={() => openModal(phone._id as string)}><FaCartShopping /></button></td>
                                        <BuyerModal id={selectedPhoneId as string} />
                                        <td><button className="size-8" onClick={() => showModal(phone._id as string, phone.name as string)}><CiEdit /></button></td>
                                        <UpdateModel phoneId={selectedPhoneId} phoneName={selectedPhoneName}></UpdateModel>
                                        <td><button className="size-8" onClick={() => displayModal(phone)}><IoDuplicate /></button></td>
                                        <CreateMoel phone={edit} />
                                        <td><button className="size-8" onClick={() => deletePhone(phone._id as string)}><MdDelete /></button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div >
    );
};

export default AllPhone;