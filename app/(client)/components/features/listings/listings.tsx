"use client"

import { useQuery } from "@tanstack/react-query";

type Listing = {
    id: number,
    title: string,
    views: number,
}

const fetchListings = async (): Promise<Listing[]> => {
    const response = await fetch("http://localhost:3000/posts");
    return response.json()
}

const Listings = () => {

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["listings"],
        queryFn: fetchListings,
    })
    return (
        data && data.map(({ id, title, views }: Listing, key: number) => (
            <div key={key}>
                <p>{title}</p>
                {views && <div>true</div>}
            </div>
        ))
    )
}

export default Listings