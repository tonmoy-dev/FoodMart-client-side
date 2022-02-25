import { SearchIcon, TrashIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import React from "react";

const CouponsList = () => {
    return (
        <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
                Coupons List
            </h2>
            {/* breadcrumb */}
            <div className="pb-4">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <HomeIcon
                                    className="h-4 w-4 text-gray-700 mr-2"
                                    aria-hidden="true"
                                />
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <a
                                    href="#"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Admin
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                    Coupons List
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="md:p-10 bg-white md:shadow-lg  rounded-lg">
                <h2 className="text-2xl font-semibold py-4">
                    Your Coupons List
                </h2>
                {/* Couponslist table */}
                <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
                    {/* search bar */}
                    <div className="w-full sm:block items-center md:flex grow py-3 px-15">
                        <div className="w-full relative mx-auto text-gray-600">
                            <input
                                className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-green-500"
                                type="search"
                                name="search"
                                placeholder="Search coupon"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 mt-3 mr-4"
                            >
                                <SearchIcon
                                    className="h-4 w-4 text-gray-700"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p className="">Select</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p className="">Code</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>Type</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>Discount</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>Status</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>Start date</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>End date</p>
                                </th>
                                <th
                                    scope="col"
                                    className="p-4 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p>Action</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="p-4 whitespace-nowrap">
                                    <input type="checkbox" className="ml-4" />
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p className="uppercase">Esunday</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>Percentage</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>20%</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-500 bg-blue-200 rounded-lg bg-opacity-50">
                                        Finish
                                    </span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        20-6-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        05-7-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <div className="flex justify-center items-center">
                                        <TrashIcon
                                            className="h-6 w-6 text-red-500 "
                                            aria-hidden="true"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 whitespace-nowrap">
                                    <input type="checkbox" className="ml-4" />
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p className="uppercase">spscrash</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>Percentage</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>20%</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        25-7-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        05-8-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <div className="flex justify-center items-center">
                                        <TrashIcon
                                            className="h-6 w-6 text-red-500 "
                                            aria-hidden="true"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 whitespace-nowrap">
                                    <input type="checkbox" className="ml-4" />
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p className="uppercase">spscrash</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>Percentage</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>20%</p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                        Active
                                    </span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        25-7-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <p>
                                        05-8-2021 <span> 00.00</span>
                                    </p>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <div className="flex justify-center items-center">
                                        <TrashIcon
                                            className="h-6 w-6 text-red-500 "
                                            aria-hidden="true"
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coupons grid view - mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="my-2 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg">
                        <div className="px-4">
                            <div className="text-left text-gray-600">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Coupon Code:{" "}
                                </span>
                                <span className="text-xl font-semibold">
                                    <a href="#">SPSCRASH</a>
                                </span>
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Type:{" "}
                                    </span>
                                    <span className="text-gray-600">
                                        Percentage
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Discount:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-yellow-500 bg-yellow-200 rounded-lg bg-opacity-50">
                                        25%
                                    </span>
                                </div>
                            </div>
                            <div className="py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Start Date:{" "}
                                </span>
                                <span className="text-gray-600">
                                    10-07-2021 00.00
                                </span>
                            </div>
                            <div className="py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    End Date:{" "}
                                </span>
                                <span className="text-gray-600">
                                    25-07-2021 00.00
                                </span>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Status:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50 border border-green-200">
                                        Active
                                    </span>
                                </div>
                                <div className="w-full text-left py-1">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Action:{" "}
                                    </span>
                                    <a href="#">
                                        <span className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-lg border border-red-200 bg-opacity-50">
                                            <TrashIcon
                                                className="h-4 w-4 text-red-500 inline-block mr-1 mb-1"
                                                aria-hidden="true"
                                            />
                                            Delete
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 bg-yellow-100 bg-opacity-40 shadow-lg py-6 rounded-lg">
                        <div className="px-4">
                            <div className="text-left text-gray-600">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Coupon Code:{" "}
                                </span>
                                <span className="text-xl font-semibold">
                                    <a href="#">ESUNDAY</a>
                                </span>
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Type:{" "}
                                    </span>
                                    <span className="text-gray-600">
                                        Percentage
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Discount:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-yellow-500 bg-yellow-200 rounded-lg bg-opacity-50">
                                        20%
                                    </span>
                                </div>
                            </div>
                            <div className="py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Start Date:{" "}
                                </span>
                                <span className="text-gray-600">
                                    20-06-2021 00.00
                                </span>
                            </div>
                            <div className="py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    End Date:{" "}
                                </span>
                                <span className="text-gray-600">
                                    30-06-2021 00.00
                                </span>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Status:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-blue-500 bg-blue-200 rounded-lg bg-opacity-50 border border-blue-200">
                                        Finish
                                    </span>
                                </div>
                                <div className="w-full text-left py-1">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Action:{" "}
                                    </span>
                                    <a href="#">
                                        <span className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-lg border border-red-200 bg-opacity-50">
                                            <TrashIcon
                                                className="h-4 w-4 text-red-500 inline-block mr-1 mb-1"
                                                aria-hidden="true"
                                            />
                                            Delete
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponsList;