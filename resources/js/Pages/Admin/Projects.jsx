import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";
// import AddEvent from "./AddEvent";
// import { useState } from "react";
import { useState, useEffect } from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import { animated, useSpring } from 'react-spring';
import AddThought from "./AddThought";
import AddProject from "./AddProjects";
// import Loading from '/resources/js/Components/Loading';
// import ConfirmDelete from "./ConfirmDeleteNews";
// import AddPost from "./AddPost";
// import AddBlogCat from "./AddBlogCat";
// import EditPost from "./EditPost";
// import EachEvent from './EachEvent';



export default function Projects(props) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddCat, setOpenAddCat] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [deleteItem, setDeleteItem] = useState([]);
  const [editData, setEditData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [leaders, setLeaders] = useState(props.leaders);
    console.log(props);
    

    // console.log(leaders);

    const handleDelete = (i) => {
      let data = posts;
    console.log(data);
      data.data.data.splice(i, 1);
      setPosts({...posts});
      setConfirm(false)
    }

  const confirmDelete = (i, id, url) => {
    setConfirm(true);
    setDeleteItem([i, id, url]);

  }

  const showEdit = (data) => {
    setOpenEdit(() => {
        setEditData(data);
        console.log(data);
        return true;
    });
    

  }

  const closeEdit = () => {
    setOpenEdit(false);
    location.reload();
  }

  const close = () => {
    setConfirm(false)
  }

  const closeAdd = () => {
    setOpenAdd(false);
    location.reload();
  };

  const closeAddCat = () => {
    setOpenAddCat(false);
  };

  // console.log(props.categories);
  return (
    <AdminAuthenticated
      auth={props.auth}
      errors={props.errors}
      username={props.auth.user.name }
      header={
        <h2 className="text-lg font-semibold leading-tight text-gray-800">
          Admin Dashboard
        </h2>
      }
    >
        <Head title="Admin Dashboard" />

        <div className="p-5 rounded-lg mt-3 shadow-lg">
        <span className="text-xl font-bold">Projects:</span> 
          <span 
            onClick={() => {setOpenAdd(true)}}
            className="ml-3 text-sm cursor-pointer text-blue">
                <i className="las la-plus"></i> Add Projects
          </span>
        </div>
        {/* {confirm && <ConfirmDelete handleDelete={handleDelete} close={close} deleteItem={deleteItem} />} */}
        {/* {loading ? <Loading /> : ""} */}
        <div className="pr-5 ">
            <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {
                props.projects ? 
                props.projects.map((eachPost, i) => {
                    return (
                        <div className="">
                            <div className="flex justify-between px-2 z-10 relative top-8 right-0">
                                <div
                                    // href={route('leaders.destroy', {id: eachPost.id})} 
                                    // method="delete"
                                    onClick={() => showEdit(eachPost)}
                                    className="bg-white w-6 h-6 text-center cursor-pointer rounded-full" >
                                    <i class="text-blue lar la-edit"></i>
                                </div>
                                <div 
                                    // href={route('leaders.destroy', {id: eachPost.id})} 
                                    // method="delete"
                                    onClick={() => {confirmDelete(i, eachPost.id, "post.destroy")}}
                                    className="bg-white cursor-pointer w-6 h-6 text-center rounded-full" >
                                    <i className="text-ruby las la-trash"></i>
                                </div>
                            </div>
                            <div key={i} class="mb-6 lg:mb-0">
                                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img src={"/storage/"+eachPost.img_location} class="w-full" alt={eachPost.title} />
                                <Link href={"/posts_update/get_one_posts/"+eachPost.id}>
                                    <div
                                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </Link>
                                </div>

                                <h5 class="mb-3 text-lg font-bold capitalize">{eachPost.title}</h5>
                                
                                <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                <small>Published <u>{eachPost.created_at.split("T")[0]}
                                  </u> by
                                    <a href="#!">Admin</a></small>
                                </p>
                                <p 
                                  class="text-neutral-500 dark:text-neutral-300">
                                    <span dangerouslySetInnerHTML={{ __html: eachPost.description.substring(0, 100) }}/>
                                  <Link className="text-blue" href={"/posts_update/get_one_posts/"+eachPost.id}>
                                    ...read more
                                  </Link>
                                </p>
                            </div>
                        </div>
                    )
                })
                :
                <div className="text-center text-xl font-bold uppercase">
                    No Post found
                </div>
            }
            </div>

            <div>
                {
                    openAdd &&
                    <AddProject message={props.flash.message} closeAdd={closeAdd}/>
                }

{
                    openEdit &&
                    <EditPost post={editData} categories={props.categories} message={props.flash.message} closeEdit={closeEdit}/>
                }

                {
                    openAddCat &&
                    <AddBlogCat message={props.flash.message} closeAddCat={closeAddCat}/>
                }
            </div>

            
        </div>
    </AdminAuthenticated>
  );
}