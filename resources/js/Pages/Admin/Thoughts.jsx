import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";
// import AddEvent from "./AddEvent";
// import { useState } from "react";
import { useState, useEffect } from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import { animated, useSpring } from 'react-spring';
import AddThought from "./AddThought";
// import Loading from '/resources/js/Components/Loading';
// import ConfirmDelete from "./ConfirmDeleteNews";
// import AddPost from "./AddPost";
// import AddBlogCat from "./AddBlogCat";
// import EditPost from "./EditPost";
// import EachEvent from './EachEvent';



export default function Thoughts(props) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddCat, setOpenAddCat] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  // const [posts, setPosts] = useState(props.thoughts);
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
        <span className="text-xl font-bold">Thoughts:</span> 
          <span 
            onClick={() => {setOpenAdd(true)}}
            className="ml-3 text-sm cursor-pointer text-blue">
                <i className="las la-plus"></i> Add Post
          </span>
        </div>
        {/* {confirm && <ConfirmDelete handleDelete={handleDelete} close={close} deleteItem={deleteItem} />} */}
        {/* {loading ? <Loading /> : ""} */}
        <div className="pr-5 ">
            <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {
                props.thoughts ? 
                props.thoughts.map((eachPost, i) => {
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
                                <div class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="mr-2 h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                                {eachPost.categories}
                                </div>
                                <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                                <small>Published <u>{eachPost.created_at.split("T")[0]}
                                  </u> by
                                    <a href="#!">Admin</a></small>
                                </p>
                                <p 
                                  class="text-neutral-500 dark:text-neutral-300">
                                    <span dangerouslySetInnerHTML={{ __html: eachPost.content.substring(0, 100) }}/>
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
                    <AddThought cat={props.cat} message={props.flash.message} closeAdd={closeAdd}/>
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