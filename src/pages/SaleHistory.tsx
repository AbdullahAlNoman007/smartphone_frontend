import { useState } from "react";
import { useSalehistoryQuery } from "../redux/features/getPhone/updatePhoneApi";

const SaleHistory = () => {
    const [duration, setDuration] = useState('')
    const { data } = useSalehistoryQuery(duration)

    console.log(data);

    return (
        <div className="w-full p-10">
            <label className="form-control  flex flex-row  gap-4 my-5">
                <div className="label">
                    <span className="label-text text-2xl">Sale History duration</span>
                </div>
                <select className="select select-bordered" onChange={(e) => setDuration(`duration=${e.target?.value}`)}>
                    <option value='none'>None</option>
                    <option value='daily'>Daily</option>
                    <option value='weekly'>Weekly</option>
                    <option value='monthly'>Monthly</option>
                    <option value='yearly'>Yearly</option>
                </select>
            </label>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Quantity</th>
                            <th>Sale Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data?.data.map((datam: any, index: number) => {
                                return <tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>{datam.buyerName}</td>
                                    <td>{datam.quantity}</td>
                                    <td>{datam.saleDate}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SaleHistory;