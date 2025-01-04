//We created this hook as sanity studion was laggging with header
"use client"

import { usePathname } from "next/navigation"
//Its A Client Component hook that lets you read the current URL's pathname.
export default function useInvalidPaths() {
    const PathName = usePathname();
    const invalidPaths = ['studio','admin']
    const isInvalid = invalidPaths.some((path)=>PathName.includes(path))
    //If thers "studio" inside the path, it will return true and it will me invalid path
    return isInvalid
}