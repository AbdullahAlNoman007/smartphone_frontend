import { useState } from "react";
import { useGetphoneQuery } from "../redux/features/getPhone/getPhoneApi";
import { toast } from "sonner";

const PhoneFiltering = () => {
    const [minValue, setMinValue] = useState<number>(250);
    const [maxValue, setMaxValue] = useState<number>(700);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [storage, setstorage] = useState<string>('');
    const [screen, setscreen] = useState<string>('');
    const [operating, setOperating] = useState<string>('');


    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value));
    };
    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.target.value));
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstorage(`${event.target.value}GB`);
    };
    const handleScreenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setscreen(`${event.target.value} inches`);
    };


    const constructUrl = () => {
        const filters = [];
        if (operating) {
            filters.push(`operatingSystem=${operating}`);
        }

        if (minValue || maxValue) {
            filters.push(`price=${minValue || 0}-${maxValue || 1000}`);
        }

        if (storage) {
            filters.push(`storageCapacity
            =${storage}`);
        }

        if (screen) {
            filters.push(`screenSize=${screen}`);
        }
        if (searchTerm) {
            filters.push(`searchTerm=${searchTerm}`);
        }
        const queryString = filters.join('&');

        const url = queryString ? `?${queryString}` : '';

        return url;
    };

    const { data } = useGetphoneQuery(constructUrl())
    const phones = data?.data

    try {

        if (!data.success) {
            throw new Error()
        }
        else {
            toast.success(data.message)
        }

    } catch (error: any) {
        toast.error(error?.data?.errorMessage)
    }





    return (
        <div className="w-full">
            <form className="m-10 border-2 p-10 rounded-lg ">
                <h1 className="text-center text-2xl mb-10">Phone filter</h1>
                <div className="flex items-center justify-around ">
                    <div className="flex gap-5 w-full max-w-sm">
                        <input type="range" id='min' min={0} max={1000} value={minValue} className="range" onChange={handleMinChange} />
                        <label htmlFor="min">Min: {minValue}</label>
                    </div>
                    <div className="flex gap-5 w-full max-w-sm">
                        <input type="range" id='max' min={500} max={2000} value={maxValue} className="range" onChange={handleMaxChange} />
                        <label htmlFor="max">Max: {maxValue}</label>
                    </div>
                    <div className="flex flex-row gap-1 ">
                        <input type="text" placeholder="Search" className="input input-bordered w-full max-w-sm" onChange={handleSearchChange} />
                    </div>
                </div>
                <div className="flex items-center justify-around ">
                    <label className="form-control  flex flex-row  gap-2 my-5">
                        <div className="label">
                            <span className="label-text text-lg">Operating System</span>
                        </div>
                        <select className="select select-bordered" onChange={(e) => setOperating(e.target.value)} >
                            <option value='andriod'>Andriod</option>
                            <option value='iOS'>iOS</option>
                        </select>
                    </label>
                    <div className="flex flex-row gap-1 ">
                        <input type="text" placeholder="Storage Capacity" className="input input-bordered w-full max-w-sm" onBlur={handleStorageChange} />
                    </div>
                    <div className="flex flex-row gap-1 ">
                        <input type="text" placeholder="Screen Size" className="input input-bordered w-full max-w-sm" onBlur={handleScreenChange} />
                    </div>
                </div>
            </form>
            <div className="w-full p-10">
                {
                    phones && <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Phone Name</th>
                                <th>Price</th>
                                <th>ROM</th>
                                <th>Operating System</th>
                                <th>Brand</th>
                                <th>Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                phones.map((phone: any, index: number) => {
                                    return (
                                        <tr className="hover" key={index}>
                                            <th>{index + 1}</th>
                                            <td>{phone.name}</td>
                                            <td>{phone.price}</td>
                                            <td>{phone.storageCapacity}</td>
                                            <td>{phone.operatingSystem}</td>
                                            <td>{phone.brand}</td>
                                            <td>{phone.model}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div >
        </div>
    );
};

export default PhoneFiltering;