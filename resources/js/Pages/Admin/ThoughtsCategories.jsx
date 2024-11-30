import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AddCategory from "./AddCategory";

export default function ThoughtsCategories(props) {
//   console.log(props.user);
const [openAdd, setOpenAdd] = useState(false);
const closeAdd = () => {
  setOpenAdd(false);
};
  return (
    <AdminAuthenticated
      auth={props.auth}
      errors={props.errors}
      username={props.auth.user.name}
      header={
        <h2 className="text-lg font-semibold leading-tight text-gray-800">
          Admin Dashboard
        </h2>
      }
    >
      <Head title="Admin Dashboard" />

        <div className="">
            <div className="mt-4 p-5 bg-silver">
                <span className="text-xl font-bold">Categories:</span> 
                <span onClick={() => {setOpenAdd(true)}} className="cursor-pointer">
                    <i class="ml-3 las la-plus"></i> Add Category
                </span>
            </div>

            <div className="mt-4 p-5 bg-silver ">
            <table class="table-auto w-full border-collapse border border-white">
              <thead>
                <tr >
                  <th className="border border-white">Categories</th>
                  <th className="border border-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.cat ?
                  props.cat.map((cat, i) => {
                    return (
                      <tr className="" key={i}>
                        <td className="border border-white text-center">{cat.category}</td>
                        <td className="border border-white text-center text-sm">
                          <Link href={"/delete_cat/"+ cat.id}>
                            <i class="las la-trash"></i>
                              Delete
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                :""
                }
              </tbody>
            </table>
            </div>

            <div>
            {
                openAdd ?
                <AddCategory message={props.flash.message} closeAdd={closeAdd}/>:
                ""
            }
            </div>
        </div>
    </AdminAuthenticated>
  );
}