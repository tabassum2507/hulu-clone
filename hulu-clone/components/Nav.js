import requests from '../utils/requests';
import {useRouter} from 'next/router';

function Nav({genre}) {
    console.log(genre);
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide h-16">
                {Object.entries(requests).map(([key, {title, url}])=>{
                    if(key===genre)
                        return(
                            <h2 
                                key={key}
                                onClick={()=> router.push(`/?genre=${key}`)}
                                className='cursor-pointer transition duration-100 
                                transform scale-125 text-white 
                                active:text-red-500 last:pr-24 select-none'
                            >{title}</h2>
                        )
                    else
                        return (
                            <h2 
                                key={key}
                                onClick={()=> router.push(`/?genre=${key}`)}
                                className='cursor-pointer transition duration-100 
                                transform hover:scale-125 hover:text-white 
                                active:text-red-500 last:pr-24 select-none'
                            >{title}</h2>
                        )
                })}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-hulu h-10 w-1/12" />
        </nav>
    )
}

export default Nav
