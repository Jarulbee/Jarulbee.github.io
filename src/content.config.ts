import { defineCollection, z } from "astro:content";
const certifications = defineCollection({type:"content",schema:z.object({
 title:z.string(),short_name:z.string(),authority:z.string(),description:z.string(),
 timeline:z.string().optional(),checklist:z.array(z.string()).optional(),whatsapp_message:z.string().optional()
})});
const blogs = defineCollection({type:"content",schema:z.object({
 title:z.string(),category:z.enum(["BIS","BEE","WPC","EPR","MTCTE","TEC"]),
 author:z.string().default("Jarulbee India"),date:z.coerce.date(),featured:z.boolean().optional(),
 image:z.string().optional(),excerpt:z.string().optional(),read_time:z.string().optional(),
 seo_title:z.string().optional(),seo_description:z.string().optional()
})});
export const collections={certifications,blogs};