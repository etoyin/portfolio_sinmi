import { Link } from '@inertiajs/react'
import React from 'react'

function Project_grid({projects}) {
    const trunc = (str) => {
        if(str.length > 100){
            return str.substring(0,100) + "...";
        }
        return str.substring(0,100);
    }
  return (
    <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
        {
            projects ? 
            projects.map((each, i) => {
                return (
                    <div key={i} class="my-6 lg:mb-0">
                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init data-te-ripple-color="light">
                        <img src={"/storage/"+each.img_location} class="w-full" alt={each.title} />
                        <Link href={"/news_update/get_one_news/"+each.id}>
                            <div
                            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                            </div>
                        </Link>
                        </div>

                        <h5 class="mb-3 text-lg font-bold capitalize">{each.title}</h5>
                        
                        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                        <small>Published <u>{each.created_at.split("T")[0]}</u> by
                            <a href="#!">Admin</a></small>
                        </p>
                        <p class="text-neutral-500 dark:text-neutral-300">
                        <span dangerouslySetInnerHTML={{ __html: each.description.substring(0, 100) }}/>
                        <Link className="text-blue" href={`/projects/${each.id}/${each.title}`}>
                            ...read more
                        </Link>
                        </p>
                    </div>
                )
            })
            :
            <div className="text-center text-xl slide font-bold uppercase">
                No Projects found
            </div>
        }
    </div>
  )
}

export default Project_grid