import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, Link, usePage } from '@inertiajs/inertia-react';
  
export default function Dashboard(props) {
  
    const { message } = usePage().props
  
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
  
        data.fullname = "";
        data.roles = "";
        data.emailadress = "";
    }
  
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Laravel React JS Form Validation Example - ItSolutionStuff.com</h2>}
        >
            <Head title="Posts" />
 
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                        { message &&
                            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3" role="alert" >
                                <div className="flex">
                                    <div>
                                      <p className="text-sm">{ message }</p>
                                    </div>
                                </div>
                            </div>
                        }
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Ful Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="fullname"
                                            name="fullname"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("fullname", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.fullname}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Body</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="roles"
                                            name="roles"
                                            errors={errors.roles}
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData("roles", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.roles}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Body</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="emailaddress"
                                            name="emailaddress"
                                            errors={errors.roles}
                                            value={data.roles}
                                            onChange={(e) =>
                                                setData("emailaddress", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.emailaddress}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}