'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const NavSearch = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    console.log("Search params:", searchParams.get("search"))

    const [search, setSearch] = useState(searchParams.get("search")?.toString() || "")

    const handleSearch = useDebouncedCallback((value:string) => {
        const params = new URLSearchParams(searchParams)
        console.log("URL search params:", params)
        if(value){
            params.set('search', value)
        }
        else {
            params.delete('search')
        }
        replace(`/?${params.toString()}`)
    }, 500)

    useEffect(()=>{
        if(!searchParams.get('search')){
            setSearch("")
        }
    }, [searchParams.get('search')])

    return (
        <Input value={search} onChange={(e) => {setSearch(e.target.value); handleSearch(e.target.value)}} type="text" className='max-w-xs dark:bg-muted' placeholder='Find a property ...'/>
    );
};

export default NavSearch;
