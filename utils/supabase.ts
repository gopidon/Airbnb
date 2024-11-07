import {createClient} from '@supabase/supabase-js';

const bucket = 'temp-airbnb'



const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string

// console.log(`URL is: ${url}`)

const supabase = createClient("https://wehgnsvlflggpkfsnsyn.supabase.co", key)

export const uploadImage = async(image:File) => {
    const timestamp = Date.now()
    const newName = `${timestamp}-${image.name}`
    const {data, error} = await supabase.storage.from(bucket).upload(newName, image,{cacheControl:'3600'})
    if(!data) throw new Error(`Supabase error: ${error.message}`)
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl    
}